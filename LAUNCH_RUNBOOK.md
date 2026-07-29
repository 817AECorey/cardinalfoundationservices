# Cardinal Foundation Services — Production Launch Runbook

Stack: Next.js 16 (standalone output) in Docker on **Fly.io** (`fly.toml` in repo,
auto-deploy on push to `main` via `.github/workflows/fly-deploy.yml`).
Follow in order. Nothing below deploys automatically except step 6.

## 1. Prerequisites (before touching DNS)

- [ ] Manifest CSV reconciliation: when `cardinal_url_disposition_manifest.csv`
      arrives, diff it against `src/lib/redirects.ts` (87 implemented rows) and
      populate `GONE_410` with any 410 rows. Rebuild, re-run the crawl.
- [ ] Client supplies: GBP URL (4.9 rating link), Facebook / Instagram /
      LinkedIn / YouTube URLs (`sameAs` in `src/lib/schema.tsx` + footer socials).
- [ ] Lower DNS TTL on the current (WordPress) host to 300s **24h before cutover**.
- [ ] Keep the old WordPress host paid and untouched for 30 days (rollback).
- [ ] Pick a low-traffic morning cutover window. Not a Friday.

## 2. Environment variables (Fly secrets)

Set with `fly secrets set KEY=value` (each set triggers a restart; batch them):

| Variable | Value needed from you | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Resend API key (exists in prod already; verify) | transactional email |
| `CONTACT_FROM_EMAIL` | `website@cardinalfoundationservices.com` (Resend-verified domain) | sender |
| `CONTACT_TO_DEFAULT` | `info@cardinalfoundationservices.com` | default inbox |
| `CONTACT_TO_COMMERCIAL` | optional per-team inbox | routing |
| `CONTACT_TO_RESIDENTIAL` | optional per-team inbox | routing |
| `CONTACT_TO_NEWCONSTRUCTION` | optional per-team inbox | routing |
| `ALERT_EMAIL` | who gets send-failure alerts (default: CONTACT_TO_DEFAULT) | alerting |
| `LEADS_FILE` | `/data/leads.jsonl` (default; requires the volume in step 3) | durable storage |
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX` from GA4 property | analytics (build-time: set BEFORE deploy build) |
| `NEXT_PUBLIC_GADS_CONVERSION_ID` | `AW-XXXXXXXXX` from Google Ads | Ads conversion |
| `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | conversion label string | Ads conversion |

NOTE: `NEXT_PUBLIC_*` vars are inlined at BUILD time. On Fly, pass them as
`[build.args]`/`--build-arg` (and `ENV` in Dockerfile) or set them in the GitHub
Action build step — a runtime secret alone will NOT reach the client bundle.

## 3. Durable lead storage volume

```bash
fly volumes create leads_data --size 1 --region <primary-region>
```
Add to `fly.toml`:
```toml
[mounts]
  source = "leads_data"
  destination = "/data"
```
Every submission appends to `/data/leads.jsonl` BEFORE email send; send
failures append a second record and trigger an alert email.

## 4. Email deliverability (BEFORE launch or day-one leads land in spam)

- [ ] Resend domain `cardinalfoundationservices.com` verified
- [ ] SPF, DKIM, DMARC records from the Resend dashboard added to DNS
- [ ] Send a test through Resend to info@ and confirm inbox (not spam)

## 5. Google side (owner: Corey, in the Ads/GA4 accounts)

- [ ] GA4: create/confirm property, get `G-` ID; link GA4 <-> Google Ads
- [ ] Ads: create conversion actions (form submission, phone-click,
      calls-from-ads); mark primary; get `AW-` ID + label for env vars
- [ ] Reinstall the Google call-swap snippet if native call tracking is used
- [ ] Update Ads sitelinks/callouts/structured snippets to new URLs
- [ ] Swap Houston campaign final URLs ONLY after the live page passes a phone test

## 6. Deploy

```bash
cd ~/Sites/cardinalfoundationservices
git add -A && git commit -m "Production build: full site, redirects, form pipeline"
git push origin main        # GitHub Action builds + deploys to Fly
# or by hand: fly deploy
```
Smoke-test on https://cardinalfoundationservices.fly.dev before DNS:
form submit (expect email + /data/leads.jsonl row + /thank-you/), hub URL 200,
one redirect spot-check.

## 7. Domain attach + SSL (apex canonical, www 301s)

```bash
fly certs add cardinalfoundationservices.com
fly certs add www.cardinalfoundationservices.com
fly ips list   # note the dedicated IPv4 + IPv6
```
DNS (at the registrar):
- `A @ -> <Fly IPv4>` and `AAAA @ -> <Fly IPv6>` (apex)
- `CNAME www -> cardinalfoundationservices.fly.dev` (or A/AAAA same IPs)
- `fly certs check` both hosts until issued (LetsEncrypt, usually minutes)

Canonical host is the **non-www apex**; `src/proxy.ts` 301s www -> apex,
single hop, path preserved. Verify: `curl -sI https://www.cardinalfoundationservices.com/residential/ | grep -i location`.

## 8. Launch-day checks (spec section 9 subset that can run immediately)

- [ ] `curl -sI https://cardinalfoundationservices.com/services/commercial-foundation-repair/` -> 200, no redirect
- [ ] 5 manifest redirect spot-checks -> single-hop 301
- [ ] Phone form test from a mobile device -> email arrives at info@, /thank-you/ loads, GA4 realtime shows generate_lead
- [ ] sitemap.xml + robots.txt + llms.txt reachable on the apex
- [ ] Submit sitemap in Search Console + Bing Webmaster Tools; trigger IndexNow
- [ ] GBP website + service links, social bio links, BBB profile link -> update to new URLs (all survive via 301 regardless)

## 9. Rollback

Point DNS back at the old WordPress host (TTL is 300s from step 1).
Fly app keeps running; nothing to un-deploy.
