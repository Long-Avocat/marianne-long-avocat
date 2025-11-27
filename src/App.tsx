import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import ExpertiseGrid from './components/ExpertiseGrid'
import ApproachSection from './components/ApproachSection'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import Footer from './components/Footer'
import LegalMentions from './components/LegalMentions'
import PrivacyPolicy from './components/PrivacyPolicy'

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

