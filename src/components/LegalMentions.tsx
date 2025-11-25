import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LegalMentions: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-light to-primary/10 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-dark hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            <span>Retour</span>
          </button>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
              Mentions <span className="text-primary">Légales</span>
            </h1>

            <div className="space-y-8 text-dark/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">Éditeur du site</h2>
                <p className="mb-4">
                  Le site "https://long-avocat.com/" (le "Site") est édité et appartient à <strong>Marianne LONG</strong>, Avocate au barreau de Paris
                </p>
                <p className="mb-2">
                  <strong>Cabinet ML Avocat - SELASU</strong> au capital social de 1 euros
                </p>
                <p className="mb-2">
                  Siège social : 4 rue de Rome - 75008 Paris
                </p>
                <p className="mb-2">
                  SIRET : (à compléter)
                </p>
                <p className="mb-2">
                  RCS : (à compléter)
                </p>
                <p className="mb-2">
                  Code APE : 6910Z
                </p>
                <p className="mb-4">
                  Adresse email : <a 
                    href="mailto:marianne@long-avocat.fr"
                    className="text-primary hover:underline"
                  >
                    marianne@long-avocat.fr
                  </a>
                </p>
                <p>
                  Le directeur de la publication est <strong>Marianne Long</strong>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">Hébergeur du site</h2>
                <p className="mb-4">
                  Le Site est hébergé par la société <strong>GitHub</strong> (<a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://github.com/
                  </a>)
                </p>
                <p className="mb-2">
                  Siège social : GitHub BV Prins Bernhardplein 200, Amsterdam 1097JB Pays-Bas et GitHub, Inc. 88 Colin P. Kelly Jr. St. San Francisco, CA 94107 États-Unis
                </p>
                <p>
                  Formulaire de contact: <a 
                    href="https://enterprise.github.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://enterprise.github.com/contact
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark mb-4">Conditions générales d'utilisation</h2>
                
                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Accès</h3>
                <p className="mb-4">
                  Vous pouvez accéder librement et gratuitement au Site sans inscription ni création de compte préalable.
                </p>
                <p className="mb-4">
                  Nous déclinons toute responsabilité sur l'utilisation du Site et de ses contenus, et nous ne saurions être tenus responsables en cas d'erreur, d'interruption, de dysfonctionnement, de perte de données, de saturation du réseau internet, de défaillance de tout matériel de réception ou des lignes de communication, ou de tout autre évènement impactant ou résultant de l'utilisation du présent Site.
                </p>
                <p className="mb-4">
                  Vous vous interdisez tout acte de nature à altérer ou perturber, de quelque manière que ce soit, le fonctionnement normal du site. De même, vous vous interdisez toute utilisation détournée des informations nominatives présentes sur le Site.
                </p>

                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Données à caractère personnel</h3>
                <p className="mb-4">
                  Soucieux de protéger la vie privée de nos utilisateurs et dans la mesure où nous sommes susceptibles de traiter vos données à caractère personnel lorsque vous naviguez sur notre Site, nous nous engageons à respecter la règlementation applicable en la matière et à nous conformer à notre politique de protection des données accessible en bas de page.
                </p>

                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Politique cookie</h3>
                <p className="mb-4">
                  Ce Site ne dépose que des cookies essentiels à son fonctionnement, qui ne nécessitent pas de consentement.
                </p>

                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Propriété intellectuelle</h3>
                <p className="mb-4">
                  L'ensemble des éléments présents sur le Site, incluant notamment les textes, images, graphismes, logos, icônes et logiciels, sont protégés par les lois en vigueur relatives à la propriété intellectuelle.
                </p>
                <p className="mb-4">
                  Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, de ces contenus, par quelque moyen que ce soit, est strictement interdite sans l'autorisation écrite préalable de ML Avocat.
                </p>
                <p className="mb-4">
                  Toute utilisation non autorisée du Site ou de ses éléments constitue une violation des droits de propriété intellectuelle et pourra donner lieu à des poursuites, conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>

                <h3 className="text-xl font-semibold text-dark mb-3 mt-6">Droit applicable et limitation de responsabilité</h3>
                <p className="mb-4">
                  Les présentes mentions légales et l'ensemble de notre Site relèvent du droit français et toute difficulté sera tranchée par le ressort de la juridiction des tribunaux de Paris.
                </p>
                <p className="mb-4">
                  Marianne LONG s'efforce de fournir des informations à jour et exactes, mais ne saurait être tenue responsable des erreurs, omissions ou interruptions éventuelles du Site. Marianne LONG ne peut être tenue responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, notamment en cas de bug, d'interruption, de virus ou de pertes de données.
                </p>
                <p>
                  Les informations fournies sur le Site sont données à titre indicatif et ne constituent pas un conseil juridique. L'utilisation du Site ne crée en aucun cas une relation d'avocat à client.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LegalMentions

