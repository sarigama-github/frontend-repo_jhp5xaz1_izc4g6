import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ kicker, title, subtitle, primaryCta, secondaryCta }) {
  const words = ['Discover', 'Sell', 'Earn', 'Repeat']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 1300)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-[82vh] overflow-hidden">
      {/* Brand gradient backdrop */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0EA75A] via-emerald-500/40 to-[#F7B500] opacity-40" />

      {/* Spline visual */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" />
      </div>
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0B0F12]/80" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {kicker && <p className="text-emerald-300 font-medium mb-3">{kicker}</p>}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
          {/* Dynamic tagline */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 backdrop-blur border border-white/15">
            <span className="text-slate-200/90 text-sm">Discover → Sell → Earn →</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-yellow-300 font-semibold">
              {words[index]}
            </span>
          </div>
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {primaryCta}
            {secondaryCta}
          </div>
        </div>

        {/* Simple 3D mobile mockup frame (placeholder around Spline) */}
        <div className="mt-12 max-w-md">
          <div className="aspect-[9/18] rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-lg shadow-2xl shadow-black/40 overflow-hidden">
            <div className="h-full w-full grid grid-rows-6">
              <div className="row-span-2 p-4 bg-gradient-to-r from-emerald-500/20 to-yellow-400/20 border-b border-white/10">
                <div className="h-4 w-1/2 rounded bg-white/20" />
                <div className="mt-2 h-3 w-1/3 rounded bg-white/10" />
              </div>
              <div className="row-span-3 grid grid-cols-2 gap-2 p-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5" />
                ))}
              </div>
              <div className="row-span-1 p-4 flex items-center justify-between border-t border-white/10">
                <div className="h-3 w-24 rounded bg-white/15" />
                <div className="h-8 w-24 rounded-full bg-gradient-to-r from-emerald-300 to-yellow-300" />
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">Seller dashboard • Product feed • Earnings</p>
        </div>
      </div>
    </section>
  )
}
