# OvaSell Corporate Website — Architecture

Version: 1.0
Owner: OvaSell Brand & Web Team
Last updated: {auto}

---

1) Brand Messaging

Core narrative
- Tagline: Discover. Sell. Earn.
- One‑liner: OvaSell is a seller‑first commerce ecosystem that turns audiences into revenue.
- Positioning: The simplest way for creators, community leaders, and everyday sellers to monetize trust by promoting quality products from a distributed merchant network.
- Value pillars:
  1. Seller First: transparent commissions, instant onboarding, fast payouts.
  2. Merchant Network: inventory ready to sell, predictable commission rules.
  3. Smart Delivery: integrated logistics with status tracking.
  4. Clear Analytics: performance, earnings, and product insights.
  5. Trusted & Local: African‑focused, compliant, mobile‑native.

Audience messages
- Sellers: Start free, promote products you believe in, get paid on schedule.
- Merchants: Unlock distributed sales through motivated micro‑sellers.
- Partners: Integrate logistics, payments, and data pipes securely.
- Developers: Modern API, webhooks, sandbox, and docs.
- Investors: Capital‑efficient growth engine spanning the OvaSuite.

Proof points
- Commission timeline SLA, payout reliability, onboarding in minutes, verified catalog standards, live status page.

Tone: Ambitious, empowering, modern, revenue‑driven; clear, no jargon.


2) Information Architecture (IA)

Top‑level sections
- Home
- Sellers
- Merchants
- Features
- Pricing
- How It Works
- Resources (Blog, Guides, Tutorials, API Docs, Help Center)
- Company (About, Careers, Press Kit, Contact)
- Legal (Privacy Policy, Terms, Cookie Policy, Merchant Agreement)
- System Status

Content hierarchy principles
- Explain → Prove → Convert on every page.
- Keep primary actions visible: Become a Seller, Talk to Sales, View Docs.
- Use progressive disclosure: summaries first, details expandable.


3) Navigation Structure

Global header
- Left: OvaSell logo
- Center: Primary nav (Home, Sellers, Merchants, Features, Pricing, How It Works, Resources, Company)
- Right: CTAs (Become a Seller, Sign In)
- Mobile: Hamburger reveals full nav with sticky CTA

Footer
- Columns: Product, For Sellers, For Merchants, Resources, Company, Legal
- Social icons (LinkedIn, X, YouTube), regional selector, copyright

Utility nav
- Status badge (real‑time from status API), language switcher, search


4) Page Structure & Layout Templates

Templates
- Marketing Cover: Full‑bleed hero with Spline 3D cover, headline, sub‑headline, primary & secondary CTAs, trust badges.
- Feature Hub: Left/right image blocks, icon grids, callouts, testimonial band, FAQ accordion, closing CTA.
- Resource Hub: Filters, search, card grid, pagination, featured post.
- Docs Placeholder: Sidebar nav (sections), content body, code blocks, version badge.
- Legal: Narrow readability column, TOC on the left, updated date.
- Status: Components grid, uptime charts, incident timeline, subscribe.

Hero background rule
- Use Spline full‑width cover: https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode
- Keep overlays subtle (glass card, blurred gradient). Avoid pointer blockers on the canvas.


5) Reusable Components

- Header (desktop/mobile), Footer, Announcement Bar
- Button (primary, secondary, ghost), LinkButton, IconButton
- Card (glass, solid), StatCard, TestimonialCard, FeatureCard, PricingCard
- Badge (status, new, featured), Pill filters
- Tabs, Accordions (FAQs), Modals, Drawer (mobile nav)
- Input set: Text, Email, Select, Toggle, Radio, Checkbox, Textarea
- Stepper, Timeline, Progress, Tooltip
- Table (sortable), Empty State, Skeletons, Toasts
- CodeBlock (for docs), CopyToClipboard
- LogoWall, PartnerCarousel, CaseStudyHighlight


6) Responsive Behavior

- Mobile‑first layouts, breakpoints: sm 640, md 768, lg 1024, xl 1280, 2xl 1536
- Hero: headline scales 36→64px; buttons stack; Spline stays full‑bleed at 16:9 crop
- Grids collapse 3→2→1; icon grids use minmax auto‑fit
- Navigation: sticky top; mobile drawer with prioritized CTAs
- Images: responsive srcset, lazyload below the fold
- Tables: convert to cards on small screens


7) Copywriting Tone Guidelines

- Voice: Confident, practical, uplifting; short sentences; verbs first.
- Style: Use numbers; quantify impact; avoid buzzwords.
- Patterns to use: “Start in minutes”, “No hidden fees”, “Earn predictably”.
- Avoid: vague claims, passive voice, long blocks. Use scannable bullets.


8) Color & UI Guidelines

Brand palette
- OvaSell Green (primary): #0EA75A
- OvaSell Yellow (accent): #F7B500
- Deep Green (ink): #084C2E
- Night (bg): #0B0F12
- Slate (muted text): #8CA3A8
- Cloud (card): rgba(255,255,255,0.08) glass
- White: #FFFFFF

Gradients
- Primary gradient: 135deg, OvaSell Green (#0EA75A) → OvaSell Yellow (#F7B500)
- Deep gradient overlay (hero glass): rgba(11,15,18,0.4) → rgba(11,15,18,0.1)

States
- Success: #16C784, Warning: #F59E0B, Danger: #EF4444, Info: #3B82F6

UI tokens
- Radius: xs 6, sm 10, md 14, lg 20, xl 28, pill 999
- Shadows: s 0 2 10 rgba(0,0,0,.15); m 0 8 24 rgba(0,0,0,.18); l 0 20 60 rgba(0,0,0,.22)
- Borders: 1px solid rgba(255,255,255,.12); glass edge highlight rgba(255,255,255,.18)


9) SEO Metadata Blueprint

Conventions
- Titles: “{Page Name} | OvaSell — Discover. Sell. Earn.”
- Meta descriptions: 150–160 chars with value prop + CTA.
- Canonicals per route; OpenGraph + Twitter cards; JSON‑LD where applicable.
- Sitemap.xml auto; robots.txt allow all except staging.

Schema.org
- Organization for Company
- Product for OvaSell platform
- HowTo for Guides/Tutorials
- BlogPosting for Blog posts
- BreadcrumbList sitewide
- FAQPage for FAQs
- SoftwareApplication for Seller App & Merchant Console pages


10) CMS‑Friendly Content Model

Collections
- Pages: slug, title, hero {kicker, headline, subhead, ctas[]}, sections[], seo {title, description, ogImage, noindex}
- Posts: title, slug, excerpt, coverImage, author, tags[], body, publishedAt, seo
- Guides: title, slug, difficulty, readingTime, steps[], resources[], seo
- Tutorials: title, slug, videoUrl, steps[], codeSamples[], seo
- CaseStudies: company, title, slug, industry, region, metrics {lift, revenue, sellers}, logo, body, seo
- FAQs: question, answer, category, audience
- Features: name, slug, summary, icon, screenshots[], benefits[], seo
- Pricing: tiers[] {name, price, description, features[], cta}
- LegalDocs: type, version, body, updatedAt
- StatusIncidents: title, startedAt, resolvedAt, summary, impact, components[]

Media rules
- WebP/AVIF primary; JPG fallback; SVG for icons/illustrations.


11) File & Folder Structure (frontend‑first, CMS‑agnostic)

- app/
  - pages/ (route files)
  - components/
  - layouts/
  - styles/
  - lib/
  - data/ (static fallbacks)
  - hooks/
  - assets/
- public/
  - images/
  - og/
  - icons/
- scripts/
- tests/
- docs/
- architecture.md (this document)


12) Routing Structure (marketing‑site scale)

- /
- /sellers
- /merchants
- /features
  - /features/seller-app
  - /features/merchant-console
  - /features/delivery-network
  - /features/analytics
  - /features/wallet
- /how-it-works
- /pricing
- /resources
  - /resources/blog
  - /resources/guides
  - /resources/tutorials
  - /resources/api (placeholder landing)
  - /resources/help
- /company
  - /company/about
  - /company/careers
  - /company/press-kit
  - /company/contact
- /legal
  - /legal/privacy
  - /legal/terms
  - /legal/cookies
  - /legal/merchant-agreement
- /status


13) Full Multi‑Level Sitemap (with key modules)

Home
- Hero (Spline cover), Discover‑Sell‑Earn explainer, Feature highlights, LogoWall, Testimonials, Stats, FAQs, Final CTA

Sellers
- Hero, Benefits grid, Earning model, Getting started steps, Payout timeline, Success stories, FAQ, CTA

Merchants
- Hero, Inventory syncing (APIs, CSV, Shopify placeholder), Commission rules, Catalog standards, Case studies, CTA

Features
- Overview hero, Feature cards linking to:
  - Seller App: onboarding, link‑in‑bio, product sharing, wallet
  - Merchant Console: catalog, commission, analytics
  - Delivery Network: coverage map, SLAs, status updates
  - Analytics: dashboards, cohort, product performance
  - Wallet & Payouts: currencies, timeline, statements

How It Works
- End‑to‑end workflow: buyer → seller → merchant → rider timeline with stepper

Pricing
- Commission model, merchant fees, add‑ons, FAQ, comparison, CTA

Resources
- Blog list, Guides, Tutorials, API Docs placeholder, Help Center with categories

Company
- About (mission, OvaSuite context), Careers (roles, values), Press Kit (logos, brand usage), Contact (form)

Legal
- Privacy, Terms, Cookie Policy, Merchant Agreement

Status
- API uptime, components health, incidents feed, subscribe


14) Content Blueprint (per page)

Note: Use as starting copy; localize per region as needed.

Home
- Hero copy: “Turn your audience into predictable income.”
- Sub‑headline: “OvaSell helps you discover products, share with your community, and earn commissions—fast.”
- Sections & titles:
  - Discover • Sell • Earn
  - Why sellers choose OvaSell
  - Real results from real sellers
  - Questions, answered
- Short paragraphs:
  - “Find quality products from verified merchants. Share in a tap. Track every sale.”
  - “Transparent commissions and on‑time payouts keep your business moving.”
- CTAs: “Become a Seller”, “See how it works”
- SEO meta title: “OvaSell | Discover. Sell. Earn.”
- SEO meta description: “Seller‑first commerce for Africa. Find products, share with your audience, and earn predictable commissions with fast payouts.”
- Schema.org: WebSite + Organization + Product; FAQPage for FAQs
- Image concepts: sellers on mobile, analytics dashboard, delivery status overlays, diverse African contexts

Sellers
- Hero copy: “Monetize trust, not ads.”
- Sub‑headline: “Promote products you believe in and get paid on a clear timeline.”
- Sections: Benefits, Earning model, Getting started (3 steps), Payout timeline, Success stories, FAQ
- CTAs: “Start selling”, “View catalog”
- SEO title: “For Sellers | OvaSell”
- SEO description: “Start free, promote quality products, and earn transparent commissions with fast payouts on OvaSell.”
- Schema: HowTo (onboarding), FAQPage
- Images: phone UI, link‑in‑bio, payout receipt, testimonial portraits

Merchants
- Hero copy: “Activate a distributed sales force.”
- Sub‑headline: “Tap into motivated micro‑sellers to move inventory with predictable unit economics.”
- Sections: Inventory syncing, Commission rules, Catalog standards, Case studies, CTA
- CTAs: “Talk to sales”, “View integration options”
- SEO title: “For Merchants | OvaSell”
- SEO description: “Join the OvaSell supply network. Sync inventory, set commission rules, and reach new customers through trusted sellers.”
- Schema: Product + AggregateOffer for catalog, SoftwareApplication for console
- Images: merchant dashboard, CSV/API sync, product data examples

Features
- Hero copy: “Tools that turn effort into earnings.”
- Sub‑headline: “From onboarding to payouts—everything sellers and merchants need.”
- Sections: Seller App, Merchant Console, Delivery Network, Analytics, Wallet
- CTAs: “Explore features”, “Get started”
- SEO title: “Features | OvaSell”
- SEO description: “Seller app, merchant console, delivery network, analytics, and wallet—designed for growth.”
- Schema: ItemList of SoftwareApplication features
- Images: feature UI blocks, iconography

How It Works
- Hero copy: “A simple flow from share to delivered order.”
- Sub‑headline: “Buyer → Seller → Merchant → Rider, tracked end‑to‑end.”
- Sections: Stepper timeline, explainer, trust & safety, closing CTA
- CTAs: “See pricing”, “Become a seller”
- SEO title: “How OvaSell Works”
- SEO description: “Understand the buyer–seller–merchant–rider workflow and what happens at each step.”
- Schema: HowTo + BreadcrumbList
- Images: timeline illustrations, arrows, map coverage

Pricing
- Hero copy: “Fair, transparent, and built to scale.”
- Sub‑headline: “Commission‑based earnings for sellers. Simple fees for merchants.”
- Sections: Seller commissions, Merchant fees, Add‑ons, Comparison, FAQ
- CTAs: “Start free”, “Talk to sales”
- SEO title: “Pricing | OvaSell”
- SEO description: “Transparent commissions for sellers and simple fees for merchants. View add‑ons and payout timelines.”
- Schema: OfferCatalog
- Images: pricing cards, wallet balances, calendar timeline

Resources
- Hero copy: “Learn, build, and grow with OvaSell.”
- Sub‑headline: “Guides, tutorials, blogs, and API docs.”
- Sections: Featured, filters, categories, latest
- CTAs: “Read the blog”, “Explore guides”
- SEO title: “Resources | OvaSell”
- SEO description: “Guides, tutorials, and blog posts to help sellers and merchants succeed with OvaSell.”
- Schema: CollectionPage + Blog
- Images: article cards, code snippets (API placeholder)

Company
- Hero copy: “Building Africa’s seller‑first commerce network.”
- Sub‑headline: “Part of the OvaSuite: OvaStay, OvaGrow, OvaManager.”
- Sections: Mission, Team values, Careers, Press Kit, Contact
- CTAs: “View roles”, “Download press kit”, “Contact us”
- SEO title: “Company | OvaSell”
- SEO description: “Learn about the team, mission, and open roles at OvaSell—part of the OvaSuite.”
- Schema: Organization + JobPosting
- Images: team, map of regions, brand kit mockups

Legal
- Hero copy: “Your data, your trust.”
- Sub‑headline: “Our commitment to privacy, compliance, and clear agreements.”
- Sections: Privacy, Terms, Cookies, Merchant Agreement
- SEO title: “Legal | OvaSell”
- SEO description: “Read OvaSell’s privacy policy, terms, cookie policy, and merchant agreement.”
- Schema: LegalService (as document pages)
- Images: minimal legal illustrations

Status
- Hero copy: “Live platform status.”
- Sub‑headline: “Uptime, incidents, and component health in real time.”
- Sections: Components grid, uptime charts, incident log, subscribe
- SEO title: “Status | OvaSell”
- SEO description: “View live API uptime, component health, and past incidents for OvaSell.”
- Schema: DataFeed + WebAPI
- Images: status charts, component icons


15) Design System Guidelines (detailed)

Typography (use modern geometric sans)
- Display: 72/72, tracking‑1%
- H1: 56/64
- H2: 44/52
- H3: 32/40
- H4: 24/32
- H5: 20/28
- H6: 18/26
- Body L: 18/28
- Body M: 16/26
- Caption: 14/22
- Code: 14/20 mono

Iconography
- Lucide set; stroke 1.5–2.0; rounded caps; consistent 24px base
- Use color accents sparingly; default slate/white; success/info states per tokens

Illustration style
- Minimal, geometric, line + soft fills; use green–yellow gradient accents
- For storytelling, combine illustrations with real photography showing African contexts

Glassmorphism rules
- Card background: rgba(255,255,255,.07)
- Backdrop blur: 10–16px
- Border: 1px solid rgba(255,255,255,.14)
- Inner highlight: linear‑gradient(180deg, rgba(255,255,255,.20), rgba(255,255,255,0) 60%)


16) SEO & Performance Blueprint

Performance targets
- Lighthouse: Perf ≥ 90, Access ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- Core Web Vitals: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms

Static‑first
- Prefer SSG for marketing pages; SSR only where personalization needed
- Cache HTML for 1–5 min; long‑cache immutable assets; enable HTTP/2 + compression

Images & media
- Use AVIF/WebP; lazyload below fold; width‑based srcset; preconnect to CDN; define sizes attr
- Optimize Spline embed: full‑width, GPU‑friendly; keep overlay pointer‑events none; avoid heavy layer filters

OpenGraph & Social
- OG: title, description (140 chars), image 1200×630; Twitter summary_large_image
- Include locale, site_name; add product‑focused OG for feature pages

Sitemap & robots
- Generate sitemap.xml nightly; priority 0.8 for core pages; lastmod per deploy
- robots.txt: Disallow staging; Allow all prod; point to sitemap

Analytics & tracking
- Consent‑aware; defer scripts; server‑side events for key conversions; UTM capture

Internationalization
- Prepare i18n keys; country‑aware examples (ZAR, NGN, KES); hreflang when localized

Accessibility
- Color contrast AA+; focus states; semantic landmarks; skip links; captioned media


17) Page Modules (detailed content snippets)

Example “Discover • Sell • Earn” (Home)
- Headline: “Discover products. Sell with trust. Earn on schedule.”
- Body: “Pick from verified inventory, share links with your audience, and track payouts from a single wallet.”
- Bullets: Verified catalog • Link‑in‑bio tools • Fast payouts

Pricing card content
- Starter (Sellers): Free — “Start earning with zero upfront cost.”
- Merchant Basic: Platform fee + commission — “Predictable unit economics.”
- Add‑ons: Priority support, custom analytics, advanced webhooks

FAQ starters
- “How fast are payouts?” — “Within 2 business days after order completion.”
- “Who sets commission rates?” — “Merchants define rules; sellers view before promoting.”
- “Do I need inventory?” — “No. Merchants provide stock; you promote.”


18) Data & Telemetry (Status page)

- Components: API, Auth, Catalog, Orders, Wallet, Webhooks, Delivery
- Metrics: 90‑day uptime, last incident, MTTR
- Subscriptions: email + RSS (future)


19) Governance & Workflow

- Content changes via CMS with preview environment
- Design tokens versioned; components documented in Storybook (optional)
- Release notes posted to Blog; incidents mirrored on Status


20) Implementation Notes

- Use Tailwind utilities for tokens; gradient bg on primary CTAs
- Use Spline 3D cover in hero areas on Home, Features overview, Company About
- Keep page weight ≤ 200KB JS on first load for marketing pages; code‑split heavy sections

End of document.
