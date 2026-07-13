# Cardinal Foundation Services — website

Marketing site for [cardinalfoundationservices.com](https://cardinalfoundationservices.com).

Built with **Next.js 16** (App Router, TypeScript, Tailwind CSS v4), a
**Resend**-powered contact form, and deployed to **Fly.io** as a Docker
container. Pushes to `main` deploy automatically via GitHub Actions.

## Local development

```bash
npm install
cp .env.example .env.local   # then paste your Resend API key
npm run dev                  # http://localhost:3000
```

## How the contact form works

The form (`src/app/contact-form.tsx`) posts JSON to the route handler at
`src/app/api/contact/route.ts`, which validates the input and sends an email
via Resend. Configuration comes from three environment variables:

| Variable             | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| `RESEND_API_KEY`     | Your Resend API key (secret).                        |
| `CONTACT_TO_EMAIL`   | Inbox that receives inquiries.                       |
| `CONTACT_FROM_EMAIL` | From address — must be on a Resend-verified domain.  |

## Deployment

Deploys happen automatically when you push to `main` (see
`.github/workflows/fly-deploy.yml`). To deploy by hand:

```bash
fly deploy
```

Set production secrets on Fly (never commit them):

```bash
fly secrets set RESEND_API_KEY=re_xxx \
  CONTACT_TO_EMAIL=leads@cardinalfoundationservices.com \
  CONTACT_FROM_EMAIL=website@cardinalfoundationservices.com
```

## Brand colors

All colors live as CSS variables at the top of `src/app/globals.css`. Swap
those hex values to match the exact Cardinal brand palette; the whole site
updates from there.
