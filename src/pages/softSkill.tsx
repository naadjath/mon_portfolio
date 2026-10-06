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
    description: "Chez Rintio, j'ai travaillé dans une équipe de 8 personnes, à la fois comme développeuse et comme assistante du chef de projet.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Cadrage du besoin',
    description: "Je traduis un besoin en user stories claires, avec des critères d'acceptation, pour que toute l'équipe sache quoi livrer.",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: "Envie d'apprendre",
    description: "Je me suis formée seule à l'IA générative en codant un système RAG de A à Z, pour comprendre ce que je pourrai piloter.",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: 'Suivi du backlog',
    description: "Le chef de projet me déléguait le backlog et le tableau Jira : je les tenais à jour à partir de ses consignes.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'Qualité des livrables',
    description: "Je teste les fonctionnalités avant de les livrer et je garde un backlog propre, avec des tickets compris de tous.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Prise d'initiative",
    description: "J'ai cadré seule MyBien, de l'analyse du besoin jusqu'à la mise en ligne, sans attendre qu'on me dise quoi faire.",
    icon: <Heart className="w-6 h-6" />,
  },
]

const SoftSkill = ({ darkMode }: SoftSkillProps) => {
  return (
    <section
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 transition-colors duration-500"
      style={{ background: darkMode ? '#0a0a0a' : '#ffffff' }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full blur-[140px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.05)' : 'rgba(236,72,153,0.06)' }}
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
            Ce que j'ai déjà mis en pratique en équipe et sur mes projets, et ce que
            j'apporterai en alternance.
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
                background: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                boxShadow: darkMode
                  ? '0 8px 30px rgba(0,0,0,0.3)'
                  : '0 8px 30px rgba(0,0,0,0.05)',
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
