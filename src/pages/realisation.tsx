import { Github, ExternalLink } from 'lucide-react'

interface RealisationProps {
  darkMode?: boolean
}

interface Project {
  title: string
  description: string
  role: string // Ce que TU as fait concrètement sur le projet
  tags: string[]
  github?: string
  demo?: string
  // Mets ici le chemin d'une image dans /src/assets, sinon un dégradé s'affiche
  image?: string
}

// Remplace / complète avec tes vrais projets (titre, description, rôle, liens)
const projects: Project[] = [
  {
    title: 'My Bien',
    description:
      "Application web de gestion immobilière : les propriétaires gèrent leurs biens, leurs locataires, leurs factures et leurs documents. Authentification JWT, génération de factures PDF, envoi automatique d'e-mails et tableaux de bord propriétaire/locataire.",
    role: "Projet de fin de Bachelor mené seule, de A à Z : cadrage du besoin, conception, back-end Symfony (API sécurisée JWT, génération de factures PDF, e-mails) et front React.",
    tags: ['React', 'Symfony', 'MySQL', 'Docker', 'JWT', 'Tailwind'],
    github: 'https://github.com/naadjath/mybien-api_backend',
  },
  {
    title: 'Desktops API',
    description:
      "API REST de gestion de postes de travail (opérations CRUD), documentée avec Swagger et accompagnée d'une interface front simple pour tester les endpoints.",
    role: "Projet personnel d'apprentissage, réalisé seule pour maîtriser les étapes de création d'une API en Node.js : routes, controllers, middlewares et documentation Swagger.",
    tags: ['Node.js', 'Express', 'Swagger', 'JavaScript', 'API REST'],
    github: 'https://github.com/naadjath/desktops-api',
  },
  {
    title: 'Portfolio personnel',
    description:
      'Ce portfolio, conçu en React + TypeScript + Tailwind CSS avec dark mode, animations et design responsive.',
    role: 'Conception des maquettes, développement du front et mise en ligne.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/naadjath/mon_portfolio',
  },
]

const Realisation = ({ darkMode }: RealisationProps) => {
  return (
    <section
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-16 transition-colors duration-500"
      style={{ background: darkMode ? '#0a0a0a' : '#ffffff' }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-32 left-0 w-[450px] h-[450px] rounded-full blur-[140px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.05)' : 'rgba(236,72,153,0.06)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Mon travail
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: darkMode ? '#ffffff' : '#111111' }}
          >
            Mes{' '}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base"
            style={{ color: darkMode ? '#9ca3af' : '#374151' }}
          >
            Une sélection de projets sur lesquels j'ai travaillé. Chaque projet reflète ma
            manière de penser l'interface et l'expérience utilisateur.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:-translate-y-2"
              style={{
                background: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                boxShadow: darkMode
                  ? '0 10px 34px rgba(0,0,0,0.35)'
                  : '0 10px 34px rgba(0,0,0,0.06)',
              }}
            >
              {/* Visuel */}
              <div className="h-44 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: darkMode ? '#141414' : '#f4f4f5' }}
                  >
                    <span className="font-black text-3xl tracking-wide text-pink-500">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? '#ffffff' : '#111111' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-6 mb-4"
                  style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
                >
                  {project.description}
                </p>

                {/* Mon rôle */}
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-pink-500 mb-1">
                    Mon rôle
                  </p>
                  <p
                    className="text-sm leading-6"
                    style={{ color: darkMode ? '#d1d5db' : '#374151' }}
                  >
                    {project.role}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full text-pink-500"
                      style={{ background: darkMode ? 'rgba(236,72,153,0.12)' : 'rgba(236,72,153,0.10)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium hover:text-pink-500 transition-colors"
                      style={{ color: darkMode ? '#d1d5db' : '#374151' }}
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium hover:text-pink-500 transition-colors"
                      style={{ color: darkMode ? '#d1d5db' : '#374151' }}
                    >
                      <ExternalLink className="w-4 h-4" /> Démo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Realisation
