import { Code2, Palette, Kanban } from 'lucide-react'

interface CompetencesProps {
  darkMode?: boolean
}

interface Pillar {
  title: string
  subtitle: string
  icon: React.ReactNode
  skills: string[]
}

const pillars: Pillar[] = [
  {
    title: 'Développement',
    subtitle: 'Ce que je pratique le plus',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'PHP',
      'Symfony',
      'Node.js',
      'API REST',
      'Git & GitHub',
    ],
  },
  {
    title: 'Design & UX',
    subtitle: 'Notions que je développe',
    icon: <Palette className="w-6 h-6" />,
    skills: [
      'Figma',
      'Maquettage',
      'Parcours utilisateur',
      'Responsive design',
      'Accessibilité (bases)',
    ],
  },
  {
    title: 'Gestion de projet',
    subtitle: 'Vue en cours, mise en pratique',
    icon: <Kanban className="w-6 h-6" />,
    skills: [
      'Méthode Agile',
      'User stories',
      'Jira',
      'Cadrage du besoin',
      'Priorisation',
      'Notion / Trello',
      'Travail en équipe',
    ],
  },
]

const Competences = ({ darkMode }: CompetencesProps) => {
  return (
    <section
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 transition-colors duration-500"
      style={{ background: darkMode ? '#0a0a0a' : '#ffffff' }}
    >
      {/* Halo déco discret */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full blur-[140px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.05)' : 'rgba(236,72,153,0.06)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Ce sur quoi je travaille
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: darkMode ? '#ffffff' : '#111111' }}
          >
            Mes{' '}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-base"
            style={{ color: darkMode ? '#9ca3af' : '#374151' }}
          >
            Mon cœur de métier, c'est le développement. J'élargis progressivement vers le
            design UX et la gestion de projet pour penser un produit dans son ensemble.
          </p>
        </div>

        {/* Grille des 3 pôles */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                boxShadow: darkMode
                  ? '0 8px 30px rgba(0,0,0,0.3)'
                  : '0 8px 30px rgba(0,0,0,0.05)',
              }}
            >
              {/* En-tête */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-pink-500 bg-gradient-to-br from-pink-500/15 to-fuchsia-500/15">
                  {pillar.icon}
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: darkMode ? '#ffffff' : '#111111' }}
                >
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm mb-6 ml-14 -mt-1" style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
                {pillar.subtitle}
              </p>

              {/* Étiquettes */}
              <div className="flex flex-wrap gap-2">
                {pillar.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg"
                    style={{
                      color: darkMode ? '#e5e7eb' : '#374151',
                      background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Competences
