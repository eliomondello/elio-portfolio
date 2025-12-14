import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, ArrowRight, Globe, Heart, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Import hero image
import heroImage from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'

const HomeNew = ({ language = 'en' }) => {
  // Cycling name animation
  const names = ['ELIO', 'MONDELLO', 'ANZÀ']
  const [currentNameIndex, setCurrentNameIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % names.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const content = {
    en: {
      hero: {
        subtitle: '6 COUNTRIES • 1 STORY • 47 YEARS',
        tagline: 'Finding Home Where You Choose to Stay',
        scroll: 'SCROLL TO EXPLORE'
      },
      journey: {
        title: 'THE JOURNEY',
        subtitle: 'A Life Across Six Countries',
        countries: [
          {
            flag: '🇮🇹',
            name: 'ITALY',
            years: '1978-1996, 2009-2010',
            title: 'The Roots',
            desc: 'Born in Abbiategrasso. Family, first loves, music. Founded Mondelio.',
            image: '/images/childhood/100_0349.JPG'
          },
          {
            flag: '🇺🇸',
            name: 'AMERICA',
            years: '1996-1997',
            title: 'Freedom & Discovery',
            desc: 'First solo trip at 19. Pennsylvania summer camp. Learning independence.',
            image: '/images/america/1735907852443-2556443e-90ef-4b68-98f5-1bef9534d46c_.jpg'
          },
          {
            flag: '🇬🇧',
            name: 'ENGLAND',
            years: '1998-2004, 2006',
            title: 'Work & Multiculturalism',
            desc: 'London. First jobs, English school, international friendships.',
            image: '/images/high_school/1735909757179-d74691b0-4e2d-4f0b-9c43-fdb1e045a665_.jpg'
          },
          {
            flag: '🇫🇷',
            name: 'FRANCE',
            years: '2004-2006',
            title: 'Love & University',
            desc: 'Grenoble. Erasmus. Amélie. Learning "love is letting go free."',
            image: '/images/university/grenoble.jpg'
          },
          {
            flag: '🇮🇪',
            name: 'IRELAND',
            years: '2006-2007',
            title: 'Rebirth & Resilience',
            desc: 'Dublin. Pubs, rain, music. Finding strength in starting over.',
            image: '/images/modern/IMG_20230917_191400957_HDR-EDIT.jpg'
          },
          {
            flag: '🇳🇴',
            name: 'NORWAY',
            years: '2010-Today',
            title: 'The True Home',
            desc: 'Oslo, Ringerike. Giulia born 2014. Finding freedom to be myself.',
            image: '/images/modern/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
          }
        ]
      },
      lessons: {
        title: 'LIFE LESSONS',
        subtitle: '16 Lessons From 6 Countries',
        items: [
          'Love is not waiting—it is built and lived in the present',
          'The world is big and full of opportunities',
          'If you want, you can—wanting is power',
          'People help, just ask',
          'Hard work brings freedom',
          'Listen, learn, respect, but choose what works for you',
          'Love speaks a thousand languages',
          'To love means to let free',
          'Home can be found anywhere, just open your heart',
          'Pain can become purpose',
          'When you stop clinging, love becomes lighter',
          'Not all places are for everyone, and that\'s okay',
          'Language is the key to culture',
          'The love you give, returns. Always',
          'Home is not where you\'re born, but where you choose to stay',
          'Your thoughts create your reality'
        ]
      },
      story: {
        title: 'THE STORY',
        subtitle: 'From Abbiategrasso to Ringerike',
        paragraphs: [
          'Born in October 1978 in Castelletto, near Milan, to factory worker Renato and housewife Clara. Named Elio—child of the sun, destined to bring light and questions.',
          'At 18, first trip to America with family. At 19, solo to Pennsylvania. Learning courage, independence, and that the world is bigger than imagined.',
          'London at 20. Working as waiter and barman. English school with students from everywhere. Learning that hard work equals freedom.',
          'Grenoble at 26. Erasmus. Meeting Amélie. First true love. Learning the hardest lesson: love is not possessing, it is letting go free.',
          'Dublin at 27. Rebirth under the rain. Pubs, music, resilience. Learning to get up after every fall.',
          'Oslo at 32. The cold, the silence, the challenge. Learning Norwegian, finding work, making a home. At 36, Giulia is born. Everything changes. Breaking the cycle. Teaching her that home is where you choose to stay.'
        ]
      },
      philosophy: {
        title: 'CORE PHILOSOPHY',
        subtitle: 'Accepting, Forgiving, Growing',
        values: [
          {
            icon: '🌍',
            title: 'Global Citizen',
            desc: 'Living across 6 countries taught me that home is not where you are born, but where you choose to stay.'
          },
          {
            icon: '💛',
            title: 'Breaking Patterns',
            desc: 'From love = suffering to reciprocal love with Giulia. Breaking generational cycles through awareness.'
          },
          {
            icon: '📚',
            title: 'Education First',
            desc: 'Teaching in 4 languages. Helping others grow. Sharing knowledge through speaking and writing.'
          },
          {
            icon: '🤝',
            title: 'Community & Dugnad',
            desc: 'Norwegian values of equality, balance, and helping others. Together we are stronger.'
          }
        ]
      },
      cta: {
        title: 'READY TO CREATE SOMETHING EXTRAORDINARY?',
        subtitle: 'Whether you need education, property management, or multilingual marketing—let\'s talk.',
        button: 'GET IN TOUCH'
      }
    },
    it: {
      hero: {
        subtitle: '6 PAESI • 1 STORIA • 47 ANNI',
        tagline: 'Trovare Casa Dove Scegli di Restare',
        scroll: 'SCORRI PER ESPLORARE'
      },
      journey: {
        title: 'IL VIAGGIO',
        subtitle: 'Una Vita Attraverso Sei Paesi',
        countries: [
          {
            flag: '🇮🇹',
            name: 'ITALIA',
            years: '1978-1996, 2009-2010',
            title: 'Le Radici',
            desc: 'Nato ad Abbiategrasso. Famiglia, primi amori, musica. Fondato Mondelio.',
            image: '/images/childhood/100_0349.JPG'
          },
          {
            flag: '🇺🇸',
            name: 'AMERICA',
            years: '1996-1997',
            title: 'Libertà e Scoperta',
            desc: 'Primo viaggio da solo a 19 anni. Campo estivo Pennsylvania. Imparare l\'indipendenza.',
            image: '/images/america/1735907852443-2556443e-90ef-4b68-98f5-1bef9534d46c_.jpg'
          },
          {
            flag: '🇬🇧',
            name: 'INGHILTERRA',
            years: '1998-2004, 2006',
            title: 'Lavoro e Multiculturalismo',
            desc: 'Londra. Primi lavori, scuola di inglese, amicizie internazionali.',
            image: '/images/high_school/1735909757179-d74691b0-4e2d-4f0b-9c43-fdb1e045a665_.jpg'
          },
          {
            flag: '🇫🇷',
            name: 'FRANCIA',
            years: '2004-2006',
            title: 'Amore e Università',
            desc: 'Grenoble. Erasmus. Amélie. Imparare che "amare è lasciare liberi."',
            image: '/images/university/grenoble.jpg'
          },
          {
            flag: '🇮🇪',
            name: 'IRLANDA',
            years: '2006-2007',
            title: 'Rinascita e Resilienza',
            desc: 'Dublino. Pub, pioggia, musica. Trovare forza nel ricominciare.',
            image: '/images/modern/IMG_20230917_191400957_HDR-EDIT.jpg'
          },
          {
            flag: '🇳🇴',
            name: 'NORVEGIA',
            years: '2010-Oggi',
            title: 'La Vera Casa',
            desc: 'Oslo, Ringerike. Giulia nata 2014. Trovare libertà di essere me stesso.',
            image: '/images/modern/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
          }
        ]
      },
      lessons: {
        title: 'LEZIONI DI VITA',
        subtitle: '16 Lezioni Da 6 Paesi',
        items: [
          'L\'amore non si aspetta—si costruisce e si vive nel presente',
          'Il mondo è grande e pieno di opportunità',
          'Se vuoi, puoi—volere è potere',
          'Le persone aiutano, basta chiedere',
          'Il lavoro duro porta libertà',
          'Ascolta, impara, rispetta, ma scegli ciò che fa per te',
          'L\'amore parla mille lingue',
          'Amare significa lasciare liberi',
          'Casa si può trovare ovunque, basta aprire il cuore',
          'Il dolore può diventare scopo',
          'Quando smetti di aggrapparti, l\'amore diventa leggero',
          'Non tutti i posti sono per tutti, e va bene così',
          'La lingua è la chiave della cultura',
          'L\'amore che dai, ritorna. Sempre',
          'Casa non è dove nasci, ma dove scegli di restare',
          'I tuoi pensieri creano la tua realtà'
        ]
      },
      story: {
        title: 'LA STORIA',
        subtitle: 'Da Abbiategrasso a Ringerike',
        paragraphs: [
          'Nato nell\'ottobre 1978 a Castelletto, vicino Milano, da Renato operaio e Clara casalinga. Chiamato "Elio"—bambino del sole, destinato a portare luce e domande.',
          'A 18 anni, primo viaggio in America con la famiglia. A 19, da solo in Pennsylvania. Imparare coraggio, indipendenza, e che il mondo è più grande di quanto immaginato.',
          'Londra a 20 anni. Lavorando come cameriere e barman. Scuola di inglese con studenti da ogni dove. Imparare che il lavoro duro equivale a libertà.',
          'Grenoble a 26 anni. Erasmus. Incontrare Amélie. Primo vero amore. Imparare la lezione più difficile: amare non è possedere, è lasciare liberi.',
          'Dublino a 27 anni. Rinascita sotto la pioggia. Pub, musica, resilienza. Imparare a rialzarsi dopo ogni caduta.',
          'Oslo a 32 anni. Il freddo, il silenzio, la sfida. Imparare il norvegese, trovare lavoro, fare casa. A 36 anni, nasce Giulia. Tutto cambia. Spezzare il ciclo. Insegnarle che casa è dove scegli di restare.'
        ]
      },
      philosophy: {
        title: 'FILOSOFIA DI VITA',
        subtitle: 'Accettare, Perdonare, Crescere',
        values: [
          {
            icon: '🌍',
            title: 'Cittadino Globale',
            desc: 'Vivere in 6 paesi mi ha insegnato che casa non è dove nasci, ma dove scegli di restare.'
          },
          {
            icon: '💛',
            title: 'Spezzare i Pattern',
            desc: 'Da amore = sofferenza ad amore reciproco con Giulia. Spezzare cicli generazionali attraverso consapevolezza.'
          },
          {
            icon: '📚',
            title: 'Educazione Prima',
            desc: 'Insegnare in 4 lingue. Aiutare altri a crescere. Condividere conoscenza attraverso conferenze e scrittura.'
          },
          {
            icon: '🤝',
            title: 'Comunità e Dugnad',
            desc: 'Valori norvegesi di uguaglianza, equilibrio e aiutare gli altri. Insieme siamo più forti.'
          }
        ]
      },
      cta: {
        title: 'PRONTO A CREARE QUALCOSA DI STRAORDINARIO?',
        subtitle: 'Che tu abbia bisogno di educazione, gestione immobiliare o marketing multilingue—parliamone.',
        button: 'CONTATTAMI'
      }
    },
    no: {
      hero: {
        subtitle: '6 LAND • 1 HISTORIE • 47 ÅR',
        tagline: 'Finne Hjem Der Du Velger Å Bli',
        scroll: 'RULL FOR Å UTFORSKE'
      },
      journey: {
        title: 'REISEN',
        subtitle: 'Et Liv På Tvers av Seks Land',
        countries: [
          {
            flag: '🇮🇹',
            name: 'ITALIA',
            years: '1978-1996, 2009-2010',
            title: 'Røttene',
            desc: 'Født i Abbiategrasso. Familie, første kjærlighet, musikk. Grunnla Mondelio.',
            image: '/images/childhood/100_0349.JPG'
          },
          {
            flag: '🇺🇸',
            name: 'AMERIKA',
            years: '1996-1997',
            title: 'Frihet og Oppdagelse',
            desc: 'Første soloreise som 19-åring. Pennsylvania sommerleir. Lære uavhengighet.',
            image: '/images/america/1735907852443-2556443e-90ef-4b68-98f5-1bef9534d46c_.jpg'
          },
          {
            flag: '🇬🇧',
            name: 'ENGLAND',
            years: '1998-2004, 2006',
            title: 'Arbeid og Multikulturalisme',
            desc: 'London. Første jobber, engelskskole, internasjonale vennskap.',
            image: '/images/high_school/1735909757179-d74691b0-4e2d-4f0b-9c43-fdb1e045a665_.jpg'
          },
          {
            flag: '🇫🇷',
            name: 'FRANKRIKE',
            years: '2004-2006',
            title: 'Kjærlighet og Universitet',
            desc: 'Grenoble. Erasmus. Amélie. Lære at "å elske er å slippe fri."',
            image: '/images/university/grenoble.jpg'
          },
          {
            flag: '🇮🇪',
            name: 'IRLAND',
            years: '2006-2007',
            title: 'Gjenfødelse og Motstandskraft',
            desc: 'Dublin. Puber, regn, musikk. Finne styrke i å starte på nytt.',
            image: '/images/modern/IMG_20230917_191400957_HDR-EDIT.jpg'
          },
          {
            flag: '🇳🇴',
            name: 'NORGE',
            years: '2010-I dag',
            title: 'Det Sanne Hjem',
            desc: 'Oslo, Ringerike. Giulia født 2014. Finne frihet til å være meg selv.',
            image: '/images/modern/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
          }
        ]
      },
      lessons: {
        title: 'LIVSLEKSJONER',
        subtitle: '16 Leksjoner Fra 6 Land',
        items: [
          'Kjærlighet er ikke å vente—den bygges og leves i nåtiden',
          'Verden er stor og full av muligheter',
          'Hvis du vil, kan du—vilje er makt',
          'Folk hjelper, bare spør',
          'Hardt arbeid gir frihet',
          'Lytt, lær, respekter, men velg det som fungerer for deg',
          'Kjærlighet snakker tusen språk',
          'Å elske betyr å slippe fri',
          'Hjem kan finnes hvor som helst, bare åpne hjertet',
          'Smerte kan bli formål',
          'Når du slutter å klamre, blir kjærlighet lettere',
          'Ikke alle steder er for alle, og det er greit',
          'Språk er nøkkelen til kultur',
          'Kjærligheten du gir, kommer tilbake. Alltid',
          'Hjem er ikke der du er født, men der du velger å bli',
          'Tankene dine skaper din virkelighet'
        ]
      },
      story: {
        title: 'HISTORIEN',
        subtitle: 'Fra Abbiategrasso til Ringerike',
        paragraphs: [
          'Født i oktober 1978 i Castelletto, nær Milano, til fabrikkarbeider Renato og husmor Clara. Kalt "Elio"—solens barn, bestemt til å bringe lys og spørsmål.',
          'Som 18-åring, første tur til Amerika med familien. Som 19-åring, alene til Pennsylvania. Lære mot, uavhengighet, og at verden er større enn forestilt.',
          'London som 20-åring. Jobbet som kelner og bartender. Engelskskole med studenter fra overalt. Lære at hardt arbeid er lik frihet.',
          'Grenoble som 26-åring. Erasmus. Møte Amélie. Første ekte kjærlighet. Lære den vanskeligste leksjonen: å elske er ikke å eie, det er å slippe fri.',
          'Dublin som 27-åring. Gjenfødelse under regnet. Puber, musikk, motstandskraft. Lære å reise seg etter hvert fall.',
          'Oslo som 32-åring. Kulden, stillheten, utfordringen. Lære norsk, finne jobb, lage hjem. Som 36-åring, Giulia blir født. Alt endrer seg. Bryte syklusen. Lære henne at hjem er der du velger å bli.'
        ]
      },
      philosophy: {
        title: 'KJERNEFILOSOFI',
        subtitle: 'Akseptere, Tilgi, Vokse',
        values: [
          {
            icon: '🌍',
            title: 'Global Borger',
            desc: 'Å leve i 6 land lærte meg at hjem ikke er der du er født, men der du velger å bli.'
          },
          {
            icon: '💛',
            title: 'Bryte Mønstre',
            desc: 'Fra kjærlighet = lidelse til gjensidig kjærlighet med Giulia. Bryte generasjonssykluser gjennom bevissthet.'
          },
          {
            icon: '📚',
            title: 'Utdanning Først',
            desc: 'Undervise på 4 språk. Hjelpe andre å vokse. Dele kunnskap gjennom foredrag og skriving.'
          },
          {
            icon: '🤝',
            title: 'Fellesskap og Dugnad',
            desc: 'Norske verdier om likestilling, balanse og å hjelpe andre. Sammen er vi sterkere.'
          }
        ]
      },
      cta: {
        title: 'KLAR TIL Å SKAPE NOE EKSTRAORDINÆRT?',
        subtitle: 'Enten du trenger utdanning, eiendomsforvaltning eller flerspråklig markedsføring—la oss snakke.',
        button: 'KONTAKT MEG'
      }
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Elio Mondello Anzà" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h2
            key={currentNameIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-[15vw] md:text-[20vw] font-black text-yellow-400 leading-none opacity-90"
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            {names[currentNameIndex]}
          </motion.h2>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-bold text-white mb-2 tracking-widest">
              {t.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-yellow-400 italic">
              {t.hero.tagline}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-sm tracking-widest text-white">{t.hero.scroll}</span>
          <ChevronDown className="animate-bounce text-yellow-400" />
        </motion.div>
      </section>

      {/* 2. THE JOURNEY SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">
              {t.journey.title}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300">
              {t.journey.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.journey.countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border-2 border-white/10 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="text-6xl mb-3">{country.flag}</div>
                  <h3 className="text-3xl font-black text-yellow-400 mb-1">{country.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{country.years}</p>
                  <p className="text-xl font-bold mb-2">{country.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{country.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE STORY SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">
              {t.story.title}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300">
              {t.story.subtitle}
            </p>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg px-8 py-6"
              >
                READ FULL STORY <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. LIFE LESSONS SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">
              {t.lessons.title}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300">
              {t.lessons.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.lessons.items.map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 border-l-4 border-yellow-400 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-r-lg"
              >
                <span className="text-2xl font-black text-yellow-400 min-w-[40px]">
                  {index + 1}
                </span>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">
              {t.philosophy.title}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300">
              {t.philosophy.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.philosophy.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-xl group"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              {t.cta.subtitle}
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-xl px-12 py-8 rounded-full"
              >
                {t.cta.button} <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomeNew
