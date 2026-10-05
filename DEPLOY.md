# Deploying FERGA Landing to Cloudflare

This site is a **static Vite build**. On Cloudflare it runs as a **Worker with static
assets** — no Worker script, no server code. `wrangler.jsonc` in the repo root tells
Cloudflare where the build output lives.

---

## Settings for the "Set up your application" screen

You are already on the **Workers** path (not Pages). Use exactly these values:

| Field | Value |
| --- | --- |
| Project name | `ferga-landing` — ⚠️ the box pre-filled `ferga-landling` (a typo from the repo name). Change it to `ferga-landing` so it matches `name` in `wrangler.jsonc`; the name in the config wins anyway, and a mismatch just creates confusion. |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Enable Preview builds | **On** (optional) — gives every branch its own preview URL |
| Protect with Cloudflare Access | **OFF** — this is a public landing page; turning it on would put a login in front of every visitor |
| Root directory | leave empty (repo root) |
| Environment variable | `NODE_VERSION` = `22` — Vite 8 needs Node `^20.19 \|\| >=22.12`; `.nvmrc` is committed as a second safeguard |

The repo already contains everything the build needs: `wrangler.jsonc`, a committed
`package-lock.json` (so Cloudflare can `npm ci`), and `wrangler` as a devDependency.

---

## What the config does

```jsonc
{
  "name": "ferga-landing",
  "compatibility_date": "2026-09-01",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

- `directory: ./dist` — uploads whatever `npm run build` produced.
- Real files **always win** over the fallback, so `/get.html` (the QR target) is served
  as-is instead of being swallowed by the SPA fallback — the same bug that bit Vite dev
  until `appType: 'mpa'` was set.
- Default `html_handling` additionally makes `/get` resolve to `/get.html`, so in
  production both URLs reach the quick page.

Verified locally against the real Workers runtime with `wrangler dev`:

| Request | Result |
| --- | --- |
| `/` | 200 — landing page |
| `/get.html` | 307 → `/get` → 200 — quick download page |
| `/get` | 200 — quick download page |
| `/ferga-assets/...` | 200 — static files |
| any unknown path | 200 — landing page (SPA fallback) |

---

## Verify before you push

```bash
npm run build          # → dist/
npx wrangler deploy --dry-run   # validates config, lists uploaded files, no auth
npm run cf:dev         # serves dist/ through the real Workers runtime on :8787
npm run deploy         # real deploy (needs `npx wrangler login` first)
```

`npx wrangler deploy` from your machine needs a one-time `npx wrangler login`.
Cloudflare's own build runner authenticates automatically — you do not need to do this
for the Git-connected deploy.

---

## After the first deploy

1. **Custom domain** — Workers → your Worker → *Settings → Domains & Routes → Add
   custom domain* (e.g. `ferga.ferkar.co`). The `workers.dev` URL works immediately
   without this.
2. **The QR code needs no changes.** It encodes `window.location.origin` at render
   time, so it automatically points at whatever domain the page is served from —
   including the workers.dev URL and any custom domain added later.
3. **Sanity-check on the live URL:** scan the QR with a phone, and confirm
   `https://<domain>/get.html` renders the quick page in the right language.

## ⚠️ Google Play is still gated

`PLAY_PUBLISHED` is `false` in **two** places and they must be changed together:

- `src/data/links.ts` — controls every button/link on the landing page
- `public/get.html` — controls the quick page

Until then Google Play shows as "Coming soon" (the live listing returns **404**; the
Android build is still on Play internal testing). Flip both to `true` the day the
Android track goes to production, commit, and Cloudflare redeploys automatically.
