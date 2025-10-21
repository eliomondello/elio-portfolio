import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    language: language
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const content = {
    en: {
      hero: {
        title: "GET IN TOUCH",
        subtitle: "Ready to Transform Your Business?",
        description: "Let's discuss how my AI-powered coaching and consulting services can help you achieve breakthrough results. Book a free consultation or send me a message."
      },
      form: {
        title: "Send a Message",
        subtitle: "Fill out the form below and I'll get back to you within 24 hours",
        fields: {
          name: "Full Name",
          email: "Email Address",
          company: "Company/Organization",
          service: "Service Interest",
          message: "Message"
        },
        services: [
          "Business Coaching",
          "Digital Transformation",
          "Property Management Consulting",
          "Multilingual Coaching",
          "AI Integration",
          "Educational Consulting",
          "Other"
        ],
        submit: "Send Message",
        submitting: "Sending...",
        success: "Message sent successfully! I'll get back to you soon."
      },
      contact: {
        title: "Contact Information",
        items: [
          {
            icon: Mail,
            label: "Email",
            value: "eliomondello@mondosol.com",
            link: "mailto:eliomondello@mondosol.com"
          },
          {
            icon: Phone,
            label: "Phone",
            value: "+47 XXX XX XXX",
            link: "tel:+47XXXXXXX"
          },
          {
            icon: MapPin,
            label: "Location",
            value: "Hønefoss, Norway",
            link: null
          },
          {
            icon: Clock,
            label: "Response Time",
            value: "Within 24 hours",
            link: null
          }
        ]
      },
      booking: {
        title: "Book a Session",
        description: "Ready to start your transformation? Book a coaching session directly through my scheduling platform.",
        cta: "Book Now"
      },
      languages: {
        title: "Available Languages",
        items: [
          { code: "en", name: "English", flag: "🇺🇸" },
          { code: "it", name: "Italiano", flag: "🇮🇹" },
          { code: "no", name: "Norsk", flag: "🇳🇴" },
          { code: "fr", name: "Français", flag: "🇫🇷" }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about my services and approach",
        items: [
          {
            question: "What makes your coaching approach unique?",
            answer: "I combine traditional coaching methodologies with AI-powered insights and tools. Having lived in 6 countries and speaking 4 languages, I bring a unique multicultural perspective to help clients navigate global challenges and opportunities."
          },
          {
            question: "How quickly can I expect to see results?",
            answer: "Most clients start seeing initial improvements within 2-4 weeks. Significant transformations typically occur within 3-6 months, depending on the complexity of goals and commitment level."
          },
          {
            question: "Do you work with clients internationally?",
            answer: "Yes! I work with clients globally through video conferencing. My multilingual abilities allow me to provide coaching in English, Italian, Norwegian, and French."
          },
          {
            question: "What is your coaching process?",
            answer: "We start with a comprehensive assessment, set clear goals, create an action plan, and have regular check-ins. I provide ongoing support and adjust strategies based on your progress and feedback."
          },
          {
            question: "How do you integrate AI into your coaching?",
            answer: "I use 12 specialized AI assistants to provide personalized insights, track progress, and optimize strategies. This allows for more precise and data-driven coaching approaches."
          }
        ]
      }
    },
    it: {
      hero: {
        title: "CONTATTAMI",
        subtitle: "Pronto a Trasformare il Tuo Business?",
        description: "Discutiamo di come i miei servizi di coaching e consulenza potenziati dall'IA possono aiutarti a raggiungere risultati straordinari. Prenota una consulenza gratuita o inviami un messaggio."
      },
      form: {
        title: "Invia un Messaggio",
        subtitle: "Compila il modulo qui sotto e ti risponderò entro 24 ore",
        fields: {
          name: "Nome Completo",
          email: "Indirizzo Email",
          company: "Azienda/Organizzazione",
          service: "Interesse per il Servizio",
          message: "Messaggio"
        },
        services: [
          "Business Coaching",
          "Trasformazione Digitale",
          "Consulenza Gestione Immobiliare",
          "Coaching Multilingue",
          "Integrazione IA",
          "Consulenza Educativa",
          "Altro"
        ],
        submit: "Invia Messaggio",
        submitting: "Invio in corso...",
        success: "Messaggio inviato con successo! Ti risponderò presto."
      },
      contact: {
        title: "Informazioni di Contatto",
        items: [
          {
            icon: Mail,
            label: "Email",
            value: "eliomondello@mondosol.com",
            link: "mailto:eliomondello@mondosol.com"
          },
          {
            icon: Phone,
            label: "Telefono",
            value: "+47 XXX XX XXX",
            link: "tel:+47XXXXXXX"
          },
          {
            icon: MapPin,
            label: "Posizione",
            value: "Hønefoss, Norvegia",
            link: null
          },
          {
            icon: Clock,
            label: "Tempo di Risposta",
            value: "Entro 24 ore",
            link: null
          }
        ]
      },
      booking: {
        title: "Prenota una Sessione",
        description: "Pronto a iniziare la tua trasformazione? Prenota una sessione di coaching direttamente attraverso la mia piattaforma di programmazione.",
        cta: "Prenota Ora"
      },
      languages: {
        title: "Lingue Disponibili",
        items: [
          { code: "en", name: "English", flag: "🇺🇸" },
          { code: "it", name: "Italiano", flag: "🇮🇹" },
          { code: "no", name: "Norsk", flag: "🇳🇴" },
          { code: "fr", name: "Français", flag: "🇫🇷" }
        ]
      },
      faq: {
        title: "Domande Frequenti",
        subtitle: "Domande comuni sui miei servizi e approccio",
        items: [
          {
            question: "Cosa rende unico il tuo approccio di coaching?",
            answer: "Combino metodologie di coaching tradizionali con strumenti e insights potenziati dall'IA. Avendo vissuto in 6 paesi e parlando 4 lingue, porto una prospettiva multiculturale unica per aiutare i clienti a navigare sfide e opportunità globali."
          },
          {
            question: "Quanto velocemente posso aspettarmi di vedere risultati?",
            answer: "La maggior parte dei clienti inizia a vedere miglioramenti iniziali entro 2-4 settimane. Trasformazioni significative si verificano tipicamente entro 3-6 mesi, a seconda della complessità degli obiettivi e del livello di impegno."
          },
          {
            question: "Lavori con clienti internazionali?",
            answer: "Sì! Lavoro con clienti in tutto il mondo tramite videoconferenza. Le mie capacità multilingue mi permettono di fornire coaching in inglese, italiano, norvegese e francese."
          },
          {
            question: "Qual è il tuo processo di coaching?",
            answer: "Iniziamo con una valutazione completa, stabiliamo obiettivi chiari, creiamo un piano d'azione e facciamo controlli regolari. Fornisco supporto continuo e adatto le strategie in base ai tuoi progressi e feedback."
          },
          {
            question: "Come integri l'IA nel tuo coaching?",
            answer: "Utilizzo 12 assistenti IA specializzati per fornire insights personalizzati, monitorare i progressi e ottimizzare le strategie. Questo permette approcci di coaching più precisi e basati sui dati."
          }
        ]
      }
    },
    no: {
      hero: {
        title: "TA KONTAKT",
        subtitle: "Klar til å Transformere Din Virksomhet?",
        description: "La oss diskutere hvordan mine AI-drevne coaching- og konsulenttjenester kan hjelpe deg oppnå gjennombrudd resultater. Book en gratis konsultasjon eller send meg en melding."
      },
      form: {
        title: "Send en Melding",
        subtitle: "Fyll ut skjemaet nedenfor og jeg kommer tilbake til deg innen 24 timer",
        fields: {
          name: "Fullt Navn",
          email: "E-postadresse",
          company: "Selskap/Organisasjon",
          service: "Tjenesteinteresse",
          message: "Melding"
        },
        services: [
          "Business Coaching",
          "Digital Transformasjon",
          "Eiendomsforvaltning Konsultering",
          "Flerspråklig Coaching",
          "AI Integrasjon",
          "Utdanningskonsultering",
          "Annet"
        ],
        submit: "Send Melding",
        submitting: "Sender...",
        success: "Melding sendt vellykket! Jeg kommer tilbake til deg snart."
      },
      contact: {
        title: "Kontaktinformasjon",
        items: [
          {
            icon: Mail,
            label: "E-post",
            value: "eliomondello@mondosol.com",
            link: "mailto:eliomondello@mondosol.com"
          },
          {
            icon: Phone,
            label: "Telefon",
            value: "+47 XXX XX XXX",
            link: "tel:+47XXXXXXX"
          },
          {
            icon: MapPin,
            label: "Lokasjon",
            value: "Hønefoss, Norge",
            link: null
          },
          {
            icon: Clock,
            label: "Responstid",
            value: "Innen 24 timer",
            link: null
          }
        ]
      },
      booking: {
        title: "Book en Økt",
        description: "Klar til å starte din transformasjon? Book en coaching-økt direkte gjennom min planleggingsplattform.",
        cta: "Book Nå"
      },
      languages: {
        title: "Tilgjengelige Språk",
        items: [
          { code: "en", name: "English", flag: "🇺🇸" },
          { code: "it", name: "Italiano", flag: "🇮🇹" },
          { code: "no", name: "Norsk", flag: "🇳🇴" },
          { code: "fr", name: "Français", flag: "🇫🇷" }
        ]
      },
      faq: {
        title: "Ofte Stilte Spørsmål",
        subtitle: "Vanlige spørsmål om mine tjenester og tilnærming",
        items: [
          {
            question: "Hva gjør din coaching-tilnærming unik?",
            answer: "Jeg kombinerer tradisjonelle coaching-metodikker med AI-drevne innsikter og verktøy. Etter å ha bodd i 6 land og snakket 4 språk, bringer jeg et unikt multikulturelt perspektiv for å hjelpe klienter med å navigere globale utfordringer og muligheter."
          },
          {
            question: "Hvor raskt kan jeg forvente å se resultater?",
            answer: "De fleste klienter begynner å se innledende forbedringer innen 2-4 uker. Betydelige transformasjoner skjer vanligvis innen 3-6 måneder, avhengig av kompleksiteten til målene og engasjementsnivået."
          },
          {
            question: "Jobber du med klienter internasjonalt?",
            answer: "Ja! Jeg jobber med klienter globalt gjennom videokonferanser. Mine flerspråklige evner lar meg tilby coaching på engelsk, italiensk, norsk og fransk."
          },
          {
            question: "Hva er din coaching-prosess?",
            answer: "Vi starter med en omfattende vurdering, setter klare mål, lager en handlingsplan og har regelmessige sjekk-inn. Jeg gir kontinuerlig støtte og justerer strategier basert på dine fremskritt og tilbakemeldinger."
          },
          {
            question: "Hvordan integrerer du AI i din coaching?",
            answer: "Jeg bruker 12 spesialiserte AI-assistenter for å gi personlige innsikter, spore fremgang og optimalisere strategier. Dette gir mer presise og datadrevne coaching-tilnærminger."
          }
        ]
      }
    }
  }

  const currentContent = content[language]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        language: language
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
              {currentContent.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              {currentContent.hero.subtitle}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentContent.form.title}
                </h3>
                <p className="text-gray-400 mb-8">
                  {currentContent.form.subtitle}
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-400">
                      {currentContent.form.success}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          {currentContent.form.fields.name}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          {currentContent.form.fields.email}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        {currentContent.form.fields.company}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        {currentContent.form.fields.service}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {currentContent.form.services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        {currentContent.form.fields.message}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your goals and how I can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-semibold text-lg py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                          {currentContent.form.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {currentContent.form.submit}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h3 className="text-3xl font-bold text-white mb-8">
                  {currentContent.contact.title}
                </h3>
                <div className="space-y-6">
                  {currentContent.contact.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{item.label}</div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-white font-medium hover:text-yellow-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {currentContent.languages.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {currentContent.languages.items.map((lang, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-800 rounded-lg">
                      <span className="text-2xl mr-3">{lang.flag}</span>
                      <span className="text-white font-medium">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Booking */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {currentContent.booking.title}
                </h3>
                <p className="text-black/80 mb-6">
                  {currentContent.booking.description}
                </p>
                <Button 
                  asChild
                  className="bg-black text-yellow-400 hover:bg-gray-900 font-semibold"
                >
                  <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                    {currentContent.booking.cta}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.faq.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              {currentContent.faq.subtitle}
            </p>
          </motion.div>

          <div className="space-y-6">
            {currentContent.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
