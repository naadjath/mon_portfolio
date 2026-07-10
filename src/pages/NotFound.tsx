import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

interface NotFoundProps {
  darkMode?: boolean
}

const NotFound = ({ darkMode }: NotFoundProps) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 transition-colors duration-500"
      style={{ background: darkMode ? '#0a0a0a' : '#ffffff' }}
    >
      {/* Halo discret */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full blur-[140px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.05)' : 'rgba(236,72,153,0.06)' }}
        />
      </div>

      <div className="text-center max-w-lg" data-aos="fade-up">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-black leading-none mb-4">
          <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: darkMode ? '#ffffff' : '#111111' }}
        >
          Oups, page introuvable
        </h2>

        <p
          className="text-base mb-10"
          style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}
        >
          La page que tu cherches n'existe pas ou a été déplacée.
          Revenons à l'essentiel.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white
                     bg-gradient-to-r from-pink-500 to-fuchsia-500
                     shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Home className="w-5 h-5" />
          Retour à l'accueil
        </Link>
      </div>
    </section>
  )
}

export default NotFound
