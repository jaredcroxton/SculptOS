# PerformOS Marketing Website

Practical AI adoption for small businesses in Australia.

## Structure

- `index.html` — Homepage (target: AI adoption for small business)
- `ai-fluency.html` — AI fluency training and workshops
- `ai-implementation.html` — AI implementation services
- `ai-agents.html` — AI agents for small business
- `software.html` — PerformOS software product family
- `about.html` — About Jared Croxton, credentials
- `contact.html` — Contact form and AI adoption call booking
- `styles.css` — Shared design system
- `script.js` — Navigation, FAQ, mobile menu
- `sitemap.xml` — XML sitemap for search engines
- `robots.txt` — Crawler directives (AI search crawlers allowed)

## Local preview

Any static file server works. From this folder:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deployment

Static site. Deploys to Vercel, Netlify, Cloudflare Pages, or any static host.

Critical: deploy to root domain `performos.com.au`, not a subdomain. The existing profile-selector app should move to `app.performos.com.au` so the marketing site can capture search traffic.

## SEO checklist (after deploy)

- Submit `sitemap.xml` to Google Search Console
- Verify domain in Search Console
- Connect GA4
- Test schema with https://validator.schema.org
- Validate page speed via PageSpeed Insights
- Update Formspree endpoint in `contact.html` (currently placeholder)
- Replace mailto: `jared@performos.com.au` if a different inbox is preferred
