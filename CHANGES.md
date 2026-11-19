# PigeonsPower — Website Update v2 (Complete)

Bug fixes, SEO, a new **Our Team** page with photos, and a new
**Who We Work With** section for https://www.pigeonspower.com.au/

This is the complete update in a single file — it replaces the earlier
Update v1 and Team Photos packages. Nothing else needs to be applied.

## How to apply

Unzip this file over your clone of the repo (files land in their normal
places), then:

```
git add app public CHANGES.md
git commit -m "Fix footer links and service data, add SEO (metadata, sitemap, robots, JSON-LD), privacy/terms pages, Our Team page with photos, and Who We Work With section"
git push origin main
```

Then deploy as usual (Vercel). No database or schema changes are included —
`npm run build` works exactly as before.

## What changed

### Who We Work With section (new in v2)

- `app/components/WhoWeWorkWith.js` (new) — a new homepage section placed
  between About and Services, in the site's design system: white band,
  uppercase eyebrow, extra-bold heading and grouped network cards.
  - Eyebrow: "WHO WE WORK WITH"
  - Heading: "Aligned with Australia's leading networks."
  - Intro: "We deliver electrical design, drafting and consultancy services
    in accordance with the standards, specifications and requirements of
    Australia's electricity distribution networks and national
    telecommunications infrastructure."
  - The wording is deliberately framed as standards alignment — the
    professional, accurate framing for a design consultancy.
- `app/data/networks.js` (new) — **all network names live in this one
  file**, grouped by state/territory in this order:
  Victoria (CitiPower, Powercor, AusNet Services, United Energy, Jemena),
  New South Wales (Ausgrid, Endeavour Energy, Essential Energy),
  Queensland (Energex, Ergon Energy), South Australia (SA Power Networks),
  Western Australia (Western Power, Horizon Power), Tasmania (TasNetworks),
  Australian Capital Territory (Evoenergy), Northern Territory
  (Power and Water Corporation), and Telecommunications
  (NBN Co, Telstra, Optus, TPG Telecom).
  Names render as styled text in the site's typography — no third-party
  logo images are used. To add or remove a network later, just edit
  this file.
- `app/page.js` — renders the new section on the homepage.

### Bug fixes (from v1)

- `app/components/Footer/Footer.jsx`
  - Services column no longer links to the dead `/services#...` routes.
    Each link now lands on that service's card on the homepage
    (`/#electrical-engineering`, `/#telecommunication-design`,
    `/#project-management`, `/#cost-estimation`, `/#quantity-takeoff`).
  - Company column anchors now work from every page (`/#about`, etc.)
    and an **Our Team** link was added.
  - The placeholder "E / Engineering SOLUTIONS" footer logo was replaced
    with the real PigeonsPower pigeon logo and wordmark, matching the header.
  - Footer Contact Us button now points to `/#contactus`.
- `app/components/Services/ServiceCard.jsx`
  - Each service card now carries its anchor id (e.g. `id="cost-estimation"`)
    so the footer service links land on the right card, with scroll offset
    for the sticky header.
- `app/data/Services.js`
  - Services renumbered sequentially 01–09 (Engineering Consultancy is now
    07, Quantity Takeoff 08, Cost Estimation 09).
  - Cost Estimation no longer shows the Telecommunication description.
  - Every service gained a `slug` used for the card anchor ids.
- `app/components/ContactUS/ContactForm.jsx` and `app/data/siteConfig.js`
  - "LUC Assessment Services" corrected to "Lux Assessment Services".
- `app/components/header.js`
  - Mobile menu Contact button no longer links to the dead `/contact` page.
  - Nav anchors changed to `/#about` etc. so they work from any page,
    an **Our Team** link was added (after Projects), the logo image got
    its missing `alt` text, and the logo wordmark is no longer an `<h1>`.
- `app/components/Hero.js`
  - Hero image alt text improved to "Electrical transmission tower at sunset".
- `app/data/siteConfig.js`
  - The placeholder template data ("Your Company Name", "+61 XXX XXX XXX",
    `info@pigeonspower.com.au`) replaced with the real company details and
    working links. The file is still not imported anywhere — it is simply
    correct now if it gets wired up later.
- `app/layout.js` / `app/page.js`
  - Removed unused imports and the nested `<main>` wrapper in `page.js`.

### SEO (from v1)

- `app/layout.js`
  - Real page title and a clean meta description (the old one had the
    "consutancy" typo and a stuffed phone/email).
  - `metadataBase`, canonical URL, keywords, authors, robots directives,
    Open Graph and Twitter card tags (share image: the electrical tower photo).
  - LocalBusiness (ProfessionalService) JSON-LD structured data with the
    Roxburgh Park address, phone, email and service list.
  - Page language set to `en-AU`.
- `app/sitemap.js` (new) — generates `/sitemap.xml` with the home page,
  Our Team, Privacy Policy and Terms.
- `app/robots.js` (new) — generates `/robots.txt`, allowing all crawlers
  and pointing to the sitemap.
- `app/privacy-policy/page.js` and `app/terms/page.js` (new) — the footer
  Privacy Policy and Terms links used to 404; they are now real pages
  with plain, professional copy (shared layout in
  `app/components/LegalPage.jsx`).

### Our Team page + photos (from v1, photos completed)

- `app/our-team/page.js` — `/our-team` page in the site's design:
  navy hero band, a member card grid, and the navy "Have a Project?" CTA band.
- `app/data/team.js` — **all team members live in this one file.**
  It contains the four real members (Director first):
  Syed Sheece Bukhari, Ammar Abdullah, Shoaib Rasool and Arqam.
  To add or remove a member later, just edit this file.
- `public/team/` — the four member photos (square 800×800 crops) are
  included and wired in via `team.js`:
  `syed-sheece-bukhari.jpg`, `ammar-abdullah.jpg`, `shoaib-rasool.jpg`,
  `arqam.jpg`. See `public/team/README.txt` for how to swap a photo later.
- Header and footer navigation include **Our Team**.

## Verification done before packaging

- ESLint: clean on every file changed or added by this update.
  (Note: a whole-repo lint still shows 11 pre-existing
  `react/no-unescaped-entities` errors in original files this update does
  not touch — About.js, ContactHero.jsx, ContactInformation.jsx,
  ContactPage.jsx, ProjectsCTA.jsx. They were in the repo before this
  update and are unrelated to it.)
- Production build: PASS — routes `/`, `/our-team`, `/privacy-policy`,
  `/terms`, `/robots.txt` and `/sitemap.xml` all generate correctly.
- Homepage HTML checked: the Who We Work With section renders with all
  20 network names, the correct title/description and JSON-LD are present,
  and all five footer service anchors exist on the page.
