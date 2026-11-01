# Burhani Seal Centre — website

Product catalogue for Burhani Seal Centre, Burra Bazar, Kolkata. Visitors browse
241 products in 14 categories and enquire about a product on WhatsApp or by email.
Nothing is stored on a server: every enquiry opens WhatsApp or the visitor's email
app with the message already written.

Built with Angular 22 (standalone components, signals). It deploys to Vercel as a
static site: every page (home, each category, each product) is pre-rendered to
its own HTML file at build time, with its own title, description, canonical
link, social preview and structured data. Search engines and WhatsApp link
previews read those files directly; visitors then get the full app.

## Run it locally

```bash
npm install
npm start            # http://localhost:4200
npm run build        # production build + pre-rendering → dist/burhani-seal-centre/browser
```

The build pre-renders about 250 pages, so it takes a few minutes.

Node 20.19+ or 22.12+ is required.

## Where to change things

| What | File |
| --- | --- |
| Phone, WhatsApp, email, address, map pin, opening hours, GSTIN, owner, social links, "500+ customers" | `src/environments/environment.ts` |
| Year founded (1988). "Years in the trade" is calculated from it and goes up each year | `src/environments/environment.ts` → `founded` |
| Logo: the B mark used across the site (it takes the colour of the text around it) | `src/app/shared/components/logo-mark/logo-mark.ts` |
| Logo files: full stacked logo and mark as SVG | `src/assets/brand/` |
| Live address of the site (domain) | `src/environments/environment.ts` → `seo.siteUrl` |
| Products and categories | `src/app/data/products.data.ts` |
| "Industries we serve" page | `src/app/data/industries.data.ts` |
| Colours (all built from the logo blue `#0155B1`), fonts, spacing | `src/styles/_variables.scss` |

Social links that are left as `''` are hidden automatically.

### Connecting the domain

1. In Vercel, add the domain under **Project → Settings → Domains**.
2. In `src/environments/environment.ts`, set `seo.siteUrl` to the new address,
   e.g. `'https://www.burhanisealcentre.com'` (no trailing slash). It is currently
   `https://burhanisealcentre.vercel.app`.
3. Commit and push. The build (`npm run build`) runs
   `scripts/generate-seo-files.mjs` first. That script rewrites the domain in
   `src/index.html` and regenerates `public/sitemap.xml` and `public/robots.txt`,
   so you don't edit those files by hand.
4. Submit `https://<your-domain>/sitemap.xml` in Google Search Console.

`siteUrl` is also used for the product link inside every WhatsApp and email
enquiry, so keep it pointing at the address the site is actually live on.

### Adding a product

1. Add an entry to `PRODUCTS` in `src/app/data/products.data.ts`. The easiest way
   is to copy an existing product in the same category. Make the `slug` unique;
   it becomes the URL `/products/<slug>`. Give it a `metaTitle` and
   `metaDescription` (under 160 characters); they become the page's title and
   search snippet. The new page is pre-rendered and added to the sitemap
   automatically on the next build.
2. Optional photo: save it as `src/assets/images/products/<slug>.webp`, square,
   about 800 × 800 px, under 120 KB, with the product on a plain white
   background (every photo on the site is on white). Then set
   `imageUrl: 'assets/images/products/<slug>.webp'`. Products without a photo
   show the category illustration and a "Photo on request" note.
   Extra photos go in `gallery`, e.g.
   `gallery: ['assets/images/products/<slug>-2.webp']`. They show as
   thumbnails under the main photo on the product page.
3. Set `featured: true` to show it under "Popular products" on the home page.

Each category has its own page at `/categories/<id>`, e.g. `/categories/oil-seals`.
The catalogue shows 12 products per page. Search, sort order and page are kept in
the URL, so filtered views can be shared and the back button works. Old links of
the form `/products?category=<id>` redirect to the category page.

### Adding a category

Add it to `CATEGORIES` in `products.data.ts`. `art` picks the illustration (one of
`oil-seal`, `hydraulic`, `pneumatic`, `wiper`, `kit`, `pump`, `o-ring`, `coupling`,
`bellows`, `diaphragm`, `gasket`, `sheet`, `profile`, `mount`, `custom`, `bearing`).
The navbar menu, footer, category pages, filters, pre-rendering and sitemap all
read from this list.

## Deploying

The project is set up for Vercel (`vercel.json` is included):

- Build command: `npm run build`
- Output directory: `dist/burhani-seal-centre/browser`
- Pre-rendered pages are served as files (`/products/tc-oil-seal` →
  `products/tc-oil-seal/index.html`). Any other address falls back to
  `index.csr.html`, which shows the "page not found" screen.
- The list of pre-rendered pages is in `src/app/app.routes.server.ts`; it reads
  products and categories from `products.data.ts`.

Push to the connected Git repository and Vercel builds automatically.

## Project layout

```
src/
  environments/environment.ts   business details + siteUrl (single source)
  app/
    data/                       products, categories, industries
    services/                   product search/pagination, enquiry links, SEO tags
    shared/                     navbar, footer, product card, pagination, directives
    features/                   one folder per page
  styles/                       global design tokens, typography, motion
  main.server.ts                build-time entry used for pre-rendering
  app/app.routes.server.ts      which pages are pre-rendered
scripts/generate-seo-files.mjs  sitemap, robots.txt, domain sync (runs on build)
public/                         favicon, manifest, sitemap.xml, robots.txt
```

## Notes

- Animations respect the visitor's "reduce motion" setting.
- Fonts (Inter, Playfair Display, Montserrat) are self-hosted from npm. The site
  makes no requests to Google Fonts.
- The contact page embeds Google Maps. Everything else works offline once loaded.
