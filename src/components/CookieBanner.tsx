import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    
    // Enable Google Analytics if consent is given
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (gaMeasurementId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
    
    // Disable Google Analytics if consent is rejected
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (gaMeasurementId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
  }

  const handleClose = () => {
    // Just close without saving preference (user can see it again on next visit)
    setIsVisible(false)
    // Set a temporary flag to hide for this session only
    sessionStorage.setItem('cookieBannerDismissed', 'true')
  }

  // Check session storage on mount
  useEffect(() => {
    const dismissed = sessionStorage.getItem('cookieBannerDismissed')
    if (dismissed === 'true') {
      setIsVisible(false)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-lg shadow-2xl border border-neutral/20 p-6 md:p-8 relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-neutral hover:text-dark transition-colors duration-300"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>

              {/* Content */}
              <div className="flex flex-col md:flex-row items-start gap-6 pr-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-semibold text-dark">
                    Utilisation des cookies
                  </h3>
                  <p className="text-sm text-dark/80 leading-relaxed">
                    Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
                    En cliquant sur "Accepter", vous consentez à l'utilisation de cookies à des fins d'analyse. 
                    Vous pouvez également les refuser ou consulter notre{' '}
                    <Link
                      to="/politique-de-confidentialite"
                      className="text-primary hover:text-primary/80 underline font-medium transition-colors duration-300"
                    >
                      politique de confidentialité
                    </Link>
                    {' '}pour plus d'informations.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0">
                  <button
                    onClick={handleReject}
                    className="px-6 py-3 bg-light border border-neutral/30 text-dark rounded-lg font-medium hover:bg-neutral/10 transition-all duration-300 text-sm whitespace-nowrap"
                  >
                    Refuser
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm whitespace-nowrap"
                  >
                    Accepter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner

