import Hero from './hero'
import Competences from './competence'
import { Search, PenTool, Code2, CheckCircle2 } from 'lucide-react'

interface AccueilProps {
  darkMode?: boolean
}

interface Step {
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    title: 'Cadrage',
    description: "Je cherche à comprendre le besoin et l'objectif avant d'écrire la moindre ligne.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Design',
    description: "Je réfléchis au parcours utilisateur et je maquette l'interface (souvent sur Figma).",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: 'Développement',
    description: 'Je construis l\'interface en React, en soignant le code et le responsive.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Livraison',
    description: 'Je teste, je mets en ligne et je reste attentive aux retours pour améliorer.',
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
]

const Accueil = ({ darkMode }: AccueilProps) => {
  return (
    <div>
      <Hero darkMode={darkMode} />

      {/* ===== SECTION : COMPÉTENCES ===== */}
      <Competences darkMode={darkMode} />

      {/* ===== SECTION : MON APPROCHE ===== */}
      <section
        className="relative py-24 px-6 md:px-16 transition-colors duration-500"
        style={{ background: darkMode ? '#0a0a0a' : '#ffffff' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-3">
              Ma façon de travailler
            </p>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ color: darkMode ? '#ffffff' : '#111111' }}
            >
              Mon{' '}
              <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
                Approche
              </span>
            </h2>
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: darkMode ? '#9ca3af' : '#374151' }}
            >
              J'aime penser un projet de bout en bout, pas seulement le code. Voici les
              étapes par lesquelles je passe.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                  boxShadow: darkMode
                    ? '0 8px 30px rgba(0,0,0,0.3)'
                    : '0 8px 30px rgba(0,0,0,0.05)',
                }}
              >
                {/* Numéro d'étape */}
                <span
                  className="absolute top-5 right-6 text-4xl font-black opacity-10"
                  style={{ color: darkMode ? '#ffffff' : '#111111' }}
                >
                  {i + 1}
                </span>

                <div className="w-12 h-12 mb-5 rounded-xl flex items-center justify-center text-pink-500 bg-gradient-to-br from-pink-500/15 to-fuchsia-500/15">
                  {step.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? '#ffffff' : '#111111' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-6"
                  style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accueil
