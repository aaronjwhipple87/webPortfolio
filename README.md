# aaronjwhipple.com

Personal portfolio of Aaron Whipple, built with Next.js (App Router), React, TypeScript and Tailwind CSS, deployed on Vercel.

The original hand-built HTML/PHP site is preserved at the [`legacy-static`](https://github.com/aaronjwhipple87/webPortfolio/tree/legacy-static) tag.

## Development

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY to test the contact form
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run lint
```

## Where things live

| Path | What |
| --- | --- |
| `src/content/projects.ts` | All projects: copy, tech, timeline, links, images. Add a project by adding an entry. |
| `src/content/site.ts` | Name, contact info, socials, skills, About page copy. |
| `src/app/` | Routes: `/`, `/about`, `/projects`, `/projects/[slug]`, `/contact`. |
| `src/app/contact/actions.ts` | Contact form Server Action (validation, honeypot, rate limit, Resend email). |
| `src/app/sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx` | SEO and social share images. |
| `next.config.ts` | 308 redirects from the old `.html`/`.php` URLs, security headers. |
| `public/img/` | Images, kept at their original paths so old image links keep working. |

## Environment variables

See [`.env.example`](.env.example). Set them in Vercel under Project → Settings → Environment Variables.
