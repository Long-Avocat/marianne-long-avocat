import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Contact section */}
          <div className="text-light/80">
            <div className="space-y-2 text-sm">
              <p className="font-medium text-light">Marianne LONG</p>
              <p>Avocate au barreau de Paris</p>
              <p>
                <a
                  href="mailto:marianne@long-avocat.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  marianne@long-avocat.com
                </a>
              </p>
              <p>4 rue de Rome - 75008 Paris</p>
            </div>
          </div>

          {/* Right side - LinkedIn */}
          <a
              href="https://www.linkedin.com/in/mariannelong/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-light/80 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn - Marianne Long"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm">LinkedIn</span>
            </a>
        </div>

        {/* Bottom section - Legal mentions */}
        <div className="border-t border-light/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-light/80 text-sm">
              <p>© {currentYear} Marianne Long - Avocat IT / Data / IA / Cybersécurité</p>
            </div>
            <div className="flex gap-6">
              <Link
                to="/mentions-legales"
                className="text-light/80 hover:text-primary transition-colors duration-300 underline text-sm"
              >
                Mentions légales
              </Link>
              <Link
                to="/politique-de-confidentialite"
                className="text-light/80 hover:text-primary transition-colors duration-300 underline text-sm"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

