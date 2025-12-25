import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Mic, Users, Globe, Award, Calendar, MessageSquare, Play } from 'lucide-react'
import { motion } from 'framer-motion'

// Import images
import londonSpeakerImg from '../assets/speaker_london_formal.jpg'
import workshopImg from '../assets/speaking_workshop_norway.jpg'
import panelImg from '../assets/speaking_panel_discussion.jpg'

const Speaking = ({ language = 'en' }) => {
  const content = {
    en: {
      hero: {
        title: 'SPEAKING',
        subtitle: 'SHARING STORIES, INSPIRING CHANGE',
        description: 'From a small town in Italy to international stages across Europe - my journey as a speaker, educator, and entrepreneur.'
      },
      journey: {
        title: 'MY SPEAKING JOURNEY',
        text: 'I never imagined myself as a public speaker. Growing up in Abbiategrasso, a small town near Milan, I was more comfortable behind a computer screen than in front of an audience. But life had other plans. Moving to Norway, building businesses across borders, and navigating multiple cultures gave me stories worth sharing - and people started asking me to tell them. My first major speaking engagement in London in 2019 was terrifying and exhilarating. Standing on that stage, sharing my experiences with property management and multilingual business growth, I realized something powerful: our struggles and successes can light the path for others. Today, I speak not because I have all the answers, but because I have lived the questions many entrepreneurs and immigrants face.'
      },
      video: {
        title: 'LONDON 2024 - AIRDNA HOST CONFERENCE',
        subtitle: 'Watch my keynote on scaling property management across European markets'
      },
      philosophy: {
        title: 'WHY I SPEAK',
        quote: 'Every story of struggle, adaptation, and success can become a bridge for someone else crossing the same waters.',
        points: [
          {
            title: 'Authenticity Over Perfection',
            desc: 'I share real experiences - the failures, the pivots, the moments of doubt. Because that is where the real learning happens.'
          },
          {
            title: 'Practical, Not Theoretical',
            desc: 'Every insight I share comes from building actual businesses, managing real properties, teaching real students. No fluff, just what works.'
          },
          {
            title: 'Cultural Bridge-Building',
            desc: 'Having lived and worked in 6 countries, I help audiences understand how to navigate cultural differences in business and life.'
          }
        ]
      },
      topics: {
        title: 'WHAT I TALK ABOUT',
        items: [
          {
            icon: Globe,
            title: 'Building Businesses Across Borders',
            desc: 'The real challenges and opportunities of entrepreneurship in multiple countries. Regulations, cultures, languages - and how to thrive anyway.'
          },
          {
            icon: Users,
            title: 'From Zero to Top 3 Airbnb Host',
            desc: 'The complete journey of building a property management business: €0 to €150K+ revenue, 250+ properties, lessons learned the hard way.'
          },
          {
            icon: MessageSquare,
            title: 'Multilingual Marketing That Actually Works',
            desc: 'How to reach European markets in their native languages. SEO, content, cultural adaptation - strategies that drove real results.'
          },
          {
            icon: Award,
            title: 'The Immigrant Entrepreneur Story',
            desc: 'Finding opportunity in displacement. Building a life and business in a new country. Turning cultural differences into competitive advantages.'
          },
          {
            icon: Calendar,
            title: 'Education as Business Strategy',
            desc: 'Why I built a language school. How investing in education - yours and your team\'s - creates exponential business growth.'
          },
          {
            icon: Mic,
            title: 'Digital Transformation for Traditional Businesses',
            desc: 'Bringing offline businesses online. AI tools, automation, and digital strategies for entrepreneurs who aren\'t tech experts.'
          }
        ]
      },
      gallery: {
        title: 'SPEAKING MOMENTS',
        events: [
          {
            image: londonSpeakerImg,
            title: 'AirDNA Host Conference',
            location: 'London, UK',
            year: '2024',
            desc: 'Keynote on property management strategies'
          },
          {
            image: workshopImg,
            title: 'Business Growth Workshop',
            location: 'Oslo, Norway',
            year: '2023',
            desc: 'Interactive workshop on multilingual marketing'
          },
          {
            image: panelImg,
            title: 'Global Innovation Summit',
            location: 'Europe',
            year: '2024',
            desc: 'Panel discussion on cross-cultural entrepreneurship'
          }
        ]
      },
      formats: {
        title: 'HOW WE CAN WORK TOGETHER',
        items: [
          { title: 'Keynote Speeches', desc: '45-60 minutes of inspiration + practical frameworks', icon: '🎤' },
          { title: 'Interactive Workshops', desc: '2-4 hours with exercises and action plans', icon: '👥' },
          { title: 'Panel Discussions', desc: 'Bringing diverse perspectives to your event', icon: '💬' },
          { title: 'Corporate Training', desc: 'Half-day or full-day team development', icon: '🏢' }
        ]
      },
      languages: {
        title: 'I SPEAK IN',
        items: [
          { lang: 'English', level: 'Fluent', flag: '🇬🇧' },
          { lang: 'Italian', level: 'Native', flag: '🇮🇹' },
          { lang: 'Norwegian', level: 'Professional', flag: '🇳🇴' },
          { lang: 'French', level: 'Professional', flag: '🇫🇷' }
        ]
      },
      cta: {
        title: 'LET\'S BRING THIS TO YOUR AUDIENCE',
        subtitle: 'Whether it\'s a conference, corporate event, or educational institution - I\'d love to share these stories with your community.',
        button: 'GET IN TOUCH'
      }
    },
    it: {
      hero: {
        title: 'SPEAKING',
        subtitle: 'CONDIVIDERE STORIE, ISPIRARE CAMBIAMENTO',
        description: 'Da un piccolo paese in Italia ai palchi internazionali in Europa - il mio viaggio come speaker, educatore e imprenditore.'
      },
      journey: {
        title: 'IL MIO VIAGGIO COME SPEAKER',
        text: 'Non mi sono mai immaginato come speaker. Crescendo ad Abbiategrasso, un piccolo paese vicino Milano, ero più a mio agio dietro uno schermo che davanti a un pubblico. Ma la vita aveva altri piani. Trasferirmi in Norvegia, costruire business oltre i confini e navigare culture diverse mi ha dato storie che valeva la pena condividere - e le persone hanno iniziato a chiedermi di raccontarle. Il mio primo grande intervento a Londra nel 2019 è stato terrificante ed esaltante. In piedi su quel palco, condividendo le mie esperienze con la gestione immobiliare e la crescita di business multilingue, ho capito qualcosa di potente: le nostre difficoltà e successi possono illuminare il percorso per altri. Oggi parlo non perché ho tutte le risposte, ma perché ho vissuto le domande che molti imprenditori e immigrati affrontano.'
      },
      video: {
        title: 'LONDRA 2024 - CONFERENZA AIRDNA HOST',
        subtitle: 'Guarda il mio keynote sulla gestione immobiliare nei mercati europei'
      },
      philosophy: {
        title: 'PERCHÉ PARLO',
        quote: 'Ogni storia di lotta, adattamento e successo può diventare un ponte per qualcun altro che attraversa le stesse acque.',
        points: [
          {
            title: 'Autenticità Oltre la Perfezione',
            desc: 'Condivido esperienze reali - i fallimenti, i cambi di rotta, i momenti di dubbio. Perché è lì che avviene il vero apprendimento.'
          },
          {
            title: 'Pratico, Non Teorico',
            desc: 'Ogni intuizione che condivido viene dalla costruzione di business reali, gestione di proprietà reali, insegnamento a studenti reali. Niente fuffa, solo ciò che funziona.'
          },
          {
            title: 'Costruire Ponti Culturali',
            desc: 'Avendo vissuto e lavorato in 6 paesi, aiuto il pubblico a capire come navigare le differenze culturali nel business e nella vita.'
          }
        ]
      },
      topics: {
        title: 'DI COSA PARLO',
        items: [
          {
            icon: Globe,
            title: 'Costruire Business Oltre i Confini',
            desc: 'Le vere sfide e opportunità dell\'imprenditoria in più paesi. Regolamenti, culture, lingue - e come prosperare comunque.'
          },
          {
            icon: Users,
            title: 'Da Zero a Top 3 Host Airbnb',
            desc: 'Il viaggio completo della costruzione di un business di gestione immobiliare: da €0 a €150K+ di fatturato, 250+ proprietà, lezioni apprese a caro prezzo.'
          },
          {
            icon: MessageSquare,
            title: 'Marketing Multilingue Che Funziona Davvero',
            desc: 'Come raggiungere i mercati europei nelle loro lingue native. SEO, contenuti, adattamento culturale - strategie che hanno portato risultati reali.'
          },
          {
            icon: Award,
            title: 'La Storia dell\'Imprenditore Immigrato',
            desc: 'Trovare opportunità nello spostamento. Costruire una vita e un business in un nuovo paese. Trasformare le differenze culturali in vantaggi competitivi.'
          },
          {
            icon: Calendar,
            title: 'Educazione come Strategia Aziendale',
            desc: 'Perché ho costruito una scuola di lingue. Come investire nell\'educazione - tua e del tuo team - crea crescita aziendale esponenziale.'
          },
          {
            icon: Mic,
            title: 'Trasformazione Digitale per Business Tradizionali',
            desc: 'Portare business offline online. Strumenti AI, automazione e strategie digitali per imprenditori che non sono esperti di tecnologia.'
          }
        ]
      },
      gallery: {
        title: 'MOMENTI DA SPEAKER',
        events: [
          {
            image: londonSpeakerImg,
            title: 'Conferenza AirDNA Host',
            location: 'Londra, UK',
            year: '2024',
            desc: 'Keynote sulle strategie di gestione immobiliare'
          },
          {
            image: workshopImg,
            title: 'Workshop Crescita Aziendale',
            location: 'Oslo, Norvegia',
            year: '2023',
            desc: 'Workshop interattivo sul marketing multilingue'
          },
          {
            image: panelImg,
            title: 'Summit Innovazione Globale',
            location: 'Europa',
            year: '2024',
            desc: 'Panel sull\'imprenditoria cross-culturale'
          }
        ]
      },
      formats: {
        title: 'COME POSSIAMO LAVORARE INSIEME',
        items: [
          { title: 'Keynote', desc: '45-60 minuti di ispirazione + framework pratici', icon: '🎤' },
          { title: 'Workshop Interattivi', desc: '2-4 ore con esercizi e piani d\'azione', icon: '👥' },
          { title: 'Panel', desc: 'Portare prospettive diverse al tuo evento', icon: '💬' },
          { title: 'Formazione Aziendale', desc: 'Mezza giornata o giornata intera di sviluppo team', icon: '🏢' }
        ]
      },
      languages: {
        title: 'PARLO IN',
        items: [
          { lang: 'Inglese', level: 'Fluente', flag: '🇬🇧' },
          { lang: 'Italiano', level: 'Madrelingua', flag: '🇮🇹' },
          { lang: 'Norvegese', level: 'Professionale', flag: '🇳🇴' },
          { lang: 'Francese', level: 'Professionale', flag: '🇫🇷' }
        ]
      },
      cta: {
        title: 'PORTIAMO QUESTO AL TUO PUBBLICO',
        subtitle: 'Che si tratti di una conferenza, evento aziendale o istituzione educativa - mi piacerebbe condividere queste storie con la tua comunità.',
        button: 'CONTATTAMI'
      }
    },
    no: {
      hero: {
        title: 'FOREDRAG',
        subtitle: 'DELE HISTORIER, INSPIRERE ENDRING',
        description: 'Fra en liten by i Italia til internasjonale scener i Europa - min reise som foredragsholder, lærer og entreprenør.'
      },
      journey: {
        title: 'MIN FOREDRAGSREISE',
        text: 'Jeg forestilte meg aldri som foredragsholder. Da jeg vokste opp i Abbiategrasso, en liten by nær Milano, var jeg mer komfortabel bak en dataskjerm enn foran et publikum. Men livet hadde andre planer. Å flytte til Norge, bygge virksomheter på tvers av grenser og navigere flere kulturer ga meg historier verdt å dele - og folk begynte å spørre meg om å fortelle dem. Mitt første store foredrag i London i 2019 var skremmende og berusende. Stående på den scenen, deling av mine erfaringer med eiendomsforvaltning og flerspråklig forretningsvekst, skjønte jeg noe kraftfullt: våre kamper og suksesser kan lyse opp veien for andre. I dag snakker jeg ikke fordi jeg har alle svarene, men fordi jeg har levd spørsmålene mange entreprenører og innvandrere står overfor.'
      },
      video: {
        title: 'LONDON 2024 - AIRDNA HOST KONFERANSE',
        subtitle: 'Se mitt hovedforedrag om skalering av eiendomsforvaltning i europeiske markeder'
      },
      philosophy: {
        title: 'HVORFOR JEG SNAKKER',
        quote: 'Hver historie om kamp, tilpasning og suksess kan bli en bro for noen andre som krysser de samme vannene.',
        points: [
          {
            title: 'Autentisitet Over Perfeksjon',
            desc: 'Jeg deler virkelige erfaringer - feilene, pivotene, øyeblikkene av tvil. Fordi det er der den virkelige læringen skjer.'
          },
          {
            title: 'Praktisk, Ikke Teoretisk',
            desc: 'Hver innsikt jeg deler kommer fra å bygge faktiske virksomheter, forvalte ekte eiendommer, undervise virkelige studenter. Ingen tull, bare det som fungerer.'
          },
          {
            title: 'Kulturell Brobygging',
            desc: 'Etter å ha bodd og jobbet i 6 land, hjelper jeg publikum å forstå hvordan man navigerer kulturelle forskjeller i business og liv.'
          }
        ]
      },
      topics: {
        title: 'HVA JEG SNAKKER OM',
        items: [
          {
            icon: Globe,
            title: 'Bygge Virksomheter På Tvers av Grenser',
            desc: 'De virkelige utfordringene og mulighetene ved entreprenørskap i flere land. Reguleringer, kulturer, språk - og hvordan man trives likevel.'
          },
          {
            icon: Users,
            title: 'Fra Null til Topp 3 Airbnb Vert',
            desc: 'Den komplette reisen med å bygge en eiendomsforvaltningsvirksomhet: €0 til €150K+ inntekt, 250+ eiendommer, leksjoner lært på den harde måten.'
          },
          {
            icon: MessageSquare,
            title: 'Flerspråklig Markedsføring Som Faktisk Fungerer',
            desc: 'Hvordan nå europeiske markeder på deres morsmål. SEO, innhold, kulturell tilpasning - strategier som ga virkelige resultater.'
          },
          {
            icon: Award,
            title: 'Innvandrerentreprenør Historien',
            desc: 'Finne muligheter i forflytning. Bygge et liv og virksomhet i et nytt land. Gjøre kulturelle forskjeller til konkurransefortrinn.'
          },
          {
            icon: Calendar,
            title: 'Utdanning som Forretningsstrategi',
            desc: 'Hvorfor jeg bygde en språkskole. Hvordan investering i utdanning - din og ditt teams - skaper eksponentiell forretningsvekst.'
          },
          {
            icon: Mic,
            title: 'Digital Transformasjon for Tradisjonelle Virksomheter',
            desc: 'Bringe offline virksomheter online. AI-verktøy, automatisering og digitale strategier for entreprenører som ikke er tekniske eksperter.'
          }
        ]
      },
      gallery: {
        title: 'FOREDRAGSØYEBLIKK',
        events: [
          {
            image: londonSpeakerImg,
            title: 'AirDNA Host Konferanse',
            location: 'London, UK',
            year: '2024',
            desc: 'Hovedforedrag om eiendomsforvaltningsstrategier'
          },
          {
            image: workshopImg,
            title: 'Forretningsvekst Workshop',
            location: 'Oslo, Norge',
            year: '2023',
            desc: 'Interaktiv workshop om flerspråklig markedsføring'
          },
          {
            image: panelImg,
            title: 'Global Innovasjon Summit',
            location: 'Europa',
            year: '2024',
            desc: 'Panel om tverrkulturelt entreprenørskap'
          }
        ]
      },
      formats: {
        title: 'HVORDAN VI KAN JOBBE SAMMEN',
        items: [
          { title: 'Hovedforedrag', desc: '45-60 minutter med inspirasjon + praktiske rammeverk', icon: '🎤' },
          { title: 'Interaktive Workshops', desc: '2-4 timer med øvelser og handlingsplaner', icon: '👥' },
          { title: 'Paneldiskusjoner', desc: 'Bringe ulike perspektiver til ditt arrangement', icon: '💬' },
          { title: 'Bedriftsopplæring', desc: 'Halv dag eller hel dag teamutvikling', icon: '🏢' }
        ]
      },
      languages: {
        title: 'JEG SNAKKER PÅ',
        items: [
          { lang: 'Engelsk', level: 'Flytende', flag: '🇬🇧' },
          { lang: 'Italiensk', level: 'Morsmål', flag: '🇮🇹' },
          { lang: 'Norsk', level: 'Profesjonell', flag: '🇳🇴' },
          { lang: 'Fransk', level: 'Profesjonell', flag: '🇫🇷' }
        ]
      },
      cta: {
        title: 'LA OSS BRINGE DETTE TIL DITT PUBLIKUM',
        subtitle: 'Enten det er en konferanse, bedriftsarrangement eller utdanningsinstitusjon - jeg vil gjerne dele disse historiene med ditt samfunn.',
        button: 'TA KONTAKT'
      }
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.journey.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              {t.journey.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.video.title}
            </h2>
            <p className="text-lg text-gray-400">
              {t.video.subtitle}
            </p>
          </motion.div>
          
          {/* LinkedIn Video Embed */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7196085693985316864"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              frameBorder="0" 
              allowFullScreen
              title="LinkedIn Video - AirDNA Host Conference London"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.philosophy.title}
            </h2>
            <blockquote className="text-2xl text-center italic text-gray-300 mb-16 max-w-4xl mx-auto border-l-4 border-blue-500 pl-6">
              "{t.philosophy.quote}"
            </blockquote>
            <div className="grid md:grid-cols-3 gap-8">
              {t.philosophy.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{point.title}</h3>
                  <p className="text-gray-300">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.topics.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.topics.items.map((topic, index) => {
                const Icon = topic.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all group"
                  >
                    <Icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3 text-white">{topic.title}</h3>
                    <p className="text-gray-400">{topic.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.gallery.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.gallery.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-blue-400 text-sm font-bold mb-1">{event.year} • {event.location}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.formats.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.formats.items.map((format, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all text-center"
                >
                  <div className="text-4xl mb-4">{format.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-white">{format.title}</h3>
                  <p className="text-gray-400 text-sm">{format.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.languages.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.languages.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all text-center"
                >
                  <div className="text-5xl mb-3">{item.flag}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.lang}</h3>
                  <p className="text-sm text-gray-400">{item.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg">
                {t.cta.button}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Speaking
