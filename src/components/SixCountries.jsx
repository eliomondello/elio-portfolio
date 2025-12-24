import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { BookOpen, Globe, Heart, Users, MapPin, Sparkles } from 'lucide-react'

// Import images
import bookHeroImg from '../assets/IMG_20250706_154203787_HDR_PORTRAIT.jpg'
import journeyImg1 from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
import journeyImg2 from '../assets/IMG_20250706_154257593_HDR_PORTRAIT.jpg'

const SixCountries = ({ language = 'en' }) => {
  const content = {
    en: {
      hero: {
        title: 'SIX COUNTRIES, ONE STORY',
        subtitle: 'A MULTICULTURAL MEMOIR',
        description: 'A powerful journey through identity, family legacy, and belonging across six countries.',
        status: 'COMING SOON'
      },
      intro: {
        title: 'A STORY OF',
        subtitle: 'Identity, Immigration & Belonging',
        text: 'Six Countries, One Story is a deeply personal memoir that explores the complexities of multicultural identity, generational patterns, and the universal search for home. Through intimate storytelling, this book weaves together experiences across Italy, Norway, France, Spain, the United Kingdom, and beyond—revealing how our roots shape us, even as we forge new paths in foreign lands.'
      },
      countries: {
        title: 'THE JOURNEY',
        subtitle: 'Six Countries That Shaped One Life',
        items: [
          {
            icon: '🇮🇹',
            country: 'Italy',
            role: 'Roots & Heritage',
            desc: 'Born in Abbiategrasso, where family traditions and Italian culture formed the foundation of identity.'
          },
          {
            icon: '🇳🇴',
            country: 'Norway',
            role: 'New Home & Growth',
            desc: 'Building a life, family, and businesses in the land of fjords—finding belonging in a new culture.'
          },
          {
            icon: '🇫🇷',
            country: 'France',
            role: 'Education & Transformation',
            desc: 'Erasmus exchange in Valenciennes—discovering European identity and cross-cultural connections.'
          },
          {
            icon: '🇬🇧',
            country: 'United Kingdom',
            role: 'Professional Development',
            desc: 'Speaking engagements and business opportunities in London—expanding horizons and networks.'
          },
          {
            icon: '🇪🇸',
            country: 'Spain',
            role: 'Cultural Exploration',
            desc: 'Discovering Mediterranean connections and expanding the European entrepreneurial journey.'
          },
          {
            icon: '🌍',
            country: 'Europe',
            role: 'Unified Identity',
            desc: 'Embracing a pan-European identity while honoring individual cultural roots and family heritage.'
          }
        ]
      },
      themes: {
        title: 'WHAT THIS BOOK EXPLORES',
        items: [
          {
            icon: Globe,
            title: 'Multicultural Identity',
            desc: 'Navigating multiple cultures, languages, and identities—finding strength in diversity and complexity.'
          },
          {
            icon: Heart,
            title: 'Family Legacy & Patterns',
            desc: 'Understanding how generational experiences, trauma, and triumphs shape who we become across borders.'
          },
          {
            icon: Users,
            title: 'Immigration & Belonging',
            desc: 'The emotional journey of leaving home, adapting to new countries, and building community in foreign lands.'
          },
          {
            icon: MapPin,
            title: 'The Search for Home',
            desc: 'What does "home" mean when you\'ve lived in six countries? Can you belong everywhere and nowhere at once?'
          },
          {
            icon: Sparkles,
            title: 'Personal Transformation',
            desc: 'How crossing borders—physical, cultural, and emotional—transforms us into who we\'re meant to be.'
          },
          {
            icon: BookOpen,
            title: 'Lessons for Immigrants',
            desc: 'Practical wisdom and emotional insights for anyone navigating life between cultures and countries.'
          }
        ]
      },
      preview: {
        title: 'INSIDE THE MEMOIR',
        subtitle: 'Stories That Will Resonate',
        chapters: [
          {
            title: 'Roots in Abbiategrasso',
            desc: 'Growing up in a small Italian town—family, traditions, and the seeds of wanderlust.'
          },
          {
            title: 'The Erasmus Awakening',
            desc: 'Discovering Europe, identity, and independence through student exchange in France.'
          },
          {
            title: 'Norwegian Winter, Italian Heart',
            desc: 'The challenges and triumphs of building a life in Norway while honoring Italian heritage.'
          },
          {
            title: 'Language as Bridge',
            desc: 'How learning Norwegian, French, and English opened doors—and transformed identity.'
          },
          {
            title: 'Entrepreneurship Across Borders',
            desc: 'Building businesses in multiple countries—navigating regulations, cultures, and opportunities.'
          },
          {
            title: 'Family Across Continents',
            desc: 'Maintaining connections with Italian roots while raising a family in Scandinavian culture.'
          },
          {
            title: 'The Meaning of Home',
            desc: 'Reflections on belonging, identity, and what it means to be a citizen of the world.'
          }
        ]
      },
      audience: {
        title: 'WHO THIS BOOK IS FOR',
        items: [
          'Immigrants and expats navigating life between cultures',
          'Anyone exploring their multicultural identity and heritage',
          'Entrepreneurs building businesses across borders',
          'People seeking to understand generational patterns and family legacy',
          'Readers interested in European integration and cross-cultural experiences',
          'Anyone searching for the meaning of "home" and belonging'
        ]
      },
      waitlist: {
        title: 'BE THE FIRST TO READ IT',
        subtitle: 'Join the Waitlist for Exclusive Updates',
        description: 'Get notified when Six Countries, One Story is published. Receive exclusive updates, early access, and behind-the-scenes insights into the writing journey.',
        button: 'JOIN WAITLIST',
        link: '/contact'
      },
      cta: {
        title: 'EXPLORE MORE BOOKS',
        subtitle: 'Discover other published works on personal development and digital marketing',
        button: 'VIEW ALL BOOKS'
      }
    },
    it: {
      hero: {
        title: 'SEI PAESI, UNA STORIA',
        subtitle: 'UN MEMOIR MULTICULTURALE',
        description: 'Un viaggio potente attraverso identità, eredità familiare e appartenenza in sei paesi.',
        status: 'IN ARRIVO'
      },
      intro: {
        title: 'UNA STORIA DI',
        subtitle: 'Identità, Immigrazione e Appartenenza',
        text: 'Sei Paesi, Una Storia è un memoir profondamente personale che esplora le complessità dell\'identità multiculturale, i modelli generazionali e la ricerca universale di casa. Attraverso una narrazione intima, questo libro intreccia esperienze in Italia, Norvegia, Francia, Spagna, Regno Unito e oltre—rivelando come le nostre radici ci plasmano, anche mentre forgiamo nuovi percorsi in terre straniere.'
      },
      countries: {
        title: 'IL VIAGGIO',
        subtitle: 'Sei Paesi Che Hanno Plasmato Una Vita',
        items: [
          {
            icon: '🇮🇹',
            country: 'Italia',
            role: 'Radici ed Eredità',
            desc: 'Nato ad Abbiategrasso, dove le tradizioni familiari e la cultura italiana hanno formato le fondamenta dell\'identità.'
          },
          {
            icon: '🇳🇴',
            country: 'Norvegia',
            role: 'Nuova Casa e Crescita',
            desc: 'Costruire una vita, una famiglia e imprese nella terra dei fiordi—trovare appartenenza in una nuova cultura.'
          },
          {
            icon: '🇫🇷',
            country: 'Francia',
            role: 'Educazione e Trasformazione',
            desc: 'Scambio Erasmus a Valenciennes—scoprire l\'identità europea e connessioni interculturali.'
          },
          {
            icon: '🇬🇧',
            country: 'Regno Unito',
            role: 'Sviluppo Professionale',
            desc: 'Conferenze e opportunità di business a Londra—espandere orizzonti e reti.'
          },
          {
            icon: '🇪🇸',
            country: 'Spagna',
            role: 'Esplorazione Culturale',
            desc: 'Scoprire connessioni mediterranee ed espandere il viaggio imprenditoriale europeo.'
          },
          {
            icon: '🌍',
            country: 'Europa',
            role: 'Identità Unificata',
            desc: 'Abbracciare un\'identità pan-europea onorando le radici culturali individuali e l\'eredità familiare.'
          }
        ]
      },
      themes: {
        title: 'COSA ESPLORA QUESTO LIBRO',
        items: [
          {
            icon: Globe,
            title: 'Identità Multiculturale',
            desc: 'Navigare culture, lingue e identità multiple—trovare forza nella diversità e complessità.'
          },
          {
            icon: Heart,
            title: 'Eredità e Schemi Familiari',
            desc: 'Comprendere come esperienze generazionali, traumi e trionfi plasmano chi diventiamo oltre i confini.'
          },
          {
            icon: Users,
            title: 'Immigrazione e Appartenenza',
            desc: 'Il viaggio emotivo di lasciare casa, adattarsi a nuovi paesi e costruire comunità in terre straniere.'
          },
          {
            icon: MapPin,
            title: 'La Ricerca di Casa',
            desc: 'Cosa significa "casa" quando hai vissuto in sei paesi? Puoi appartenere ovunque e da nessuna parte allo stesso tempo?'
          },
          {
            icon: Sparkles,
            title: 'Trasformazione Personale',
            desc: 'Come attraversare confini—fisici, culturali ed emotivi—ci trasforma in chi siamo destinati a essere.'
          },
          {
            icon: BookOpen,
            title: 'Lezioni per Immigrati',
            desc: 'Saggezza pratica e intuizioni emotive per chiunque navighi la vita tra culture e paesi.'
          }
        ]
      },
      preview: {
        title: 'DENTRO IL MEMOIR',
        subtitle: 'Storie Che Risuoneranno',
        chapters: [
          {
            title: 'Radici ad Abbiategrasso',
            desc: 'Crescere in una piccola città italiana—famiglia, tradizioni e i semi della voglia di viaggiare.'
          },
          {
            title: 'Il Risveglio Erasmus',
            desc: 'Scoprire Europa, identità e indipendenza attraverso lo scambio studentesco in Francia.'
          },
          {
            title: 'Inverno Norvegese, Cuore Italiano',
            desc: 'Le sfide e i trionfi di costruire una vita in Norvegia onorando l\'eredità italiana.'
          },
          {
            title: 'La Lingua come Ponte',
            desc: 'Come imparare norvegese, francese e inglese ha aperto porte—e trasformato l\'identità.'
          },
          {
            title: 'Imprenditoria Oltre i Confini',
            desc: 'Costruire imprese in più paesi—navigare regolamenti, culture e opportunità.'
          },
          {
            title: 'Famiglia Attraverso i Continenti',
            desc: 'Mantenere connessioni con le radici italiane crescendo una famiglia nella cultura scandinava.'
          },
          {
            title: 'Il Significato di Casa',
            desc: 'Riflessioni su appartenenza, identità e cosa significa essere un cittadino del mondo.'
          }
        ]
      },
      audience: {
        title: 'PER CHI È QUESTO LIBRO',
        items: [
          'Immigrati ed expat che navigano la vita tra culture',
          'Chiunque esplori la propria identità multiculturale ed eredità',
          'Imprenditori che costruiscono imprese oltre i confini',
          'Persone che cercano di comprendere schemi generazionali ed eredità familiare',
          'Lettori interessati all\'integrazione europea ed esperienze interculturali',
          'Chiunque cerchi il significato di "casa" e appartenenza'
        ]
      },
      waitlist: {
        title: 'SII IL PRIMO A LEGGERLO',
        subtitle: 'Iscriviti alla Lista d\'Attesa per Aggiornamenti Esclusivi',
        description: 'Ricevi notifiche quando Sei Paesi, Una Storia sarà pubblicato. Ricevi aggiornamenti esclusivi, accesso anticipato e approfondimenti dietro le quinte del viaggio di scrittura.',
        button: 'ISCRIVITI',
        link: '/contact'
      },
      cta: {
        title: 'ESPLORA ALTRI LIBRI',
        subtitle: 'Scopri altre opere pubblicate su sviluppo personale e marketing digitale',
        button: 'VEDI TUTTI I LIBRI'
      }
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={bookHeroImg} 
            alt="Six Countries One Story"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2 bg-yellow-500 text-black font-bold text-sm mb-8 animate-pulse">
            {t.hero.status}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-500 font-bold mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {t.hero.description}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-12 py-6">
              {t.waitlist.button}
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-bold text-sm mb-4">{t.intro.title}</p>
            <h2 className="text-4xl md:text-5xl font-black mb-8">{t.intro.subtitle}</h2>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            {t.intro.text}
          </p>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-bold text-sm mb-4">{t.countries.title}</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">{t.countries.subtitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.countries.items.map((item, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.country}</h3>
                <p className="text-yellow-500 font-bold text-sm mb-4">{item.role}</p>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">{t.themes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.themes.items.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-black p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300">
                  <Icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">{t.preview.title}</h2>
            <p className="text-xl text-yellow-500">{t.preview.subtitle}</p>
          </div>
          <div className="space-y-6">
            {t.preview.chapters.map((chapter, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-500 hover:bg-gray-800 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">{chapter.title}</h3>
                <p className="text-gray-400">{chapter.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">{t.audience.title}</h2>
          <ul className="space-y-4">
            {t.audience.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 text-2xl mr-4">✓</span>
                <span className="text-lg text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">{t.waitlist.title}</h2>
          <p className="text-xl text-yellow-500 mb-4">{t.waitlist.subtitle}</p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">{t.waitlist.description}</p>
          <Link to={t.waitlist.link}>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-12 py-6">
              {t.waitlist.button}
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">{t.cta.title}</h2>
          <p className="text-lg text-gray-400 mb-8">{t.cta.subtitle}</p>
          <Link to="/books">
            <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold px-8 py-6">
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SixCountries
