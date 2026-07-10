import { Github, Linkedin, Mail, Heart } from 'lucide-react'

interface FooterProps {
  darkMode?: boolean
}

export const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer
      className="border-t transition-colors duration-500"
      style={{
        background: darkMode ? '#0b0f1a' : '#ffffff',
        borderColor: darkMode ? 'rgba(236,72,153,0.15)' : 'rgba(236,72,153,0.15)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <span className="text-xl font-bold" style={{ color: darkMode ? '#ffffff' : '#111111' }}>
          Portfolio<span className="text-pink-500">.</span>
        </span>

        {/* Copyright */}
        <p className="text-sm text-center inline-flex items-center gap-1.5" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
          &copy; 2025 — Fait avec
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
          par Naadjath
        </p>

        {/* Réseaux */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/naadjath"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-pink-500 hover:scale-110 transition-transform"
            style={{ background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(236,72,153,0.08)' }}
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-pink-500 hover:scale-110 transition-transform"
            style={{ background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(236,72,153,0.08)' }}
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:naadjaths@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-pink-500 hover:scale-110 transition-transform"
            style={{ background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(236,72,153,0.08)' }}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
