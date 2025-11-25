import React from 'react'
import { motion } from 'framer-motion'
import { Lock, FileText, TrendingUp, Bot, Shield, Database } from 'lucide-react'

interface Expertise {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const expertiseAreas: Expertise[] = [
  {
    title: 'Contrats informatiques',
    description: 'Structuration, rédaction et négociation de tous types de contrats IT, simples ou complexes (SaaS, licences, maintenance, infogérance, API, Cloud, etc.). Sécurisation complète, du cadrage au déploiement.',
    icon: FileText,
  },
  {
    title: 'Données personnelles & Cybersécurité',
    description: 'Accompagnement sur l’ensemble des enjeux RGPD : mise en conformité, gestion des transferts internationaux, documentation, audits. Assistance lors des contrôles CNIL. Conseils sur les obligations DORA et NIS2 et intégration des exigences de sécurité dans vos projets.',
    icon: Lock,
  },
  {
    title: 'Intelligence Artificielle',
    description: 'Accompagnement complet à la conformité AI Act : qualification des systèmes, analyse des obligations, documentation, gestion des risques et sécurisation juridique de vos projets IA.',
    icon: Bot,
  },
  {
    title: 'Propriété intellectuelle',
    description: 'Protection contractuelle de vos actifs immatériels (logiciels, bases de données, savoir-faire). Encadrement des licences, cessions de droits et usages dans vos contrats.',
    icon: Database,
  },
  {
    title: 'E-Commerce & Réglementations Digitales',
    description: 'Mise en conformité de vos plateformes : DSA, DMA, SREN, obligations informationnelles. Audit complet de vos sites (mentions légales, CGU/CGV, cookies, parcours utilisateur) et structuration de votre documentation juridique en ligne.',
    icon: Shield,
  },
  {
    title: 'Due Diligence IT & Data',
    description: 'Audit d’actifs immatériels dans le cadre d’opérations M&A : évaluation des risques RGPD, cybersécurité et contrats IT, analyse des dépendances critiques, négociations des TSA et recommandations opérationnelles.',
    icon: TrendingUp,
  },
]

const ExpertiseGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-light">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Domaines d'<span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Expertise approfondie dans tous les domaines du droit numérique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((expertise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl overflow-hidden cursor-default"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-4">
                  <expertise.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {expertise.title}
                </h3>
                <p className="text-neutral leading-relaxed">{expertise.description}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseGrid

