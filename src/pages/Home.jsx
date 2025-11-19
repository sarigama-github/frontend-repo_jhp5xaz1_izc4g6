import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import { FeatureGrid, DiscoverSellEarn, Testimonials, FAQ } from '../components/Sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <Seo title="OvaSell | Discover. Sell. Earn." description="Seller‑first commerce for Africa. Find products, share with your audience, and earn predictable commissions with fast payouts." />
      <Header />
      <main>
        <Hero
          kicker="Seller‑first commerce"
          title="Turn your audience into predictable income."
          subtitle="OvaSell helps you discover products, share with your community, and earn commissions—fast."
          primaryCta={<Link to="/sellers" className="px-5 py-2.5 rounded-full text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold">Become a Seller</Link>}
          secondaryCta={<Link to="/how-it-works" className="px-5 py-2.5 rounded-full text-white/90 border border-white/20">See how it works</Link>}
        />
        <DiscoverSellEarn />
        <FeatureGrid />
        <Testimonials />
        <FAQ />
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Ready to start?</h2>
            <p className="mt-2 text-slate-300">Join thousands of everyday sellers building real revenue.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/sellers" className="px-5 py-2.5 rounded-full text-black bg-gradient-to-r from-emerald-400 to-yellow-300 font-semibold">Start free</Link>
              <Link to="/pricing" className="px-5 py-2.5 rounded-full text-white/90 border border-white/20">See pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
