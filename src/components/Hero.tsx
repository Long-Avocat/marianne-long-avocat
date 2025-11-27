import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import CalendlyWidget from './CalendlyWidget'

const Hero: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-light to-primary/10 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-dark leading-tight">
                Marianne <span className="text-primary">LONG</span>
              </h1>
              <p className="text-2xl md:text-3xl text-neutral mt-2 font-light">
                Avocat IT / Data / IA / Cybersécurité
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-dark/80 leading-relaxed space-y-4"
            >
              <p>
                <strong>Votre alliée pour sécuriser et accélérer vos projets IT</strong>
              </p>
              <p>
              Avocate en droit des nouvelles technologies depuis 2016, j’accompagne les entreprises dans la maîtrise juridique de leurs projets IT, data et innovation.</p>
              <p>Forte de plus de sept années en cabinets parisiens spécialisés (Lexing, Racine, Aramis), j’ai développé une forte expertise en négociation de contrats IT complexes, conformité réglementaire (RGPD, DORA, IA Act, NIS 2), déploiement de projets innovants, accompagnement lors de contrôles CNIL et protection des actifs immatériels.</p>
              <p>Pour comprendre pleinement les enjeux opérationnels et les arbitrages business, j’ai également exercé deux ans en entreprise, au plus proche des équipes IT, Data et sécurité. Cette double expérience cabinet / entreprise me permet aujourd’hui d’offrir un accompagnement pragmatique, efficace et orienté solutions, en parlant le même langage que vos équipes.</p>
              <p>Titulaire d’un Master 2 Droit du Numérique (Paris II – Assas) et d’un double diplôme en droit international (Université de Maastricht), j’interviens pour structurer, sécuriser et négocier vos projets digitaux, tout en assurant votre conformité aux réglementations technologiques émergentes.</p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => {
                  setShowCalendly(false)
                  setShowContactForm(true)
                }}
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Me contacter
              </button>
              <button
                onClick={() => {
                  setShowContactForm(false)
                  setShowCalendly(true)
                }}
                className="px-8 py-4 bg-dark text-light rounded-lg font-semibold hover:bg-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Prendre RDV
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
              
              {/* Logo Conceptuel */}
              <div className="relative z-10 text-center">
                <div className="inline-block p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl overflow-hidden">
                  <img 
                    src="/marianne-photo.jpg" 
                    alt="Marianne Long - Avocat IT / Data / IA / Cybersécurité"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modals */}
        {showContactForm && (
          <ContactForm onClose={() => setShowContactForm(false)} />
        )}
        {showCalendly && (
          <CalendlyWidget onClose={() => setShowCalendly(false)} />
        )}
      </div>
    </section>
  )
}

export default Hero

