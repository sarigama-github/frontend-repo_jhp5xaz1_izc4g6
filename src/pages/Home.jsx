import { Link } from 'react-router-dom'
import { CheckCircle2, MapPin, Bike, Store, ArrowRight, Shield, Users, Wallet2, LineChart, Truck } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <Seo
        title="Home | OvaSell — Discover. Sell. Earn."
        description="OvaSell is a seller-first social commerce platform for Africa. Discover products, share your storefront, and earn commissions with fast, reliable payouts."
      />
      <Header />
      <main>
        {/* 1️⃣ HERO SECTION */}
        <Hero
          kicker="Seller‑first commerce"
          title="Discover. Sell. Earn — All in One Super App."
          subtitle="Turn your influence into income, access thousands of products, and sell to your audience with zero inventory. Merchants get more customers. Buyers shop easier. Everyone wins."
          primaryCta={
            <Link to="/sellers" className="px-5 py-2.5 rounded-full text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold inline-flex items-center gap-2">
              Become a Seller — It’s Free <ArrowRight size={16} />
            </Link>
          }
          secondaryCta={
            <Link to="/merchants" className="px-5 py-2.5 rounded-full text-white/90 border border-white/20">
              Join as Merchant
            </Link>
          }
        />

        {/* 2️⃣ HOW OVASELL WORKS (3‑WAY ECOSYSTEM) */}
        <section className="py-20 bg-gradient-to-b from-transparent to-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">A New Commerce Ecosystem Built for Everyone</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {/* Sellers */}
              <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
                <div className="flex items-center gap-3">
                  <Users className="text-emerald-300" />
                  <h3 className="text-xl font-semibold">For Sellers</h3>
                </div>
                <p className="mt-2 text-slate-300">Turn your audience into revenue. No inventory needed.</p>
                <ul className="mt-4 space-y-2 text-slate-200">
                  {[
                    'Discover products from verified merchants',
                    'Add items to your personal storefront',
                    'Share your store link anywhere',
                    'Earn commission on every order',
                    'Track orders and payouts in real time',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-300" /> {t}</li>
                  ))}
                </ul>
                <Link to="/sellers" className="mt-6 inline-block px-4 py-2 rounded-full text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold">Start Selling</Link>
              </div>

              {/* Buyers */}
              <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
                <div className="flex items-center gap-3">
                  <Shield className="text-emerald-300" />
                  <h3 className="text-xl font-semibold">For Buyers</h3>
                </div>
                <p className="mt-2 text-slate-300">Shop trusted products from people you follow.</p>
                <ul className="mt-4 space-y-2 text-slate-200">
                  {[
                    'Genuine recommendations',
                    'Transparent pricing',
                    'Safe checkout',
                    'Real-time delivery tracking',
                    'Trusted merchants nationwide',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-300" /> {t}</li>
                  ))}
                </ul>
                <Link to="/features" className="mt-6 inline-block px-4 py-2 rounded-full text-white/90 border border-white/20">Explore Marketplace</Link>
              </div>

              {/* Merchants */}
              <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
                <div className="flex items-center gap-3">
                  <Store className="text-emerald-300" />
                  <h3 className="text-xl font-semibold">For Merchants</h3>
                </div>
                <p className="mt-2 text-slate-300">Multiply your sales with thousands of sellers.</p>
                <ul className="mt-4 space-y-2 text-slate-200">
                  {[
                    'Upload products easily',
                    'Set commissions',
                    'Manage inventory',
                    'Receive orders through seller networks',
                    'Handle pickups effortlessly',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-300" /> {t}</li>
                  ))}
                </ul>
                <Link to="/merchants" className="mt-6 inline-block px-4 py-2 rounded-full text-white/90 border border-white/20">Become a Merchant</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ FEATURE HIGHLIGHTS */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why OvaSell Works for Everyone</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {/* Sellers */}
              <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-emerald-300">For Sellers — Earn on Autopilot</h3>
                <ul className="mt-3 space-y-2 text-slate-200 text-sm">
                  {[
                    'Finely curated catalogue',
                    'Instant storefront builder',
                    'Share anywhere: WhatsApp, IG, TikTok',
                    'Automatic commission calculation',
                    'Weekly or instant withdrawals',
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-300" /> {i}</li>
                  ))}
                </ul>
              </div>
              {/* Buyers */}
              <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-emerald-300">For Buyers — A Smarter Way to Shop</h3>
                <ul className="mt-3 space-y-2 text-slate-200 text-sm">
                  {[
                    'Buy from people you trust',
                    'Verified merchants only',
                    'Clear delivery tracking',
                    'Fast support',
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-300" /> {i}</li>
                  ))}
                </ul>
              </div>
              {/* Merchants */}
              <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-emerald-300">For Merchants — Amplify Your Reach</h3>
                <ul className="mt-3 space-y-2 text-slate-200 text-sm">
                  {[
                    'Access a network of independent sellers',
                    'Reduce marketing spend',
                    'Sell more without hiring',
                    'Built-in inventory tools',
                    'Easy order fulfillment',
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-300" /> {i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ THE OVASELL SELLER APP */}
        <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Become a Seller in Minutes</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '1. Create your profile',
                  desc: 'Sign up with your phone or email — no documents needed.',
                },
                {
                  title: '2. Discover products',
                  desc: 'Browse categories and trending items from trusted merchants.',
                },
                {
                  title: '3. Share & earn',
                  desc: 'Share your storefront link. Earn commissions instantly when people buy.',
                },
              ].map((s, i) => (
                <div key={s.title} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-400 to-yellow-300 text-black font-bold grid place-items-center">{i + 1}</div>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-300">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/sellers" className="inline-block px-5 py-2.5 rounded-full text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold">Start Selling Today</Link>
            </div>
          </div>
        </section>

        {/* 5️⃣ THE MERCHANT CONSOLE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Built for Growing Businesses</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <ul className="space-y-3 text-slate-200">
                  {[
                    'Store identity setup',
                    'Store address & pickup location',
                    'Product & inventory uploads',
                    'Commission setup',
                    'Order management',
                    'Sales analytics',
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="text-emerald-300" size={18} /> {i}</li>
                  ))}
                </ul>
                <Link to="/merchants" className="mt-6 inline-block px-5 py-2.5 rounded-full text-white/90 border border-white/20">Join as Merchant</Link>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[Wallet2, Store, LineChart, Truck, Shield, Users].map((Icon, idx) => (
                  <div key={idx} className="rounded-2xl p-6 bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="text-emerald-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6️⃣ LIVE DELIVERY & ORDER TRACKING */}
        <section className="py-20 bg-gradient-to-b from-transparent to-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Fast, Reliable Delivery — Powered by Real-Time Tracking</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-300">
                  OvaSell connects buyers and riders seamlessly. Riders pick up from merchants and deliver to buyers with full GPS tracking. Merchants get automatic pickup alerts. Sellers see order progress. Everyone stays in sync.
                </p>
              </div>
              <div>
                {/* Map Illustration */}
                <div className="relative aspect-video rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(250,204,21,0.2),transparent_40%)]" />
                  <div className="absolute left-6 top-6 flex items-center gap-2 text-sm text-slate-200"><Store size={16} /> Merchant</div>
                  <div className="absolute right-8 bottom-8 flex items-center gap-2 text-sm text-slate-200"><MapPin size={16} /> Buyer</div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 text-sm text-slate-200"><Bike size={16} /> Rider</div>
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 56" preserveAspectRatio="none">
                      <path d="M10 10 C 40 8, 60 30, 90 46" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none" strokeDasharray="3 3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7️⃣ WHY OVASELL IS DIFFERENT */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Not Just Another Marketplace — It’s a Social Commerce Engine</h2>
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Seller-first platform',
                'Zero inventory required',
                'Merchants get free distribution',
                'Built-in trust via authentic recommendations',
                'Mobile-first experience',
                'Designed for Africa’s digital economy',
                'Fast payouts',
                'Real-time location system',
              ].map((i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl p-3 bg-white/5 border border-white/10">
                  <CheckCircle2 className="text-emerald-300" size={18} />
                  <span className="text-slate-200 text-sm">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8️⃣ TESTIMONIALS */}
        <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Loved by Sellers. Trusted by Merchants.</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { quote: 'I earned ₦72,000 in my first month recommending products.', name: 'Joy, Seller' },
                { quote: 'OvaSell increased our weekly sales by 3×.', name: 'Peak Mart, Merchant' },
                { quote: 'Buying directly from my favorite creator makes shopping feel personal.', name: 'Amara, Buyer' },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
                  <p className="text-slate-200">“{t.quote}”</p>
                  <p className="mt-4 text-sm text-slate-400">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9️⃣ FAQ SECTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-6 divide-y divide-white/10">
              {[
                { q: 'How do sellers earn?', a: 'Sellers earn a commission on every order placed through their storefront links. Commissions are defined by merchants and shown upfront.' },
                { q: 'Do sellers need inventory?', a: 'No. All inventory and fulfillment are handled by merchants. Sellers only promote products they choose.' },
                { q: 'How does merchant commission work?', a: 'Merchants set commission rates per product or collection. Sellers see rates before sharing.' },
                { q: 'How are deliveries handled?', a: 'Riders pick up from merchants and deliver to buyers. Everyone can track progress in real time.' },
                { q: 'Is OvaSell free to join?', a: 'Yes. Creating a seller profile is free. Merchants pay standard payment and logistics fees.' },
                { q: 'When do sellers get paid?', a: 'Payouts are weekly by default, with an option for instant withdrawals to supported wallets/banks.' },
              ].map((f) => (
                <details key={f.q} className="py-4">
                  <summary className="cursor-pointer text-white/90">{f.q}</summary>
                  <p className="mt-2 text-slate-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 🔟 FINAL CTA SECTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Start, Sell & Succeed on OvaSell</h2>
            <p className="mt-3 text-slate-300 max-w-3xl mx-auto">Whether you're a creator, student, business owner, or everyday shopper — OvaSell helps you earn more, sell more, and shop smarter.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/sellers" className="px-5 py-2.5 rounded-full text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold">Become a Seller</Link>
              <Link to="/merchants" className="px-5 py-2.5 rounded-full text-white/90 border border-white/20">Join as Merchant</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
