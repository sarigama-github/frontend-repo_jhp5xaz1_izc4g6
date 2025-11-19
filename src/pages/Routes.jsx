import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import { SellersPage, MerchantsPage, FeaturesPage, HowItWorksPage, PricingPage, ResourcesPage, CompanyPage, LegalPage, StatusPage } from './Placeholders'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sellers" element={<SellersPage />} />
      <Route path="/merchants" element={<MerchantsPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/legal/*" element={<LegalPage />} />
      <Route path="/status" element={<StatusPage />} />
    </Routes>
  )
}
