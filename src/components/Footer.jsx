import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = ({ language }) => {
  const content = {
    en: {
      tagline: "Education Specialist | Property Management Expert | Helping Businesses Scale",
      quickLinks: "Quick Links",
      connect: "Connect With Me",
      rights: "All rights reserved.",
      navItems: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' }
      ]
    },
    it: {
      tagline: "Specialista Educazione | Esperto Gestione Proprietà | Aiuto le Aziende a Crescere",
      quickLinks: "Link Rapidi",
      connect: "Connettiti Con Me",
      rights: "Tutti i diritti riservati.",
      navItems: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'Chi Sono' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/testimonials', label: 'Testimonianze' },
        { path: '/services', label: 'Servizi' },
        { path: '/contact', label: 'Contatti' }
      ]
    },
    no: {
      tagline: "Utdanningsspesialist | Eiendomsforvaltningsekspert | Hjelper Bedrifter å Vokse",
      quickLinks: "Hurtiglenker",
      connect: "Koble Til Med Meg",
      rights: "Alle rettigheter reservert.",
      navItems: [
        { path: '/', label: 'Hjem' },
        { path: '/about', label: 'Om Meg' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/testimonials', label: 'Anbefalinger' },
        { path: '/services', label: 'Tjenester' },
        { path: '/contact', label: 'Kontakt' }
      ]
    }
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eliomondello',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/eliomondelloanza/',
      icon: Instagram
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/eliomondelloanza/',
      icon: Facebook
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/eliomondello',
      icon: Twitter
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@eliomondello',
      icon: Youtube
    }
  ]

  const currentContent = content[language]

  return (
    <footer className="bg-black border-t border-yellow-400/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand Section */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-yellow-400">
              ELIO MONDELLO ANZÀ
            </h3>
            <p className="text-gray-400 text-sm">
              {currentContent.tagline}
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white text-center">
              {currentContent.connect}
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-7 h-7" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Elio Mondello Anzà. {currentContent.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

