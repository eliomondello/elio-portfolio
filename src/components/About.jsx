import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, BookOpen, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Timeline images
import childhoodPhoto from '../assets/292545060_456058393193792_2993380915861520879_n.png'
import youngElio from '../assets/1735827870885-65247ff4-e761-4a26-9439-43785afb1b37~2.jpg'
import educationPhoto from '../assets/1735828571062-bd9249cc-eeda-4a47-9363-a20976690d17_.jpg'
import teachingPhoto from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
import airbnbPhoto from '../assets/IMG_20250610_104440397_HDR_PORTRAIT.jpg'
import norwayPhoto from '../assets/IMG_20250710_113431773_HDR_PORTRAIT.jpg'
import aiCoachingPhoto from '../assets/IMG_20250709_132004267_HDR_PORTRAIT.jpg'
import currentPhoto from '../assets/IMG_20250803_112156728_HDR_PORTRAIT.jpg'

const About = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "ELIO'S STORY",
        subtitle: "From Sicily to the World",
        description: "A journey of resilience, innovation, and transformation across three countries and multiple industries."
      },
      timeline: [
        {
          year: "1978",
          title: "Born in Sicily",
          location: "Italy",
          description: "Born on October 1, 1978, in Sicily, Italy. Growing up in a vibrant Mediterranean culture that values family, hard work, and entrepreneurial spirit.",
          icon: "👶",
          image: childhoodPhoto
        },
        {
          year: "1996-2002",
          title: "University Education",
          location: "Italy",
          description: "Pursued higher education in Italy, developing a strong foundation in business and international relations that would shape future career paths.",
          icon: "📚",
          image: youngElio
        },
        {
          year: "2003-2004",
          title: "Erasmus Exchange Program",
          location: "Sciences Po Grenoble, France",
          description: "Studied Public Administration through the European Union Exchange Program, developing multicultural perspectives and international networking skills.",
          icon: "🌍",
          image: educationPhoto
        },
        {
          year: "2005-2006",
          title: "Master's in Project Management",
          location: "Università degli Studi di Milano, Italy",
          description: "Completed Master of Arts in Project Management with internship at ISTUD business school, laying the foundation for strategic thinking and business leadership.",
          icon: "🎓",
          image: educationPhoto
        },
        {
          year: "2009-2014",
          title: "Educational Leadership",
          location: "Italy & Norway",
          description: "Started as English Language Teacher, evolved into Educational Leadership Consultant. Founded Mondelio, a non-profit with 300+ members offering free courses.",
          icon: "👨‍🏫",
          image: teachingPhoto
        },
        {
          year: "2010-2023",
          title: "Property Management Empire",
          location: "Italy",
          description: "Built and managed 250+ short-term rental listings, achieving Top 3 ranking nationally on Airbnb platform with €150k+ annual revenue.",
          icon: "🏠",
          image: airbnbPhoto
        },
        {
          year: "2022-Present",
          title: "AI-Powered Coaching",
          location: "Global",
          description: "Launched Mondosol coaching business, integrating 12 AI virtual assistants to provide personalized coaching in 4 languages across multiple industries.",
          icon: "🤖",
          image: aiCoachingPhoto
        },
        {
          year: "2023-Present",
          title: "Life in Norway",
          location: "Hønefoss, Norway",
          description: "Working as Kindergarten Teacher and Substitute Teacher while expanding coaching business internationally, bridging education and entrepreneurship.",
          icon: "🇳🇴",
          image: norwayPhoto
        },
        {
          year: "2025",
          title: "Digital Transformation Specialist",
          location: "Norway & Global",
          description: "Focusing on content marketing, SEO, and multilingual digital strategies. Helping businesses transform through AI integration and digital innovation.",
          icon: "💻",
          image: currentPhoto
        }
      ],
      philosophy: {
        title: "My Philosophy",
        subtitle: "Transformation Through Technology and Human Connection",
        points: [
          {
            title: "Resilience Through Adversity",
            description: "Every setback is a setup for a comeback. My €150k loss taught me that failure is not the opposite of success—it's a stepping stone to it.",
            icon: "💪"
          },
          {
            title: "AI-Human Synergy",
            description: "Technology amplifies human potential. By combining AI tools with personalized coaching, we can achieve unprecedented results in personal and business transformation.",
            icon: "🔗"
          },
          {
            title: "Multicultural Advantage",
            description: "Speaking 4 languages and living in 3 countries has taught me that diversity of perspective is the key to innovative solutions and global success.",
            icon: "🌐"
          },
          {
            title: "Continuous Learning",
            description: "From teaching to property management to AI coaching, I believe in constantly evolving and adapting to new challenges and opportunities.",
            icon: "📈"
          }
        ]
      },
      achievements: {
        title: "Key Achievements",
        items: [
          { label: "Top 3 Airbnb Host", value: "Italy National Ranking", icon: "🏆" },
          { label: "Properties Managed", value: "250+ Listings", icon: "🏠" },
          { label: "Annual Revenue", value: "€150k+", icon: "💰" },
          { label: "Languages Spoken", value: "4 Fluently", icon: "🗣️" },
          { label: "AI Assistants", value: "12 Active", icon: "🤖" },
          { label: "Years Experience", value: "20+ International", icon: "📅" },
          { label: "Industries Served", value: "10+ Different", icon: "🏢" },
          { label: "Countries Lived", value: "3 (Italy, France, Norway)", icon: "🌍" }
        ]
      }
    },
    it: {
      hero: {
        title: "LA STORIA DI ELIO",
        subtitle: "Dalla Sicilia al Mondo",
        description: "Un viaggio di resilienza, innovazione e trasformazione attraverso tre paesi e molteplici settori."
      },
      timeline: [
        {
          year: "1978",
          title: "Nato in Sicilia",
          location: "Italia",
          description: "Nato il 1° ottobre 1978 in Sicilia, Italia. Cresciuto in una vibrante cultura mediterranea che valorizza la famiglia, il duro lavoro e lo spirito imprenditoriale.",
          icon: "👶",
          image: childhoodPhoto
        },
        {
          year: "1996-2002",
          title: "Formazione Universitaria",
          location: "Italia",
          description: "Ha perseguito l'istruzione superiore in Italia, sviluppando una solida base in business e relazioni internazionali che avrebbe plasmato i futuri percorsi di carriera.",
          icon: "📚",
          image: youngElio
        },
        {
          year: "2003-2004",
          title: "Programma Erasmus",
          location: "Sciences Po Grenoble, Francia",
          description: "Ha studiato Amministrazione Pubblica attraverso il Programma di Scambio dell'Unione Europea, sviluppando prospettive multiculturali e competenze di networking internazionale.",
          icon: "🌍",
          image: educationPhoto
        },
        {
          year: "2005-2006",
          title: "Master in Project Management",
          location: "Università degli Studi di Milano, Italia",
          description: "Ha completato il Master in Project Management con stage presso la business school ISTUD, ponendo le basi per il pensiero strategico e la leadership aziendale.",
          icon: "🎓",
          image: educationPhoto
        },
        {
          year: "2009-2014",
          title: "Leadership Educativa",
          location: "Italia e Norvegia",
          description: "Ha iniziato come insegnante di lingua inglese, evolvendosi in consulente di leadership educativa. Ha fondato Mondelio, un'organizzazione no-profit con oltre 300 membri che offre corsi gratuiti.",
          icon: "👨‍🏫",
          image: teachingPhoto
        },
        {
          year: "2010-2023",
          title: "Impero Gestione Immobiliare",
          location: "Italia",
          description: "Ha costruito e gestito oltre 250 annunci di affitti brevi, raggiungendo il Top 3 della classifica nazionale su Airbnb con oltre €150k di fatturato annuale.",
          icon: "🏠",
          image: airbnbPhoto
        },
        {
          year: "2022-Presente",
          title: "Coaching Potenziato da IA",
          location: "Globale",
          description: "Ha lanciato il business di coaching Mondosol, integrando 12 assistenti virtuali IA per fornire coaching personalizzato in 4 lingue attraverso molteplici settori.",
          icon: "🤖",
          image: aiCoachingPhoto
        },
        {
          year: "2023-Presente",
          title: "Vita in Norvegia",
          location: "Hønefoss, Norvegia",
          description: "Lavora come insegnante di scuola materna e supplente mentre espande il business di coaching a livello internazionale, collegando educazione e imprenditorialità.",
          icon: "🇳🇴",
          image: norwayPhoto
        },
        {
          year: "2025",
          title: "Specialista Trasformazione Digitale",
          location: "Norvegia e Globale",
          description: "Si concentra su content marketing, SEO e strategie digitali multilingue. Aiuta le aziende a trasformarsi attraverso l'integrazione dell'IA e l'innovazione digitale.",
          icon: "💻",
          image: currentPhoto
        }
      ],
      philosophy: {
        title: "La Mia Filosofia",
        subtitle: "Trasformazione Attraverso Tecnologia e Connessione Umana",
        points: [
          {
            title: "Resilienza Attraverso le Avversità",
            description: "Ogni battuta d'arresto è una preparazione per un ritorno. La mia perdita di €150k mi ha insegnato che il fallimento non è l'opposto del successo—è un trampolino di lancio verso di esso.",
            icon: "💪"
          },
          {
            title: "Sinergia IA-Umano",
            description: "La tecnologia amplifica il potenziale umano. Combinando strumenti IA con coaching personalizzato, possiamo ottenere risultati senza precedenti nella trasformazione personale e aziendale.",
            icon: "🔗"
          },
          {
            title: "Vantaggio Multiculturale",
            description: "Parlare 4 lingue e vivere in 3 paesi mi ha insegnato che la diversità di prospettiva è la chiave per soluzioni innovative e successo globale.",
            icon: "🌐"
          },
          {
            title: "Apprendimento Continuo",
            description: "Dall'insegnamento alla gestione immobiliare al coaching IA, credo nel costante evolversi e adattarsi a nuove sfide e opportunità.",
            icon: "📈"
          }
        ]
      },
      achievements: {
        title: "Risultati Chiave",
        items: [
          { label: "Top 3 Host Airbnb", value: "Classifica Nazionale Italia", icon: "🏆" },
          { label: "Proprietà Gestite", value: "250+ Annunci", icon: "🏠" },
          { label: "Fatturato Annuale", value: "€150k+", icon: "💰" },
          { label: "Lingue Parlate", value: "4 Fluentemente", icon: "🗣️" },
          { label: "Assistenti IA", value: "12 Attivi", icon: "🤖" },
          { label: "Anni di Esperienza", value: "20+ Internazionali", icon: "📅" },
          { label: "Settori Serviti", value: "10+ Diversi", icon: "🏢" },
          { label: "Paesi Vissuti", value: "3 (Italia, Francia, Norvegia)", icon: "🌍" }
        ]
      }
    },
    no: {
      hero: {
        title: "ELIOS HISTORIE",
        subtitle: "Fra Sicilia til Verden",
        description: "En reise av motstandskraft, innovasjon og transformasjon på tvers av tre land og flere bransjer."
      },
      timeline: [
        {
          year: "1978",
          title: "Født på Sicilia",
          location: "Italia",
          description: "Født 1. oktober 1978 på Sicilia, Italia. Vokste opp i en levende middelhavsk kultur som verdsetter familie, hardt arbeid og entreprenørånd.",
          icon: "👶",
          image: childhoodPhoto
        },
        {
          year: "1996-2002",
          title: "Universitetsutdanning",
          location: "Italia",
          description: "Tok høyere utdanning i Italia, utviklet et sterkt grunnlag i business og internasjonale relasjoner som ville forme fremtidige karriereveier.",
          icon: "📚",
          image: youngElio
        },
        {
          year: "2003-2004",
          title: "Erasmus Utvekslingsprogram",
          location: "Sciences Po Grenoble, Frankrike",
          description: "Studerte offentlig administrasjon gjennom Den Europeiske Unions utvekslingsprogram, utviklet multikulturelle perspektiver og internasjonale nettverksferdigheter.",
          icon: "🌍",
          image: educationPhoto
        },
        {
          year: "2005-2006",
          title: "Master i Prosjektledelse",
          location: "Università degli Studi di Milano, Italia",
          description: "Fullførte Master i Prosjektledelse med praktikum ved ISTUD handelshøyskole, la grunnlaget for strategisk tenkning og forretningsledelse.",
          icon: "🎓",
          image: educationPhoto
        },
        {
          year: "2009-2014",
          title: "Pedagogisk Lederskap",
          location: "Italia og Norge",
          description: "Startet som engelsklærer, utviklet seg til pedagogisk ledelseskonsulent. Grunnla Mondelio, en ideell organisasjon med 300+ medlemmer som tilbyr gratis kurs.",
          icon: "👨‍🏫",
          image: teachingPhoto
        },
        {
          year: "2010-2023",
          title: "Eiendomsforvaltningsimperium",
          location: "Italia",
          description: "Bygget og forvaltet 250+ korttidsutleie annonser, oppnådde Top 3 rangering nasjonalt på Airbnb-plattformen med €150k+ årlig inntekt.",
          icon: "🏠",
          image: airbnbPhoto
        },
        {
          year: "2022-Nåtid",
          title: "AI-Drevet Coaching",
          location: "Global",
          description: "Lanserte Mondosol coaching-virksomhet, integrerte 12 AI virtuelle assistenter for å gi personlig coaching på 4 språk på tvers av flere bransjer.",
          icon: "🤖",
          image: aiCoachingPhoto
        },
        {
          year: "2023-Nåtid",
          title: "Liv i Norge",
          location: "Hønefoss, Norge",
          description: "Jobber som barnehagelærer og vikar mens han utvider coaching-virksomheten internasjonalt, brobygger mellom utdanning og entreprenørskap.",
          icon: "🇳🇴",
          image: norwayPhoto
        },
        {
          year: "2025",
          title: "Digital Transformasjonsspesialist",
          location: "Norge og Global",
          description: "Fokuserer på innholdsmarkedsføring, SEO og flerspråklige digitale strategier. Hjelper bedrifter med å transformere gjennom AI-integrasjon og digital innovasjon.",
          icon: "💻",
          image: currentPhoto
        }
      ],
      philosophy: {
        title: "Min Filosofi",
        subtitle: "Transformasjon Gjennom Teknologi og Menneskelig Forbindelse",
        points: [
          {
            title: "Motstandskraft Gjennom Motgang",
            description: "Hvert tilbakeslag er en forberedelse til et comeback. Mitt €150k tap lærte meg at fiasko ikke er det motsatte av suksess—det er et springbrett til det.",
            icon: "💪"
          },
          {
            title: "AI-Menneskelig Synergi",
            description: "Teknologi forsterker menneskelig potensial. Ved å kombinere AI-verktøy med personlig coaching kan vi oppnå enestående resultater i personlig og forretningsmessig transformasjon.",
            icon: "🔗"
          },
          {
            title: "Multikulturell Fordel",
            description: "Å snakke 4 språk og bo i 3 land har lært meg at mangfold av perspektiv er nøkkelen til innovative løsninger og global suksess.",
            icon: "🌐"
          },
          {
            title: "Kontinuerlig Læring",
            description: "Fra undervisning til eiendomsforvaltning til AI-coaching, tror jeg på konstant utvikling og tilpasning til nye utfordringer og muligheter.",
            icon: "📈"
          }
        ]
      },
      achievements: {
        title: "Nøkkelprestasjoner",
        items: [
          { label: "Top 3 Airbnb Vert", value: "Italia Nasjonal Rangering", icon: "🏆" },
          { label: "Eiendommer Forvaltet", value: "250+ Annonser", icon: "🏠" },
          { label: "Årlig Inntekt", value: "€150k+", icon: "💰" },
          { label: "Språk Snakket", value: "4 Flytende", icon: "🗣️" },
          { label: "AI Assistenter", value: "12 Aktive", icon: "🤖" },
          { label: "År Erfaring", value: "20+ Internasjonal", icon: "📅" },
          { label: "Bransjer Betjent", value: "10+ Forskjellige", icon: "🏢" },
          { label: "Land Bodd", value: "3 (Italia, Frankrike, Norge)", icon: "🌍" }
        ]
      }
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-6">
              {currentContent.hero.title}
            </h1>
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              {currentContent.hero.subtitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentContent.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section with Images */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {currentContent.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-lg">
                      {item.icon} {item.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-3">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-yellow-400 mb-4">
              {currentContent.philosophy.title}
            </h2>
            <p className="text-2xl text-gray-300">
              {currentContent.philosophy.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.philosophy.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-yellow-400 text-center mb-16"
          >
            {currentContent.achievements.title}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentContent.achievements.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

