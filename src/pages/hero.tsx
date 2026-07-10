import { useEffect, useState } from 'react'
import HeroIllustration from '../components/HeroIllustration'
// import heroPng from "../assets/hero-girl.png"; // ← décommente quand tu as ta photo

interface HeroProps {
  darkMode?: boolean
}

const Hero = ({ darkMode }: HeroProps) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80)
    return () => clearTimeout(t)
  }, [])

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/naadjath-seibou",
      color: "#0a66c2",
      bg: darkMode ? "rgba(10,102,194,0.15)" : "rgba(10,102,194,0.10)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/naadjath",
      color: darkMode ? "#d1d5db" : "#111111",
      bg: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      color: "#e1306c",
      bg: darkMode ? "rgba(225,48,108,0.12)" : "rgba(225,48,108,0.08)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "#",
      color: darkMode ? "#ffffff" : "#111111",
      bg: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
      style={{
        background: darkMode ? '#0a0a0a' : '#ffffff',
      }}
    >
      {/* Ambiance lumineuse — une seule touche de rose, discrète */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.06)' : 'rgba(236,72,153,0.07)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 flex flex-col-reverse md:flex-row
                      items-center justify-between gap-10 pt-28 pb-16 min-h-screen">

        {/* ══ GAUCHE : texte ══ */}
        <div
          className={`flex-1 max-w-[540px] transition-all duration-700 ease-out
                      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3 mb-8">
            {socialLinks.map(({ label, href, color, bg, icon }) => {
              const isReal = href !== '#'
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={isReal ? '_blank' : undefined}
                  rel={isReal ? 'noopener noreferrer' : undefined}
                  style={{ color, background: bg }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl
                             border hover:scale-110 transition-all duration-200"
                >
                  {icon}
                </a>
              )
            })}
          </div>

          {/* Titre */}
          <h1
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] mb-5"
            style={{ color: darkMode ? '#ffffff' : '#111111' }}
          >
            Salut, je suis{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
              Naadjath
            </span>
          </h1>

          {/* Rôle */}
          <p className="text-pink-500 text-xl font-semibold mb-5">
            Développeuse Full Stack — Junior
          </p>

          {/* Description */}
          <p
            className="text-base leading-7 mb-10"
            style={{ color: darkMode ? '#9ca3af' : '#374151' }}
          >
            Je me forme au développement web full stack et je continue de me spécialiser.
            J'aime aussi le design UX et la gestion de projet : au-delà du code, je cherche
            à comprendre le produit dans son ensemble.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-wrap gap-4">
            {/* Download CV — filled rose */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white
                         bg-gradient-to-r from-pink-500 to-fuchsia-500
                         shadow-[0_0_28px_rgba(236,72,153,0.4)]
                         hover:shadow-[0_0_42px_rgba(236,72,153,0.6)]
                         hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12" />
              </svg>
              Download CV
            </a>

            {/* Contact Me — outline */}
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold
                         border-2 border-pink-500 text-pink-500
                         hover:bg-pink-500 hover:text-white
                         hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        {/* ══ DROITE : illustration ══ */}
        <div
          className={`flex-1 relative flex justify-center items-end
                      min-h-[400px] md:min-h-[540px] max-w-[520px]
                      transition-all duration-700 delay-200
                      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Halo rose discret */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64
                          bg-pink-400/10 rounded-full blur-3xl" />

          {/* Illustration SVG (remplaçable par ta photo plus tard) */}
          <HeroIllustration darkMode={darkMode} />
          {/*
            Quand tu as ta photo, remplace <HeroIllustration ... /> par :
            <img
              src={heroPng}
              alt="Naadjath"
              className="relative z-10 w-72 md:w-[360px] object-contain object-bottom
                         drop-shadow-[0_0_50px_rgba(236,72,153,0.25)] animate-float"
            />
          */}

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase"
          style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>Scroll</span>
        <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
