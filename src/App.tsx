import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import ExpertiseGrid from './components/ExpertiseGrid'
import ApproachSection from './components/ApproachSection'
import Footer from './components/Footer'
import LegalMentions from './components/LegalMentions'
import PrivacyPolicy from './components/PrivacyPolicy'

// Component to track page views for Google Analytics
const PageViewTracker: React.FC = () => {
  const location = useLocation()
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  useEffect(() => {
    // Track page view when route changes
    if (typeof window !== 'undefined' && window.gtag && gaMeasurementId) {
      window.gtag('config', gaMeasurementId, {
        page_path: location.pathname + location.search,
      })
    }
  }, [location, gaMeasurementId])

  return null
}

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ExpertiseGrid />
      <ApproachSection />
      {/* <TestimonialsCarousel /> */}
      {/* Remove when testimonials are added again */}
      <section className="py-80 px-4 bg-light"></section>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

