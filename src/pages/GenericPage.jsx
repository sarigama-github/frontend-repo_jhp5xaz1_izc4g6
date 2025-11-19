import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

export default function GenericPage({ title, description, children }) {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <Seo title={`${title} | OvaSell — Discover. Sell. Earn.`} description={description} />
      <Header />
      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          {description && <p className="mt-2 text-slate-300 max-w-2xl">{description}</p>}
          <div className="mt-8 space-y-8">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
