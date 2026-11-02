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

### The domain: www.burhanisealcentre.in

The site is set up for `https://www.burhanisealcentre.in` (`seo.siteUrl` in
`src/environments/environment.ts`). Every canonical link, social preview, the
sitemap, robots.txt and the product link inside each WhatsApp/email enquiry use
it. The build (`npm run build`) runs `scripts/generate-seo-files.mjs` first,
which writes the domain into `src/index.html` and regenerates
`public/sitemap.xml` and `public/robots.txt`, so you never edit those by hand.

`vercel.json` sends anyone who opens the old `burhanisealcentre.vercel.app` or
`burhani-seal-centre.vercel.app` address to the same page on the new domain
(permanent 308 redirect), so old links and Google's old entries carry over.

Setting it up in Vercel (once):

1. **Project → Settings → Domains → Add** `www.burhanisealcentre.in`, then add
   `burhanisealcentre.in` and choose "Redirect to www.burhanisealcentre.in".
2. At the registrar where you bought the domain, add exactly the DNS records
   Vercel shows for each name (an `A` record for the bare domain and a `CNAME`
   for `www`). Wait until Vercel shows both as "Valid".
3. Only then push this version. The `.vercel.app` addresses redirect to the new
   domain, so the domain must already work.

### Getting found on Google

1. **Google Search Console** (search.google.com/search-console): add a
   *Domain* property for `burhanisealcentre.in` and verify it with the DNS TXT
   record it gives you. (Or add a *URL prefix* property, copy the code from the
   meta tag it offers into `seo.googleVerification` in `environment.ts`, and
   rebuild.) Then **Sitemaps → Add** `https://www.burhanisealcentre.in/sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): "Import from Google Search
   Console" is the quickest; or paste its code into `seo.bingVerification`.
3. **Google Business Profile** (business.google.com): claim or create the
   listing for the shop at 37 Strand Road, set the website to
   `https://www.burhanisealcentre.in`, pick the closest categories Google
   offers (type "seal" and "rubber" in the category box), and use the same phone
   and hours as the site. Once it's
   verified, open it in Google Maps → **Share** → copy the link into
   `social.googleBusiness` in `environment.ts` and rebuild. This listing is what
   puts the shop in Google Maps and "near me" searches, so ask regular customers
   to leave a review there.
4. Keep the name, address and phone exactly the same on IndiaMART, JustDial and
   any other listing as on the site (`company` in `environment.ts`).

What each page already gives Google: a unique title (under 65 characters) and
description (under 160, ending with the WhatsApp number), a canonical link, a
social preview image, and structured data — business details, address, map pin
and opening hours on the home, about and contact pages; a product entry on
each product page; a product list, breadcrumbs and FAQs on each category page.
Product photos are listed in the sitemap so they can appear in Google Images.

### Adding a product

1. Add an entry to `PRODUCTS` in `src/app/data/products.data.ts`. The easiest way
   is to copy an existing product in the same category. Make the `slug` unique;
   it becomes the URL `/products/<slug>`. Give it a `metaTitle` (under 65
   characters, with the words people search for, e.g. "TC Oil Seal — Double
   Lip, NBR & Viton") and a `metaDescription` of plain facts, under 105
   characters. The site adds "In stock in Kolkata — WhatsApp … for price." to the
   end, so the search snippet stays under Google's 160. The new page is
   pre-rendered and added to the sitemap automatically on the next build.
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

Each category can also have `metaTitle`, `metaDescription` (same limits as
products), `intro` (paragraphs shown under "About …" below the products) and
`faqs` (`{ q, a }` pairs shown as "Common questions"). The FAQs are also given
to Google as structured data, so write real questions customers ask.

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
