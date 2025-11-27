import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Zap, Target, Handshake } from 'lucide-react'

const ApproachSection: React.FC = () => {
  const differentiatingPoints = [
    {
      title: 'Vision 360°',
      description: 'Une double expérience côté client et côté prestataire pour comprendre finement vos enjeux business, techniques et organisationnels.',
      icon: Eye,
    },
    {
      title: 'Approche Pragmatique',
      description: 'Des solutions juridiques concrètes, applicables et adaptées aux contraintes réelles de vos équipes et de vos projets.',
      icon: Zap,
    },
    {
      title: 'Accompagnement Stratégique',
      description: 'Un conseil qui dépasse le juridique : optimiser vos projets, sécuriser vos innovations, et éclairer vos décisions clés.',
      icon: Target,
    },
    {
      title: 'Réactivité et disponibilité',
      description: 'Une avocate disponible, réactive et engagée, alignée sur le le rythme et les impératifs de vos projets.',
      icon: Handshake,
    },
  ]

  return (
    <section className="py-20 px-4 bg-dark text-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">

      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Votre avocate IT qui maîtrise les enjeux <span className="text-primary">juridiques et opérationnels</span>
            </h2>
            <p className="text-lg leading-relaxed text-light/90">
              Grâce à ma double expérience en cabinet et en entreprise, je maîtrise à la fois les exigences juridiques et les réalités du terrain. Je connais le fonctionnement des directions IT, Data et Sécurité, leurs contraintes, leurs priorités et leurs arbitrages quotidiens.
            </p>
            <p className="text-lg leading-relaxed text-light/90">
              Cette vision complète me permet de vous proposer des solutions pragmatiques, actionnables et alignées avec vos objectifs business.
            </p>
            <p className="text-lg leading-relaxed text-light/90">
              Mon rôle : être un véritable facilitateur, capable de sécuriser vos projets tout en accélérant leur mise en œuvre.
            </p>
          </motion.div>

          {/* Right Column - Differentiating Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {differentiatingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-light/10 backdrop-blur-sm rounded-xl p-6 border border-light/20 hover:bg-light/15 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <point.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-light mb-2">{point.title}</h3>
                    <p className="text-light/80">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-light/90 mb-6">
            Découvrez comment cette approche différenciante peut servir vos projets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discutons de vos besoins
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ApproachSection

