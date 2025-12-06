import { motion } from 'framer-motion'
import { useState } from 'react'

// Timeline images
import timelineImg1 from '../assets/IMG_20220610_125357490_HDR_PORTRAIT.jpg'
import timelineImg2 from '../assets/IMG_20230917_191400957_HDR-EDIT.jpg'
import timelineImg3 from '../assets/IMG_20240611_162138568_HDR.jpg'
import heroImage from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'

const About = ({ language = 'en' }) => {
  const [activeYear, setActiveYear] = useState(null)

  const content = {
    en: {
      hero: {
        title: 'ABOUT',
        subtitle: 'ELIO',
        tagline: 'FROM ABBIATEGRASSO TO THE WORLD',
        description: 'A journey of transformation, innovation, and impact across 6 countries, 47 years, and multiple industries.'
      },
      story: {
        title: 'MY STORY',
        paragraphs: [
          'Born in Abbiategrasso, Milan in 1978, I grew up in a multicultural family that shaped my global perspective from an early age. My journey has taken me across Europe and beyond, building bridges between cultures, languages, and industries.',
          'From studying Public Administration at Sciences Po Grenoble to building educational platforms across Italy and Norway, each chapter of my life has been driven by a passion for learning, teaching, and empowering others.',
          'Today, I help entrepreneurs and businesses scale through education, multilingual marketing, and property management expertise. With 250+ properties managed, €150K+ in revenue, and coaching clients across 4 languages, I bridge cultures and industries to create extraordinary results.'
        ]
      },
      timeline: {
        title: 'MY JOURNEY',
        subtitle: 'From humble beginnings to international impact',
        events: [
          {
            year: '1978',
            title: 'BORN IN ABBIATEGRASSO',
            location: 'Milan, Italy',
            description: 'Born into a multicultural family in the heart of Lombardy. Early exposure to different cultures and languages shaped my worldview.',
            image: timelineImg1,
            category: 'ORIGINS'
          },
          {
            year: '1996',
            title: 'HIGH SCHOOL GRADUATION',
            location: 'Milan, Italy',
            description: 'Completed studies with a focus on humanities and languages, developing a passion for communication and cultural exchange.',
            category: 'EDUCATION'
          },
          {
            year: '2000',
            title: 'SCIENCES PO GRENOBLE',
            location: 'Grenoble, France',
            description: 'Studied Public Administration at one of France\'s most prestigious institutions, mastering French and European policy.',
            image: timelineImg2,
            category: 'EDUCATION'
          },
          {
            year: '2005',
            title: 'FIRST TEACHING ROLE',
            location: 'Italy',
            description: 'Began my career in education, discovering my passion for helping others unlock their potential through learning.',
            category: 'CAREER'
          },
          {
            year: '2010',
            title: 'MOVED TO NORWAY',
            location: 'Norway',
            description: 'Relocated to Norway, expanding my international experience and building educational programs in Scandinavian markets.',
            image: timelineImg3,
            category: 'INTERNATIONAL'
          },
          {
            year: '2015',
            title: 'PROPERTY MANAGEMENT BUSINESS',
            location: 'Italy & Norway',
            description: 'Launched property management company, eventually managing 250+ properties and becoming a Top 3 Airbnb host in Italy.',
            category: 'ENTREPRENEURSHIP'
          },
          {
            year: '2018',
            title: 'MULTILINGUAL MARKETING',
            location: 'Europe',
            description: 'Expanded into digital marketing, SEO, and copywriting across multiple European languages and markets.',
            category: 'BUSINESS'
          },
          {
            year: '2020',
            title: 'MONDELIO NON-PROFIT',
            location: 'International',
            description: 'Founded Mondelio community with 300+ members, creating a platform for education and cultural exchange.',
            category: 'IMPACT'
          },
          {
            year: '2022',
            title: 'PUBLISHED FIRST BOOKS',
            location: 'International',
            description: 'Released "Imagine Your Dream" series, sharing knowledge on digital success and personal development.',
            category: 'AUTHOR'
          },
          {
            year: '2025',
            title: 'INTERNATIONAL SPEAKER',
            location: 'Global',
            description: 'Speaking at conferences and events worldwide, sharing insights on education, entrepreneurship, and multicultural success.',
            category: 'SPEAKER'
          }
        ]
      },
      highlights: {
        title: 'KEY ACHIEVEMENTS',
        items: [
          { number: '250+', label: 'PROPERTIES MANAGED', description: 'Top 3 Airbnb host in Italy' },
          { number: '€150K+', label: 'ANNUAL REVENUE', description: 'Property management success' },
          { number: '6', label: 'COUNTRIES', description: 'International experience' },
          { number: '4', label: 'LANGUAGES', description: 'Multilingual coaching' },
          { number: '47', label: 'YEARS', description: 'Life experience' },
          { number: '300+', label: 'MEMBERS', description: 'Mondelio community' }
        ]
      }
    },
    it: {
      hero: {
        title: 'CHI SONO',
        subtitle: 'ELIO',
        tagline: 'DA ABBIATEGRASSO AL MONDO',
        description: 'Un viaggio di trasformazione, innovazione e impatto attraverso 6 paesi, 47 anni e molteplici settori.'
      },
      story: {
        title: 'LA MIA STORIA',
        paragraphs: [
          'Nato ad Abbiategrasso, Milano nel 1978, sono cresciuto in una famiglia multiculturale che ha plasmato la mia prospettiva globale fin dalla tenera età. Il mio viaggio mi ha portato attraverso l\'Europa e oltre, costruendo ponti tra culture, lingue e settori.',
          'Dallo studio di Pubblica Amministrazione a Sciences Po Grenoble alla costruzione di piattaforme educative in Italia e Norvegia, ogni capitolo della mia vita è stato guidato dalla passione per l\'apprendimento, l\'insegnamento e l\'empowerment degli altri.',
          'Oggi aiuto imprenditori e aziende a crescere attraverso educazione, marketing multilingue ed esperienza nella gestione immobiliare. Con oltre 250 proprietà gestite, €150K+ di fatturato e clienti di coaching in 4 lingue, collego culture e settori per creare risultati straordinari.'
        ]
      },
      timeline: {
        title: 'IL MIO PERCORSO',
        subtitle: 'Dalle umili origini all\'impatto internazionale',
        events: [
          {
            year: '1978',
            title: 'NATO AD ABBIATEGRASSO',
            location: 'Milano, Italia',
            description: 'Nato in una famiglia multiculturale nel cuore della Lombardia. L\'esposizione precoce a culture e lingue diverse ha plasmato la mia visione del mondo.',
            image: timelineImg1,
            category: 'ORIGINI'
          },
          {
            year: '1996',
            title: 'DIPLOMA DI MATURITÀ',
            location: 'Milano, Italia',
            description: 'Completati gli studi con focus su materie umanistiche e lingue, sviluppando una passione per la comunicazione e lo scambio culturale.',
            category: 'EDUCAZIONE'
          },
          {
            year: '2000',
            title: 'SCIENCES PO GRENOBLE',
            location: 'Grenoble, Francia',
            description: 'Studiato Pubblica Amministrazione in una delle istituzioni più prestigiose di Francia, padroneggiando il francese e le politiche europee.',
            image: timelineImg2,
            category: 'EDUCAZIONE'
          },
          {
            year: '2005',
            title: 'PRIMO RUOLO DI INSEGNAMENTO',
            location: 'Italia',
            description: 'Iniziata la carriera nell\'educazione, scoprendo la passione per aiutare gli altri a sbloccare il loro potenziale attraverso l\'apprendimento.',
            category: 'CARRIERA'
          },
          {
            year: '2010',
            title: 'TRASFERIMENTO IN NORVEGIA',
            location: 'Norvegia',
            description: 'Trasferito in Norvegia, espandendo l\'esperienza internazionale e costruendo programmi educativi nei mercati scandinavi.',
            image: timelineImg3,
            category: 'INTERNAZIONALE'
          },
          {
            year: '2015',
            title: 'GESTIONE IMMOBILIARE',
            location: 'Italia e Norvegia',
            description: 'Lanciata azienda di gestione immobiliare, arrivando a gestire oltre 250 proprietà e diventando Top 3 host Airbnb in Italia.',
            category: 'IMPRENDITORIA'
          },
          {
            year: '2018',
            title: 'MARKETING MULTILINGUE',
            location: 'Europa',
            description: 'Espansione nel marketing digitale, SEO e copywriting attraverso molteplici lingue e mercati europei.',
            category: 'BUSINESS'
          },
          {
            year: '2020',
            title: 'MONDELIO NON-PROFIT',
            location: 'Internazionale',
            description: 'Fondata la comunità Mondelio con oltre 300 membri, creando una piattaforma per educazione e scambio culturale.',
            category: 'IMPATTO'
          },
          {
            year: '2022',
            title: 'PRIMI LIBRI PUBBLICATI',
            location: 'Internazionale',
            description: 'Pubblicata la serie "Imagine Your Dream", condividendo conoscenze sul successo digitale e sviluppo personale.',
            category: 'AUTORE'
          },
          {
            year: '2025',
            title: 'SPEAKER INTERNAZIONALE',
            location: 'Globale',
            description: 'Speaker a conferenze ed eventi in tutto il mondo, condividendo insights su educazione, imprenditoria e successo multiculturale.',
            category: 'SPEAKER'
          }
        ]
      },
      highlights: {
        title: 'RISULTATI CHIAVE',
        items: [
          { number: '250+', label: 'PROPRIETÀ GESTITE', description: 'Top 3 host Airbnb in Italia' },
          { number: '€150K+', label: 'FATTURATO ANNUO', description: 'Successo gestione immobiliare' },
          { number: '6', label: 'PAESI', description: 'Esperienza internazionale' },
          { number: '4', label: 'LINGUE', description: 'Coaching multilingue' },
          { number: '47', label: 'ANNI', description: 'Esperienza di vita' },
          { number: '300+', label: 'MEMBRI', description: 'Comunità Mondelio' }
        ]
      }
    },
    no: {
      hero: {
        title: 'OM MEG',
        subtitle: 'ELIO',
        tagline: 'FRA ABBIATEGRASSO TIL VERDEN',
        description: 'En reise av transformasjon, innovasjon og påvirkning på tvers av 6 land, 47 år og flere bransjer.'
      },
      story: {
        title: 'MIN HISTORIE',
        paragraphs: [
          'Født i Abbiategrasso, Milano i 1978, vokste jeg opp i en flerkulturell familie som formet mitt globale perspektiv fra tidlig alder. Min reise har tatt meg over Europa og utover, og bygget broer mellom kulturer, språk og bransjer.',
          'Fra å studere offentlig administrasjon ved Sciences Po Grenoble til å bygge utdanningsplattformer i Italia og Norge, har hvert kapittel av livet mitt vært drevet av en lidenskap for læring, undervisning og myndiggjøring av andre.',
          'I dag hjelper jeg gründere og bedrifter med å vokse gjennom utdanning, flerspråklig markedsføring og eiendomsforvaltningsekspertise. Med 250+ eiendommer forvaltet, €150K+ i inntekt og coachingklienter på tvers av 4 språk, bygger jeg bro mellom kulturer og bransjer for å skape ekstraordinære resultater.'
        ]
      },
      timeline: {
        title: 'MIN REISE',
        subtitle: 'Fra ydmyke begynnelser til internasjonal påvirkning',
        events: [
          {
            year: '1978',
            title: 'FØDT I ABBIATEGRASSO',
            location: 'Milano, Italia',
            description: 'Født inn i en flerkulturell familie i hjertet av Lombardia. Tidlig eksponering for forskjellige kulturer og språk formet mitt verdensbilde.',
            image: timelineImg1,
            category: 'OPPRINNELSE'
          },
          {
            year: '1996',
            title: 'VIDEREGÅENDE EKSAMEN',
            location: 'Milano, Italia',
            description: 'Fullført studier med fokus på humaniora og språk, utviklet en lidenskap for kommunikasjon og kulturell utveksling.',
            category: 'UTDANNING'
          },
          {
            year: '2000',
            title: 'SCIENCES PO GRENOBLE',
            location: 'Grenoble, Frankrike',
            description: 'Studerte offentlig administrasjon ved en av Frankrikes mest prestisjefylte institusjoner, mestret fransk og europeisk politikk.',
            image: timelineImg2,
            category: 'UTDANNING'
          },
          {
            year: '2005',
            title: 'FØRSTE UNDERVISNINGSROLLE',
            location: 'Italia',
            description: 'Begynte karrieren innen utdanning, oppdaget min lidenskap for å hjelpe andre med å låse opp sitt potensial gjennom læring.',
            category: 'KARRIERE'
          },
          {
            year: '2010',
            title: 'FLYTTET TIL NORGE',
            location: 'Norge',
            description: 'Flyttet til Norge, utvidet min internasjonale erfaring og bygget utdanningsprogrammer i skandinaviske markeder.',
            image: timelineImg3,
            category: 'INTERNASJONAL'
          },
          {
            year: '2015',
            title: 'EIENDOMSFORVALTNING',
            location: 'Italia og Norge',
            description: 'Lanserte eiendomsforvaltningsselskap, forvalter til slutt 250+ eiendommer og ble en topp 3 Airbnb-vert i Italia.',
            category: 'GRÜNDERSKAP'
          },
          {
            year: '2018',
            title: 'FLERSPRÅKLIG MARKEDSFØRING',
            location: 'Europa',
            description: 'Utvidet til digital markedsføring, SEO og copywriting på tvers av flere europeiske språk og markeder.',
            category: 'BUSINESS'
          },
          {
            year: '2020',
            title: 'MONDELIO IDEELL',
            location: 'Internasjonal',
            description: 'Grunnla Mondelio-fellesskapet med 300+ medlemmer, skapte en plattform for utdanning og kulturell utveksling.',
            category: 'PÅVIRKNING'
          },
          {
            year: '2022',
            title: 'PUBLISERTE FØRSTE BØKER',
            location: 'Internasjonal',
            description: 'Ga ut "Imagine Your Dream"-serien, delte kunnskap om digital suksess og personlig utvikling.',
            category: 'FORFATTER'
          },
          {
            year: '2025',
            title: 'INTERNASJONAL FOREDRAGSHOLDER',
            location: 'Global',
            description: 'Holder foredrag på konferanser og arrangementer over hele verden, deler innsikt om utdanning, gründerskap og flerkulturell suksess.',
            category: 'FOREDRAGSHOLDER'
          }
        ]
      },
      highlights: {
        title: 'NØKKELPRESTASJONER',
        items: [
          { number: '250+', label: 'EIENDOMMER FORVALTET', description: 'Topp 3 Airbnb-vert i Italia' },
          { number: '€150K+', label: 'ÅRLIG INNTEKT', description: 'Eiendomsforvaltningssuksess' },
          { number: '6', label: 'LAND', description: 'Internasjonal erfaring' },
          { number: '4', label: 'SPRÅK', description: 'Flerspråklig coaching' },
          { number: '47', label: 'ÅR', description: 'Livserfaring' },
          { number: '300+', label: 'MEDLEMMER', description: 'Mondelio-fellesskap' }
        ]
      }
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[15vw] md:text-[20vw] font-black text-yellow-400/10 leading-none"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            {t.hero.subtitle}
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {t.hero.title}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6"
          >
            {t.hero.tagline}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            {t.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-yellow-400 mb-16"
          >
            {t.story.title}
          </motion.h2>

          <div className="space-y-8">
            {t.story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section - Diary of a CEO Style */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-yellow-400 mb-4">
              {t.timeline.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">{t.timeline.subtitle}</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400/20"></div>

            {/* Timeline Events */}
            <div className="space-y-16">
              {t.timeline.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-16`}
                  onMouseEnter={() => setActiveYear(event.year)}
                  onMouseLeave={() => setActiveYear(null)}
                >
                  {/* Year Marker */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0">
                    <div
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-black text-sm transition-all duration-300 ${
                        activeYear === event.year
                          ? 'bg-yellow-400 border-yellow-400 text-black scale-125'
                          : 'bg-black border-yellow-400 text-yellow-400'
                      }`}
                    >
                      {event.year.slice(-2)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-24 md:ml-0`}>
                    <div
                      className={`p-6 border-2 rounded-lg transition-all duration-300 ${
                        activeYear === event.year
                          ? 'border-yellow-400 bg-yellow-400/5'
                          : 'border-white/10 hover:border-yellow-400/50'
                      }`}
                    >
                      <div className="text-xs font-bold text-yellow-400 mb-2">{event.category}</div>
                      <div className="text-4xl font-black mb-2">{event.year}</div>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <p className="text-sm text-yellow-400 mb-3">📍 {event.location}</p>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Image (if available) */}
                  {event.image && (
                    <div className="w-full md:w-5/12 mt-4 md:mt-0">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-center mb-20 text-yellow-400"
          >
            {t.highlights.title}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {t.highlights.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-lg group"
              >
                <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform">
                  {item.number}
                </div>
                <div className="text-sm md:text-base font-bold mb-2">
                  {item.label}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
