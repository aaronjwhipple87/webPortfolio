"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "w-full rounded-lg border-2 border-mist bg-white px-4 py-2 text-base text-ink outline-none focus:border-berry aria-invalid:border-red-700";

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p id={id} className="mt-1 text-sm text-red-800">
      {errors[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-2xl bg-white p-8 text-center text-xl shadow-sm">
        {state.message}
      </p>
    );
  }

  const fields = [
    { name: "name", label: "Name", type: "text", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
  ] as const;

  return (
    <form action={formAction} noValidate className="space-y-5 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      {fields.map((field) => {
        const errors = state.errors?.[field.name];
        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1 block font-bold">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required
              defaultValue={state.values?.[field.name]}
              aria-invalid={errors ? true : undefined}
              aria-describedby={errors ? `${field.name}-error` : undefined}
              className={inputClass}
            />
            <FieldError id={`${field.name}-error`} errors={errors} />
          </div>
        );
      })}

      <div>
        <label htmlFor="message" className="mb-1 block font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={state.values?.message}
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={inputClass}
        />
        <FieldError id="message-error" errors={state.errors?.message} />
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-red-800">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-berry px-8 py-2 text-white transition-colors hover:bg-berry-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
