import { Link } from 'react-router-dom'
import { CheckCircle2, LineChart, Wallet2, Truck, Shield, Users } from 'lucide-react'

export function FeatureGrid() {
  const items = [
    { icon: Users, title: 'Seller App', desc: 'Onboard fast, share products, track earnings.' },
    { icon: Shield, title: 'Merchant Console', desc: 'Sync inventory, set commissions, manage catalog.' },
    { icon: Truck, title: 'Delivery Network', desc: 'Coverage with live status and SLAs.' },
    { icon: LineChart, title: 'Analytics', desc: 'Performance, cohorts, product insights.' },
    { icon: Wallet2, title: 'Wallet & Payouts', desc: 'Multi‑currency with predictable timelines.' },
  ]
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Tools that turn effort into earnings</h2>
        <p className="text-slate-300 mt-2">Everything sellers and merchants need to grow.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10">
              <it.icon className="text-emerald-300" />
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/features" className="text-emerald-300 hover:text-emerald-200">Explore all features →</Link>
        </div>
      </div>
    </section>
  )
}

export function DiscoverSellEarn() {
  const bullets = ['Verified catalog', 'Link‑in‑bio tools', 'Fast payouts']
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Discover products. Sell with trust. Earn on schedule.</h2>
          <p className="mt-3 text-slate-300">Pick from verified inventory, share links with your audience, and track payouts from a single wallet.</p>
          <ul className="mt-6 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-slate-200"><CheckCircle2 className="text-emerald-300" size={18} /> {b}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Link to="/sellers" className="px-5 py-2.5 rounded-full text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold">Become a Seller</Link>
            <Link to="/how-it-works" className="px-5 py-2.5 rounded-full text-white/90 border border-white/20">See how it works</Link>
          </div>
        </div>
        <div>
          <div className="aspect-video rounded-2xl bg-white/5 border border-white/10" />
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { name: 'Amina, Lagos', quote: 'OvaSell turned my WhatsApp list into steady income.' },
    { name: 'David, Nairobi', quote: 'Clear commissions. On‑time payouts. No inventory hassle.' },
    { name: 'Lebo, Johannesburg', quote: 'I recommend products I trust and my community loves it.' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Real results from real sellers</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const faqs = [
    { q: 'How fast are payouts?', a: 'Within 2 business days after order completion.' },
    { q: 'Who sets commission rates?', a: 'Merchants define rules; sellers view before promoting.' },
    { q: 'Do I need inventory?', a: 'No. Merchants provide stock; you promote.' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Questions, answered</h2>
        <div className="mt-6 divide-y divide-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer text-white/90">{f.q}</summary>
              <p className="mt-2 text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
