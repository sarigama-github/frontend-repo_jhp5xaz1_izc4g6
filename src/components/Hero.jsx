import Spline from '@splinetool/react-spline'

export default function Hero({ kicker, title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden">
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
      </div>
    </section>
  )
}
