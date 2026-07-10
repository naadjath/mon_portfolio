import { Users, MessageCircle, Lightbulb, Clock, Target, Heart } from 'lucide-react'

interface SoftSkillProps {
  darkMode?: boolean
}

interface Soft {
  title: string
  description: string
  icon: React.ReactNode
}

const softSkills: Soft[] = [
  {
    title: 'Travail en équipe',
    description: "J'aime collaborer, partager mes idées et avancer avec les autres vers un objectif commun.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Communication',
    description: "Je sais expliquer clairement mes choix techniques et écouter les besoins réels.",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: 'Curiosité',
    description: "J'apprends vite et je me forme en continu sur les nouvelles technologies du web.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: 'Organisation',
    description: "Je gère mon temps et je priorise mes tâches pour respecter les délais.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'Rigueur',
    description: "Je soigne les détails, du pixel près à la qualité du code.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Passion',
    description: "Je code parce que j'aime ça : créer des interfaces qui ont du sens me motive.",
    icon: <Heart className="w-6 h-6" />,
  },
]

const SoftSkill = ({ darkMode }: SoftSkillProps) => {
  return (
    <section
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 transition-colors duration-500"
      style={{
        background: darkMode
          ? '#0b0f1a'
          : 'linear-gradient(135deg, #fff0f6 0%, #ffffff 50%, #fce7f3 100%)',
      }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full blur-[130px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.07)' : 'rgba(236,72,153,0.10)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Au-delà du code
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: darkMode ? '#ffffff' : '#111111' }}
          >
            Mes{' '}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base"
            style={{ color: darkMode ? '#9ca3af' : '#374151' }}
          >
            Les qualités humaines qui font de moi une bonne alternante et une bonne
            coéquipière au quotidien.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s, i) => (
            <div
              key={s.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="rounded-2xl p-7 border text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                borderColor: darkMode ? 'rgba(236,72,153,0.15)' : 'rgba(236,72,153,0.2)',
                boxShadow: darkMode
                  ? '0 8px 30px rgba(0,0,0,0.3)'
                  : '0 8px 30px rgba(236,72,153,0.08)',
              }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center text-pink-500 bg-gradient-to-br from-pink-500/15 to-fuchsia-500/15">
                {s.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: darkMode ? '#ffffff' : '#111111' }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-6"
                style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkill
