import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0B0F12]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-slate-300">
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How it Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Sellers</h4>
            <ul className="space-y-2">
              <li><Link to="/sellers" className="hover:text-white">Overview</Link></li>
              <li><Link to="/resources/guides" className="hover:text-white">Guides</Link></li>
              <li><Link to="/resources/help" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Merchants</h4>
            <ul className="space-y-2">
              <li><Link to="/merchants" className="hover:text-white">Overview</Link></li>
              <li><Link to="/resources/api" className="hover:text-white">API Docs</Link></li>
              <li><Link to="/company/contact" className="hover:text-white">Contact Sales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/company/about" className="hover:text-white">About</Link></li>
              <li><Link to="/company/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/company/press-kit" className="hover:text-white">Press Kit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/legal/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-white">Terms</Link></li>
              <li><Link to="/legal/cookies" className="hover:text-white">Cookies</Link></li>
              <li><Link to="/legal/merchant-agreement" className="hover:text-white">Merchant Agreement</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {year} OvaSell, part of OvaSuite.</p>
          <div className="mt-2 sm:mt-0">Status: <Link to="/status" className="text-emerald-400 hover:text-emerald-300">All systems normal</Link></div>
        </div>
      </div>
    </footer>
  )
}
