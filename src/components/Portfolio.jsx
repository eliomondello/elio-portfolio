import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Award, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Portfolio = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "PORTFOLIO",
        subtitle: "Proven Results Across Multiple Industries",
        description: "From digital marketing to education, explore the projects that showcase my expertise and the tangible results achieved for clients."
      },
      projects: [
        {
          title: "Digital Marketing & Content Creation",
          category: "Marketing & SEO",
          description: "Developed comprehensive digital strategies for 50+ businesses across multiple industries, focusing on content creation, SEO optimization, and WordPress development.",
          results: [
            "50+ businesses transformed digitally",
            "Content strategy and copywriting services",
            "SEO rankings improved dramatically",
            "Custom WordPress solutions delivered"
          ],
          metrics: {
            clients: "50+",
            industries: "10+",
            growth: "200%+",
            satisfaction: "98%"
          },
          image: "digital",
          technologies: ["Copywriting", "SEO/GEO", "WordPress", "Content Strategy", "Multilingual Content"]
        },
        {
          title: "Educational Leadership & Teaching",
          category: "Education & Training",
          description: "Extensive teaching experience across kindergartens, elementary schools, middle schools, and high schools in Italy and Norway. Specialized in multilingual education and AI integration.",
          results: [
            "15+ educational institutions served",
            "300+ students taught across all levels",
            "Multilingual teaching (Italian, English, Norwegian, French)",
            "AI integration in educational settings"
          ],
          metrics: {
            institutions: "15+",
            students: "300+",
            countries: "3",
            years: "14+"
          },
          image: "education",
          technologies: ["Multilingual Teaching", "AI Integration", "Curriculum Development", "Student Engagement"]
        },
        {
          title: "Property Management Success",
          category: "Business Management",
          description: "Built and managed 200+ short-term rental properties across Italy, achieving Top 3 national ranking on Airbnb platform according to Confederalberghi analysis.",
          results: [
            "€150k+ annual revenue generated",
            "Top 3 national ranking in Italy (Confederalberghi)",
            "200+ properties successfully managed",
            "Industry recognition as leading manager"
          ],
          metrics: {
            revenue: "€150k+",
            properties: "200+",
            ranking: "Top 3",
            years: "10+"
          },
          image: "property",
          technologies: ["Data Analytics", "Revenue Optimization", "Customer Service", "Market Analysis"]
        },
        {
          title: "Web Development & Digital Solutions",
          category: "Technical Development",
          description: "Created modern, responsive websites for local businesses and healthcare practices, delivering measurable growth in bookings and patient acquisition.",
          results: [
            "Pet sitting service: 200% increase in bookings",
            "Physiotherapy clinic: 40% increase in new patients",
            "Bilingual/multilingual website solutions",
            "AI-powered booking and appointment systems"
          ],
          metrics: {
            projects: "10+",
            languages: "4",
            avgGrowth: "+170%",
            satisfaction: "100%"
          },
          image: "webdev",
          technologies: ["WordPress", "Multilingual SEO", "Booking Systems", "AI Integration"]
        },
        {
          title: "Mondosol Coaching Platform",
          category: "AI Innovation",
          description: "Founded and developed Mondosol, an AI-powered multilingual coaching platform with 12 specialized virtual assistants serving clients in 4 languages.",
          results: [
            "12 AI virtual assistants created",
            "4 languages supported (EN, IT, NO, FR)",
            "Global client base established",
            "Innovative AI coaching methodology"
          ],
          metrics: {
            assistants: "12",
            languages: "4",
            clients: "50+",
            countries: "25+"
          },
          image: "mondosol",
          technologies: ["AI Development", "Multilingual NLP", "Coaching Methodology", "Platform Development"]
        }
      ]
    },
    it: {
      hero: {
        title: "PORTFOLIO",
        subtitle: "Risultati Comprovati in Molteplici Settori",
        description: "Dal marketing digitale all'educazione, esplora i progetti che mostrano la mia esperienza e i risultati tangibili ottenuti per i clienti."
      },
      projects: [
        {
          title: "Marketing Digitale e Creazione Contenuti",
          category: "Marketing e SEO",
          description: "Sviluppato strategie digitali complete per oltre 50 aziende in molteplici settori, concentrandosi su creazione contenuti, ottimizzazione SEO e sviluppo WordPress.",
          results: [
            "50+ aziende trasformate digitalmente",
            "Strategia contenuti e servizi di copywriting",
            "Posizionamento SEO migliorato drasticamente",
            "Soluzioni WordPress personalizzate consegnate"
          ],
          metrics: {
            clients: "50+",
            industries: "10+",
            growth: "200%+",
            satisfaction: "98%"
          },
          image: "digital",
          technologies: ["Copywriting", "SEO/GEO", "WordPress", "Strategia Contenuti", "Contenuti Multilingue"]
        },
        {
          title: "Leadership Educativa e Insegnamento",
          category: "Educazione e Formazione",
          description: "Vasta esperienza di insegnamento in asili, scuole elementari, medie e superiori in Italia e Norvegia. Specializzato in educazione multilingue e integrazione AI.",
          results: [
            "15+ istituzioni educative servite",
            "300+ studenti insegnati a tutti i livelli",
            "Insegnamento multilingue (italiano, inglese, norvegese, francese)",
            "Integrazione AI in contesti educativi"
          ],
          metrics: {
            institutions: "15+",
            students: "300+",
            countries: "3",
            years: "14+"
          },
          image: "education",
          technologies: ["Insegnamento Multilingue", "Integrazione AI", "Sviluppo Curriculum", "Coinvolgimento Studenti"]
        },
        {
          title: "Successo nella Gestione Immobiliare",
          category: "Gestione Aziendale",
          description: "Costruito e gestito oltre 200 proprietà in affitto breve in Italia, raggiungendo il Top 3 nazionale sulla piattaforma Airbnb secondo l'analisi di Confederalberghi.",
          results: [
            "€150k+ fatturato annuale generato",
            "Top 3 classifica nazionale in Italia (Confederalberghi)",
            "200+ proprietà gestite con successo",
            "Riconoscimento del settore come manager leader"
          ],
          metrics: {
            revenue: "€150k+",
            properties: "200+",
            ranking: "Top 3",
            years: "10+"
          },
          image: "property",
          technologies: ["Analisi Dati", "Ottimizzazione Ricavi", "Servizio Clienti", "Analisi Mercato"]
        },
        {
          title: "Sviluppo Web e Soluzioni Digitali",
          category: "Sviluppo Tecnico",
          description: "Creato siti web moderni e responsive per aziende locali e studi sanitari, fornendo crescita misurabile in prenotazioni e acquisizione pazienti.",
          results: [
            "Servizio pet sitting: aumento del 200% nelle prenotazioni",
            "Clinica fisioterapia: aumento del 40% nuovi pazienti",
            "Soluzioni siti web bilingue/multilingue",
            "Sistemi di prenotazione e appuntamenti con AI"
          ],
          metrics: {
            projects: "10+",
            languages: "4",
            avgGrowth: "+170%",
            satisfaction: "100%"
          },
          image: "webdev",
          technologies: ["WordPress", "SEO Multilingue", "Sistemi Prenotazione", "Integrazione AI"]
        },
        {
          title: "Piattaforma di Coaching Mondosol",
          category: "Innovazione AI",
          description: "Fondato e sviluppato Mondosol, una piattaforma di coaching multilingue potenziata dall'AI con 12 assistenti virtuali specializzati che servono clienti in 4 lingue.",
          results: [
            "12 assistenti virtuali AI creati",
            "4 lingue supportate (EN, IT, NO, FR)",
            "Base clienti globale stabilita",
            "Metodologia di coaching AI innovativa"
          ],
          metrics: {
            assistants: "12",
            languages: "4",
            clients: "50+",
            countries: "25+"
          },
          image: "mondosol",
          technologies: ["Sviluppo AI", "NLP Multilingue", "Metodologia Coaching", "Sviluppo Piattaforma"]
        }
      ]
    },
    no: {
      hero: {
        title: "PORTEFØLJE",
        subtitle: "Dokumenterte Resultater På Tvers av Flere Bransjer",
        description: "Fra digital markedsføring til utdanning, utforsk prosjektene som viser min ekspertise og de håndgripelige resultatene oppnådd for klienter."
      },
      projects: [
        {
          title: "Digital Markedsføring og Innholdsproduksjon",
          category: "Markedsføring og SEO",
          description: "Utviklet omfattende digitale strategier for over 50 bedrifter på tvers av flere bransjer, med fokus på innholdsproduksjon, SEO-optimalisering og WordPress-utvikling.",
          results: [
            "50+ bedrifter digitalt transformert",
            "Innholdsstrategi og copywriting-tjenester",
            "SEO-rangeringer dramatisk forbedret",
            "Tilpassede WordPress-løsninger levert"
          ],
          metrics: {
            clients: "50+",
            industries: "10+",
            growth: "200%+",
            satisfaction: "98%"
          },
          image: "digital",
          technologies: ["Copywriting", "SEO/GEO", "WordPress", "Innholdsstrategi", "Flerspråklig Innhold"]
        },
        {
          title: "Pedagogisk Ledelse og Undervisning",
          category: "Utdanning og Opplæring",
          description: "Omfattende undervisningserfaring på tvers av barnehager, barneskoler, ungdomsskoler og videregående skoler i Italia og Norge. Spesialisert i flerspråklig utdanning og AI-integrasjon.",
          results: [
            "15+ utdanningsinstitusjoner betjent",
            "300+ elever undervist på alle nivåer",
            "Flerspråklig undervisning (italiensk, engelsk, norsk, fransk)",
            "AI-integrasjon i utdanningsmiljøer"
          ],
          metrics: {
            institutions: "15+",
            students: "300+",
            countries: "3",
            years: "14+"
          },
          image: "education",
          technologies: ["Flerspråklig Undervisning", "AI-integrasjon", "Læreplansutvikling", "Elevengasjement"]
        },
        {
          title: "Eiendomsforvaltningssuksess",
          category: "Forretningsledelse",
          description: "Bygget og forvaltet over 200 korttidsutleieeiendommer i Italia, oppnådde Top 3 nasjonal rangering på Airbnb-plattformen ifølge Confederalberghi-analyse.",
          results: [
            "€150k+ årlig inntekt generert",
            "Top 3 nasjonal rangering i Italia (Confederalberghi)",
            "200+ eiendommer vellykket forvaltet",
            "Bransjeanerkjennelse som ledende forvalter"
          ],
          metrics: {
            revenue: "€150k+",
            properties: "200+",
            ranking: "Top 3",
            years: "10+"
          },
          image: "property",
          technologies: ["Dataanalyse", "Inntektsoptimalisering", "Kundeservice", "Markedsanalyse"]
        },
        {
          title: "Webutvikling og Digitale Løsninger",
          category: "Teknisk Utvikling",
          description: "Skapte moderne, responsive nettsteder for lokale bedrifter og helsepraksis, leverte målbar vekst i bookinger og pasientanskaffelse.",
          results: [
            "Dyrepassertjeneste: 200% økning i bookinger",
            "Fysioterapiklinikk: 40% økning i nye pasienter",
            "Tospråklige/flerspråklige nettstedsløsninger",
            "AI-drevne booking- og avtalesystemer"
          ],
          metrics: {
            projects: "10+",
            languages: "4",
            avgGrowth: "+170%",
            satisfaction: "100%"
          },
          image: "webdev",
          technologies: ["WordPress", "Flerspråklig SEO", "Bookingsystemer", "AI-integrasjon"]
        },
        {
          title: "Mondosol Coachingplattform",
          category: "AI-innovasjon",
          description: "Grunnla og utviklet Mondosol, en AI-drevet flerspråklig coachingplattform med 12 spesialiserte virtuelle assistenter som betjener klienter på 4 språk.",
          results: [
            "12 AI virtuelle assistenter opprettet",
            "4 språk støttet (EN, IT, NO, FR)",
            "Global kundebase etablert",
            "Innovativ AI-coachingmetodikk"
          ],
          metrics: {
            assistants: "12",
            languages: "4",
            clients: "50+",
            countries: "25+"
          },
          image: "mondosol",
          technologies: ["AI-utvikling", "Flerspråklig NLP", "Coachingmetodikk", "Plattformutvikling"]
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {currentContent.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              {currentContent.hero.subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {currentContent.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-base md:text-lg font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                        {value}
                      </div>
                      <div className="text-lg md:text-xl text-gray-600 uppercase tracking-wide">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    {language === 'en' ? 'Key Results' : language === 'it' ? 'Risultati Chiave' : 'Nøkkelresultater'}
                  </h4>
                  <ul className="space-y-3">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <Award className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-xl md:text-2xl text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    {language === 'en' ? 'Technologies & Skills' : language === 'it' ? 'Tecnologie e Competenze' : 'Teknologier og Ferdigheter'}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-black text-yellow-400 px-4 py-2 rounded-lg text-base md:text-lg font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              {language === 'en' ? 'Ready to Work Together?' : language === 'it' ? 'Pronto a Lavorare Insieme?' : 'Klar for å Jobbe Sammen?'}
            </h2>
            <p className="text-2xl md:text-3xl text-black">
              {language === 'en' 
                ? "Let's discuss how I can help your organization achieve similar results." 
                : language === 'it'
                ? "Discutiamo di come posso aiutare la tua organizzazione a ottenere risultati simili."
                : "La oss diskutere hvordan jeg kan hjelpe organisasjonen din med å oppnå lignende resultater."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-black text-yellow-400 hover:bg-gray-900 font-semibold text-xl md:text-2xl px-12 py-8"
            >
              <a href="/contact">
                {language === 'en' ? 'Get in Touch' : language === 'it' ? 'Contattami' : 'Ta Kontakt'}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

