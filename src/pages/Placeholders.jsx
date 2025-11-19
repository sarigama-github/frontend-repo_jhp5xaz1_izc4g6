import GenericPage from './GenericPage'

export function SellersPage() {
  return (
    <GenericPage title="For Sellers" description="Promote products you believe in and get paid on a clear timeline.">
      <p className="text-slate-300">Benefits, earning model, getting started, payout timeline, and success stories will be scaffolded next.</p>
    </GenericPage>
  )
}

export function MerchantsPage() {
  return (
    <GenericPage title="For Merchants" description="Sync inventory, set commission rules, and reach new customers through trusted sellers.">
      <p className="text-slate-300">Inventory syncing options, commission rules, catalog standards, and case studies coming up.</p>
    </GenericPage>
  )
}

export function FeaturesPage() {
  return (
    <GenericPage title="Features" description="Seller app, merchant console, delivery network, analytics, and wallet—designed for growth.">
      <p className="text-slate-300">Feature deep‑dives and visuals will be added here.</p>
    </GenericPage>
  )
}

export function HowItWorksPage() {
  return (
    <GenericPage title="How It Works" description="Buyer → Seller → Merchant → Rider, tracked end‑to‑end.">
      <p className="text-slate-300">End‑to‑end workflow timeline with stepper and trust & safety notes.</p>
    </GenericPage>
  )
}

export function PricingPage() {
  return (
    <GenericPage title="Pricing" description="Transparent commissions for sellers and simple fees for merchants.">
      <p className="text-slate-300">Commission model, merchant fees, and optional add‑ons.</p>
    </GenericPage>
  )
}

export function ResourcesPage() {
  return (
    <GenericPage title="Resources" description="Guides, tutorials, blog, and API docs.">
      <p className="text-slate-300">Blog, Guides, Tutorials, API Docs (placeholder), Help Center.</p>
    </GenericPage>
  )
}

export function CompanyPage() {
  return (
    <GenericPage title="Company" description="Part of the OvaSuite: OvaStay, OvaGrow, OvaManager.">
      <p className="text-slate-300">About, Careers, Press Kit, Contact.</p>
    </GenericPage>
  )
}

export function LegalPage() {
  return (
    <GenericPage title="Legal" description="Privacy, Terms, Cookie Policy, Merchant Agreement.">
      <p className="text-slate-300">Legal documents will be added with a readable layout.</p>
    </GenericPage>
  )
}

export function StatusPage() {
  return (
    <GenericPage title="System Status" description="API uptime, components, and incident history.">
      <p className="text-slate-300">Live status components and logs preview coming soon.</p>
    </GenericPage>
  )
}
