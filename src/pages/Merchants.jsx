import React from 'react'
import { ArrowRight, CheckCircle2, Store, LineChart, Users, Settings, Truck, Tags, Network, FileSpreadsheet, ClipboardList, Warehouse, Percent, Bell, Layers3, BarChart3, Globe2, Package2, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

export default function Merchants() {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <Seo
        title="Merchants | OvaSell — Discover. Sell. Earn."
        description="Grow your sales with OvaSell. Tap into a network of trusted sellers, set commissions, manage inventory, and track orders with integrated logistics."
      />
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/30 via-emerald-500/10 to-transparent" />
          <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-emerald-500/40 to-amber-400/30 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">Reach Thousands of Sellers. Sell More. Worry Less.</h1>
                <p className="mt-4 text-slate-300 leading-7">
                  OvaSell connects your products to a network of trusted sellers. Upload your inventory, set commissions, and let sellers promote and sell for you — no extra staff, no extra marketing costs.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#join" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
                    Join as a Merchant <ArrowRight size={18} />
                  </a>
                  <a href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition">
                    Request a Demo
                  </a>
                </div>
              </div>
              <div>
                {/* Dashboard Mockup */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="inline-flex items-center gap-2"><Store className="text-emerald-300" size={14}/> Catalog</span>
                        <span className="text-emerald-300">+24</span>
                      </div>
                      <div className="mt-3 space-y-2 text-sm">
                        {['Blender Pro','Wireless Buds','Skincare Kit','Phone Stand'].map((p) => (
                          <div key={p} className="flex items-center justify-between">
                            <span className="text-slate-200">{p}</span>
                            <span className="text-slate-400">In stock</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="inline-flex items-center gap-2"><Users className="text-emerald-300" size={14}/> Seller Network</span>
                        <span className="text-emerald-300">1,842</span>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {['IG','WA','TT'].map((t,i)=> (
                          <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-slate-200">{t}</div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="inline-flex items-center gap-2"><Percent className="text-emerald-300" size={14}/> Commission Setup</span>
                        <span className="text-emerald-300">Active</span>
                      </div>
                      <div className="mt-3 space-y-2 text-sm">
                        {[
                          { name: 'Blender Pro', rate: '12%' },
                          { name: 'Wireless Buds', rate: '10%' },
                          { name: 'Skincare Kit', rate: '15%' },
                        ].map((p)=> (
                          <div key={p.name} className="flex items-center justify-between">
                            <span className="text-slate-200">{p.name}</span>
                            <span className="text-emerald-300">{p.rate}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="inline-flex items-center gap-2"><Truck className="text-emerald-300" size={14}/> Live Orders</span>
                        <span className="text-emerald-300">7</span>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {['Packed','Pickup','In transit'].map((s,i)=> (
                          <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-slate-200 text-xs">{s}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Stat label="Today Sales" value="₦245k" /></div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Stat label="Orders" value="72" /></div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Stat label="Active Sellers" value="1,102" /></div>
                  </div>
                </div>
                <div className="mt-3 text-slate-400 text-sm">Visualized: catalog, seller network, commission setup, live orders</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY MERCHANTS LOVE OVASELL */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">More Sellers, More Sales, Less Hassle</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={Network} title="Instant Seller Network">Your products reach thousands of active sellers immediately.</FeatureCard>
              <FeatureCard icon={Tags} title="No Marketing Overhead">Sellers promote your products — you only manage inventory and orders.</FeatureCard>
              <FeatureCard icon={Truck} title="Real-Time Orders">Track every order from seller to buyer. Receive notifications instantly.</FeatureCard>
              <FeatureCard icon={Percent} title="Flexible Commission Setup">Set commission rates per product or category. Reward top-performing sellers.</FeatureCard>
              <FeatureCard icon={Warehouse} title="Multi-Outlet & Inventory Control">Manage stock across outlets or warehouses seamlessly.</FeatureCard>
              <FeatureCard icon={Package2} title="Integrated Logistics">Coordinate pickup for riders efficiently. All deliveries tracked in real-time.</FeatureCard>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS FOR MERCHANTS */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Simple Steps to Expand Your Business</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">Step 1 — Create Your Merchant Profile</h3>
                  <p className="text-slate-300 text-sm mt-2">Business name, logo, address, and contact info. KYC verification (optional) for trust badge.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">Step 2 — Upload Products</h3>
                  <p className="text-slate-300 text-sm mt-2">Single or bulk upload. Set prices, inventory, and commission rates. Add images, descriptions, and categories.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">Step 3 — Assign Commissions</h3>
                  <p className="text-slate-300 text-sm mt-2">Set commission % per product or category. Track seller performance and payouts.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">Step 4 — Receive Orders</h3>
                  <p className="text-slate-300 text-sm mt-2">Sellers’ audiences purchase your products. Orders appear in your dashboard. Confirm stock and prepare for pickup.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">Step 5 — Coordinate Delivery</h3>
                  <p className="text-slate-300 text-sm mt-2">Riders pick up products from your address. Buyers get real-time tracking. Sellers monitor order fulfillment.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">Step 6 — Analytics & Growth</h3>
                  <p className="text-slate-300 text-sm mt-2">Sales reports, top-selling products, best-performing sellers, inventory turnover, revenue by outlet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MERCHANT FEATURES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Everything You Need to Manage a Growing Network</h2>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={Layers3} title="Product & Inventory Management">Categories, attributes, and variants. Stock alerts. Low inventory notifications. Batch/expiry tracking (for food/medicine).</FeatureCard>
              <FeatureCard icon={ClipboardList} title="Order Management Dashboard">Track orders from sellers’ buyers. Confirm stock & assign pickup. Monitor delivery status.</FeatureCard>
              <FeatureCard icon={Users} title="Seller Network Analytics">Who is selling what. Track commissions earned by sellers. Identify top performers for rewards.</FeatureCard>
              <FeatureCard icon={Percent} title="Commission & Incentives">Flexible rates by product, category, or campaign. Automated payout schedules.</FeatureCard>
              <FeatureCard icon={Truck} title="Delivery & Pickup Coordination">Rider integration. Real-time location tracking. Automatic notifications to sellers and buyers.</FeatureCard>
              <FeatureCard icon={Store} title="Multi-Outlet Control">Central dashboard for multiple store locations. Outlet-specific stock and pricing.</FeatureCard>
              <FeatureCard icon={BarChart3} title="Reports & Insights">Product performance, sales trends, seller performance, revenue & payout reports.</FeatureCard>
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Merchants Who Scale With OvaSell</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { quote: 'OvaSell expanded our reach overnight — we didn’t hire a single marketing staff.', name: 'Peak Mart' },
                { quote: 'Our products are now sold by hundreds of sellers across Lagos and Abuja.', name: 'Fashion House' },
                { quote: 'The commission system motivates sellers to sell more, and we sell more too.', name: 'Gadget World' },
              ].map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <ShieldCheck size={18} />
                    <span className="text-sm">Verified Merchant</span>
                  </div>
                  <p className="mt-3 text-slate-200">“{t.quote}”</p>
                  <div className="mt-4 text-slate-400 text-sm">— {t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ FOR MERCHANTS */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">FAQ for Merchants</h2>
            <div className="mt-6 divide-y divide-white/10 rounded-2xl bg-white/5 border border-white/10">
              {[
                { q: 'How do I join as a merchant?', a: 'Click “Join as Merchant”, complete your profile, and submit optional KYC to get the trust badge. You can start uploading products immediately.' },
                { q: 'How are commissions calculated?', a: 'You set a flat amount or percentage per product/category. OvaSell automatically tracks and attributes sales to the right seller.' },
                { q: 'Do I need a physical store?', a: 'Not required. You only need a pickup location for riders to collect orders. Multiple outlets are supported.' },
                { q: 'Who handles delivery?', a: 'Delivery is coordinated via OvaSell’s rider network and partners. You confirm pickup readiness; buyers and sellers get tracking.' },
                { q: 'How are payouts made to sellers?', a: 'Seller commissions accrue per order and are paid on a schedule you choose (weekly by default). You receive the product price minus agreed fees.' },
                { q: 'Can I upload products in bulk?', a: 'Yes. Use CSV/Spreadsheet bulk upload to add or update products at once.' },
                { q: 'Can I run promotional campaigns for sellers?', a: 'Yes. Create campaigns with boosted commissions for selected products or periods to drive more sales.' },
              ].map((f, i) => (
                <details key={i} className="py-4 px-6">
                  <summary className="cursor-pointer text-white/90">{f.q}</summary>
                  <p className="mt-2 text-slate-300 text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-amber-500/30" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold">Start Growing Your Sales Network Today</h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Join OvaSell, reach thousands of sellers instantly, and turn your products into a scalable revenue engine.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a id="join" href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
                Join as Merchant <ArrowRight size={18} />
              </a>
              <a id="demo" href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition">
                Request a Demo
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition">
                Learn More About Seller Network
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
