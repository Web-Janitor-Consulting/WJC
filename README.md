# Web Janitor Consulting

Custom Eleventy site, deployed on Cloudflare Workers (Static Assets).

## Local dev

```sh
nvm use
npm install
npm run dev        # Wrangler serves http://localhost:8787 with live reload
                   # Eleventy + PostCSS rebuild _site/ on file changes
```

The `send_email` binding is unavailable in local dev — contact form submissions
are logged to the console and redirected to `/contact/?sent=1` without sending.

## Production build

```sh
npm run build      # Outputs to _site/
```

## Deploy

```sh
nvm use
npm install
npm run build
npm run deploy     # wrangler deploy
```

### First-time setup

Before the contact form can send email you need to:

1. Enable **Email Routing** on your domain in the Cloudflare dashboard.
2. Add a **destination address** (your inbox) and click the verification link
   Cloudflare sends.
3. Update `wrangler.jsonc`:
   - `send_email[0].destination_address` — the verified destination address.
   - `vars.CONTACT_FROM` — a `something@<your-CF-domain>` address.
   - `vars.CONTACT_TO` — the same verified destination address.

### Cloudflare Workers Builds (recommended CI)

Connect the repo in the Cloudflare dashboard under **Workers & Pages → Create →
Connect to Git**. Set:

| Setting                | Value           |
| ---------------------- | --------------- |
| Build command          | `npm run build` |
| Build output directory | `_site`         |
| Node version           | `26`            |

No GitHub Actions minutes consumed — builds run on Cloudflare's infra.
