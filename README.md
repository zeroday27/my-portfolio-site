# my-portfolio-site

Personal portfolio and career timeline for Ko Ko Naing (Nico): an interactive
walk from helpdesk and VMware in 2016, through building an SAP cloud service
from scratch, to running a multi-cloud estate and AI-augmented operations.

Static site, no build step. Editorial scroll-journey layout (warm paper
background, pinned chapter reader, Apple/brikken-style rhythm) using the Yangon
AI accent system: amber `#F6821F`, ink `#0B1220`, Inter Tight + JetBrains Mono.
Responsive: pinned side panel on desktop, sticky year bar on phones.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Charts load Chart.js from cdnjs, so the analytics section needs network access.
Everything else works offline.

## Edit content

All copy lives in **`assets/js/data.js`**. Nothing else needs touching for
content changes:

- `journey` — the scroll chapters (degree → first IT job → ... → next chapter)
- `about`, `faq`, `work`, `skills`, `certs`, `stats` — the other sections
- `projection` — the dashed "2027 →" stop in the analytics. It is labelled as a
  projection in the UI; keep it honest.
- `certs` — `{ name, url }`. All point at the Credly profile for now; swap in the
  individual badge URLs when convenient.
- `eras` — the analytics view. Hobby eras (`hobby: true`) are shown in the
  journey but excluded from the analytics. Each era carries two small objects:

- `skills` (0 to 10 per domain) feeds the radar chart
- `mix` (percent of working time per domain) feeds the bars and the stacked
  timeline chart

Keep `mix` values summing to roughly 100 per era.

## Portrait

Drop a photo at `assets/img/portrait.jpg` (4:5 works best). Until it exists the
hero shows a monogram card automatically.

## Flat preview

Open `index.html#flat` to disable the pinned panel and viewport-height sections.
Useful for printing or full-page screenshots. Add `?stop=N` (0-based) to open the
analytics on a specific era without autoplay, e.g. `index.html#flat?stop=4` for
the projection.

## Rules for this repository

- **No client-confidential material.** No client names, hostnames, account IDs,
  screenshots of internal systems, or credentials. Describe work by what it did.
- No em dashes in copy. Use commas, colons, periods or parentheses.
- Fonts load from Google Fonts. To self-host like the Yangon AI site, copy the
  `@font-face` block from that repo's `plan/brand/design-system/fonts.css` and
  drop the TTFs into `assets/fonts/`.

## Deploy

GitHub Pages: push to `main`, then Settings → Pages → Deploy from branch
(`main`, root). `.nojekyll` is present so asset paths pass through untouched.
Cloudflare Pages works the same way with no build command.

## Layout

```
index.html            page structure
assets/css/style.css  theme (Yangon AI tokens) + components + motion
assets/js/data.js     ALL content (edit here)
assets/js/main.js     journey reader, scroll reveal, count-ups, FAQ, Chart.js analytics
assets/img/           portrait.jpg goes here (optional)
```
