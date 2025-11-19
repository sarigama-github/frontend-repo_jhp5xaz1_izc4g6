import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Store, LineChart, Wallet, ShieldCheck, Link as LinkIcon, Users2, Star, ChevronRight } from 'lucide-react'
import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

const amounts = ['₦1,200', '₦7,800', '₦14,500']

function AnimatedEarnings() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % amounts.length), 1600)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="h-10 overflow-hidden relative inline-flex align-middle">
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={index}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-semibold"
        >
          {amounts[index]} earned
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10 text-xs tracking-wide">
      {children}
    </span>
  )
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/7 transition">
      <div className="flex items-center gap-3 mb-3">
        <span className="p-2 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-400/20 text-emerald-300 border border-white/10">
          <Icon size={20} />
        </span>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="text-slate-300 text-sm leading-6">{children}</p>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-slate-400 text-xs uppercase tracking-wider">{label}</span>
      <span className="text-white text-lg font-semibold">{value}</span>
    </div>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} className="w-full py-4 flex items-center justify-between text-left">
        <span className="text-white font-medium">{q}</span>
        <ChevronRight className={`size-5 text-slate-400 transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pb-4"
          >
            <p className="text-slate-300 text-sm leading-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Sellers() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <Seo
        title="Sellers | OvaSell — Discover. Sell. Earn."
        description="Become a seller on OvaSell and earn from products you love. Zero inventory. Zero risk. Create your storefront, share your link, and start earning."
      />
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/30 via-emerald-500/10 to-transparent" />
          <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-emerald-500/40 to-amber-400/30 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Pill>Become a Seller on OvaSell</Pill>
                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Start Selling & Start Earning — Anywhere, Anytime.
                </h1>
                <p className="mt-4 text-slate-300 leading-7">
                  Turn your WhatsApp, Instagram, TikTok or community into a steady source of income. With OvaSell, you discover products, add them to your storefront, share with your audience, and earn commissions each time someone buys.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#start" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
                    Start Selling for Free <ArrowRight size={18} />
                  </a>
                  <a href="#how" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition">
                    Learn How It Works
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <AnimatedEarnings />
                  <span className="text-slate-400 text-sm">→ growing in real time</span>
                </div>
              </div>
              <div className="relative">
                {/* 3D-ish phone mock */}
                <div className="mx-auto w-[290px] sm:w-[320px] aspect-[9/19] rounded-[36px] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl p-3">
                  <div className="w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
                    <div className="absolute inset-x-8 top-4 h-6 rounded-full bg-black/60" />
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-500/30 to-transparent" />
                    <div className="p-4 pt-16">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>Today</span>
                        <span className="inline-flex items-center gap-1"><Star className="size-3 text-amber-400" />Highlights</span>
                      </div>
                      <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-slate-300 text-xs">Earnings</div>
                        <div className="text-white text-2xl font-bold mt-1 flex items-baseline gap-2">
                          <AnimatedEarnings />
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <Stat label="Views" value="2,341" />
                          <Stat label="Clicks" value="418" />
                          <Stat label="Orders" value="63" />
                        </div>
                      </div>
                      <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span>Top Items</span>
                          <span className="text-emerald-300">+12%</span>
                        </div>
                        <div className="mt-2 space-y-2">
                          {['Portable Blender', 'Wireless Buds', 'Skincare Kit'].map((n,i) => (
                            <div key={i} className="flex items-center justify-between text-sm">
                              <span className="text-slate-200">{n}</span>
                              <span className="text-slate-400">{Math.floor(8+Math.random()*20)} orders</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 left-1/2 -translate-x-1/2 -bottom-8 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* WHY BECOME A SELLER */}
        <section className="py-16" id="why">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">A Better Way to Make Money Online</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <FeatureCard icon={ShieldCheck} title="You Don’t Need Inventory">
                No storage, no bulk buying, no logistics. Just choose products and sell instantly.
              </FeatureCard>
              <FeatureCard icon={Store} title="You Sell From a Ready-Made Storefront">
                Add products from merchants and your store updates automatically.
              </FeatureCard>
              <FeatureCard icon={CheckCircle2} title="Earn Every Time Someone Buys">
                Commissions are clearly displayed. You get paid fast. Simple, transparent earnings.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16" id="how">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">Getting Started Is as Easy as 1… 2… 3…</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Pill>Step 1</Pill>
                  <span className="text-white font-medium">Create Your Seller Profile</span>
                </div>
                <p className="text-slate-300 text-sm leading-6">Sign up with your phone number or email. No documents required. No fees or subscription.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Pill>Step 2</Pill>
                  <span className="text-white font-medium">Discover Products You Want to Sell</span>
                </div>
                <p className="text-slate-300 text-sm leading-6">Explore categories: Fashion, Electronics, Beauty, Home, Gadgets, More. Merchants list products with commission rates. Tap → Add to your storefront.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Pill>Step 3</Pill>
                  <span className="text-white font-medium">Share Your Store Link & Earn</span>
                </div>
                <p className="text-slate-300 text-sm leading-6">Your personalized store link works across WhatsApp, Instagram Story, TikTok Bio, Facebook, Telegram, Websites. Each sale = instant commission added to your balance.</p>
              </div>
            </div>
            <div className="mt-6 text-slate-400 text-sm">Illustration: Profile → Discover → Share → Earn</div>
          </div>
        </section>

        {/* SELLER FEATURES */}
        <section className="py-16" id="features">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">Everything You Need to Sell Confidently</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={Store} title="Personal Storefront">
                A clean, mobile-optimized shop automatically created for you. Add unlimited products. Customizable cover photo & bio.
              </FeatureCard>
              <FeatureCard icon={LineChart} title="Real-Time Analytics">
                Track views, clicks, orders, earnings, top-performing items and conversion rates.
              </FeatureCard>
              <FeatureCard icon={Wallet} title="Easy Withdrawals">
                Withdraw earnings to bank account, mobile money (Ghana, Kenya), or wallet. Payments processed quickly.
              </FeatureCard>
              <FeatureCard icon={ShieldCheck} title="Trusted Merchants Only">
                You sell only from vetted, verified merchants to guarantee product quality.
              </FeatureCard>
              <FeatureCard icon={Store} title="No Customer Support Stress">
                Merchants and OvaSell handle customer service, delivery, returns, and stock issues — you focus on sharing.
              </FeatureCard>
              <FeatureCard icon={LinkIcon} title="One Link for Everything">
                Your OvaSell Store Link contains all your products, categories, deals, and your identity as the seller.
              </FeatureCard>
              <FeatureCard icon={Users2} title="Build a Team (Future)">
                Optional future module: earn extra when your team members make sales. Referral tree / seller downline.
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* EARNING MODEL */}
        <section className="py-16" id="earnings">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">Transparent Commissions You Can Trust</h2>
            <div className="mt-6 grid lg:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-3">Every product displays</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Merchant price</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Buyer price</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Seller commission (in ₦ or %)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Estimated earnings</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Delivery availability</li>
                </ul>
                <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-sm">
                  Example: Viano Portable Blender — Price: ₦15,000 — Commission: 12% — You earn: ₦1,800 per sale
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-3">Additional earning features</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Boosted commissions during promo periods</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Exclusive seller-only deals</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Bonus earnings for high performers</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Weekly payout cycles</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400"/>Monthly rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY SYSTEM */}
        <section className="py-16" id="delivery">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">We Handle Fulfillment — You Just Sell</h2>
            <p className="mt-3 text-slate-300 max-w-3xl">Sellers don’t worry about pickup, packaging, delivery, refunds, returns, or support. OvaSell + Merchants + Riders handle all logistics. You only connect the buyer to the product.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Pickup','Packaging','Delivery','Returns'].map((t,i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-slate-200">{t}</div>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="py-16" id="stories">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">Hear from Top Sellers</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { quote: 'I made ₦52,000 in my first week without stocking anything.', name: 'Tosin', role: 'Fashion Influencer' },
                { quote: 'OvaSell doubled my Instagram earnings. My followers trust my store.', name: 'Nath', role: 'Creator' },
                { quote: 'I run my store entirely from my phone.', name: 'Sarah', role: 'Student Seller' },
              ].map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300">
                    {[...Array(5)].map((_, s) => <Star key={s} className="size-4 fill-amber-300" />)}
                  </div>
                  <p className="mt-3 text-slate-200">“{t.quote}”</p>
                  <div className="mt-4 text-slate-400 text-sm">— {t.name}, {t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" id="faq">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">FAQ for Sellers</h2>
            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 divide-y divide-white/10">
              {[
                { q: 'How much can I earn?', a: 'Earnings depend on the products you choose and your audience size. Many sellers start seeing steady commissions within days.' },
                { q: 'Do I need capital?', a: 'No. There is no upfront cost. Just create your profile, pick products, and share your store link.' },
                { q: 'Who handles delivery?', a: 'Merchants and OvaSell handle fulfillment end-to-end including delivery, returns, and support.' },
                { q: 'Can I sell in multiple countries?', a: 'Yes. As merchants list cross-border products, your store can accept orders where delivery is available.' },
                { q: 'How do I withdraw?', a: 'Withdraw to bank accounts, supported mobile money wallets (Ghana, Kenya), or keep funds in your OvaSell wallet.' },
                { q: 'Can I customize my store?', a: 'Yes. Add your cover photo, bio, and curate categories to match your brand.' },
              ].map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-amber-500/30" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="text-white text-2xl sm:text-3xl font-semibold">Start Selling Today — No Investment Needed</h2>
              <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Join thousands of smart sellers earning daily by sharing products from top merchants.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a id="start" href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
                  Start Selling Now <ArrowRight size={18} />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition">
                  Download App (Google Play / App Store)
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition">
                  Watch Demo Video
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
