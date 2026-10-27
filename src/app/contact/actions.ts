"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/content/site";
import { rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  subject: z.string().trim().min(1, "Please add a subject.").max(150),
  message: z.string().trim().min(10, "Your message is a little short.").max(5000),
});

type Field = keyof z.infer<typeof schema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string[]>>;
  values?: Partial<Record<Field, string>>;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}

const siteHost = new URL(site.url).host;

// Vercel adds approximate visitor geolocation headers; city arrives URL-encoded.
function describeLocation(requestHeaders: Headers) {
  const city = requestHeaders.get("x-vercel-ip-city");
  const parts = [
    city ? safeDecode(city) : null,
    requestHeaders.get("x-vercel-ip-country-region"),
    requestHeaders.get("x-vercel-ip-country"),
  ].filter(Boolean);
  return parts.length ? parts.join(", ") : null;
}

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function renderEmail(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: string;
  location: string | null;
}) {
  const rows: [string, string][] = [
    ["Name", escapeHtml(fields.name)],
    ["Email", `<a href="mailto:${escapeHtml(fields.email)}" style="color:#922260">${escapeHtml(fields.email)}</a>`],
    ["Subject", escapeHtml(fields.subject)],
    ["Sent", escapeHtml(fields.sentAt)],
  ];
  if (fields.location) rows.push(["Location", `${escapeHtml(fields.location)} <span style="color:#6b7b7e">(approximate)</span>`]);

  const rowHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#6b7b7e;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:4px 0;color:#223134">${value}</td></tr>`,
    )
    .join("");

  return `<div style="background:#f7f9fa;padding:24px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #adc4ce">
<tr><td style="background:#922260;color:#ffffff;padding:16px 24px">
<div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:0.85">${siteHost} &middot; Contact form</div>
<div style="font-size:20px;font-weight:bold;margin-top:4px">New message from ${escapeHtml(fields.name)}</div>
</td></tr>
<tr><td style="padding:20px 24px 8px"><table role="presentation" cellpadding="0" cellspacing="0">${rowHtml}</table></td></tr>
<tr><td style="padding:8px 24px 20px"><div style="border-left:4px solid #be7aa0;background:#f7f9fa;padding:12px 16px;color:#223134;white-space:pre-wrap">${escapeHtml(fields.message)}</div></td></tr>
<tr><td style="padding:12px 24px;border-top:1px solid #adc4ce;color:#6b7b7e;font-size:13px">Sent from the contact form at <a href="${site.url}/contact" style="color:#922260">${siteHost}/contact</a>. Reply to this email to answer ${escapeHtml(fields.name)} directly.</td></tr>
</table>
</div>`;
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: z.flattenError(parsed.error).fieldErrors,
      values,
    };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60 * 60 * 1000 })) {
    return {
      status: "error",
      message: `Too many messages from this connection. Please try again later or email ${site.email}.`,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return {
      status: "error",
      message: `The contact form isn't available right now. Please email ${site.email}.`,
      values,
    };
  }

  const { name, email, subject, message } = parsed.data;
  const sentAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    dateStyle: "full",
    timeStyle: "short",
  });
  const location = describeLocation(requestHeaders);
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? site.email,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: [
      `New message from the contact form on ${siteHost}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Sent: ${sentAt}`,
      ...(location ? [`Location: ${location}`] : []),
      "",
      message,
      "",
      "--",
      `Reply to this email to answer ${name} directly.`,
    ].join("\n"),
    html: renderEmail({ name, email, subject, message, sentAt, location }),
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email ${site.email}.`,
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent. I'll get back to you soon." };
}
