import { useEffect, useState } from 'react'
// import heroPng from "../assets/hero-girl.png"; // ← décommente quand tu as ton image

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
      label: "Instagram",
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
      color: darkMode ? "#ffffff" : "#111111",
      bg: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      color: darkMode ? "#d1d5db" : "#111111",
      bg: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      color: "#ff0000",
      bg: "rgba(255,0,0,0.10)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
        </svg>
      ),
    },
  ]

  const floatingBadges = [
    { id: "ai",    symbol: "Ai", bg: "#f97316", top: "10%",    right: "4%",   size: 56, delay: "0s",    bold: true  },
    { id: "react", symbol: "⚛️", bg: "#0ea5e9", top: "4%",     right: "20%",  size: 44, delay: "0.3s",  bold: false },
    { id: "pr",    symbol: "Pr", bg: "#7c3aed", bottom: "16%", right: "6%",   size: 56, delay: "0.15s", bold: true  },
    { id: "figma", symbol: "🎨", bg: "#a855f7", top: "44%",    right: "-1%",  size: 44, delay: "0.7s",  bold: false },
    { id: "ts",    symbol: "TS", bg: "#2563eb", bottom: "30%", left: "0%",    size: 50, delay: "0.5s",  bold: true  },
    { id: "node",  symbol: "🟢", bg: "#22c55e", top: "28%",    left: "2%",    size: 42, delay: "0.9s",  bold: false },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500"
      style={{
        background: darkMode
          ? '#0b0f1a'
          : 'linear-gradient(135deg, #fff0f6 0%, #ffffff 50%, #fce7f3 100%)',
      }}
    >
      {/* Ambiance lumineuse */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[130px]"
          style={{ background: darkMode ? 'rgba(236,72,153,0.08)' : 'rgba(236,72,153,0.12)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: darkMode ? 'rgba(217,70,239,0.08)' : 'rgba(217,70,239,0.10)' }}
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
            {socialLinks.map(({ label, color, bg, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{ color, background: bg }}
                className="w-11 h-11 flex items-center justify-center rounded-xl
                           border border-pink-200/30 hover:scale-110
                           transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Titre */}
          <h1
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] mb-5"
            style={{ color: darkMode ? '#ffffff' : '#111111' }}
          >
            Salut, je suis{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent">
              Naadj
            </span>
          </h1>

          {/* Rôle */}
          <p className="text-pink-500 text-xl font-semibold mb-5">
            &lt; Développeuse Full Stack /&gt; 
          </p>

          {/* Description */}
          <p
            className="text-base leading-7 mb-10"
            style={{ color: darkMode ? '#9ca3af' : '#374151' }}
          >
            Passionnée par la création d'interfaces élégantes et d'expériences numériques
            mémorables. Du design au déploiement, je transforme tes idées en réalité. 
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
          {/* Halo rose */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64
                          bg-pink-400/20 rounded-full blur-3xl" />

          {/* PLACEHOLDER image — remplace par <img src={heroPng} ... /> quand tu as ton PNG */}
          <div
            className="relative z-10 w-72 md:w-[340px] h-[420px] md:h-[520px]
                       rounded-3xl border-2 border-dashed border-pink-400/30
                       flex flex-col items-center justify-center gap-4 text-center px-8
                       transition-colors duration-500"
            style={{
              background: darkMode
                ? 'rgba(236,72,153,0.04)'
                : 'rgba(236,72,153,0.06)',
            }}
          >
            <span className="text-8xl select-none">👩🏽‍💻</span>
            <p className="text-pink-500 text-sm font-semibold">Place ton image ici</p>
            <code
              className="text-xs px-3 py-1 rounded-lg"
              style={{
                color: darkMode ? '#6b7280' : '#9ca3af',
                background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              }}
            >
              src/assets/hero-girl.png
            </code>
          </div>
          {/*
            Quand tu as l'image, remplace le div ci-dessus par :
            <img
              src={heroPng}
              alt="Naadj"
              className="relative z-10 w-72 md:w-[360px] object-contain object-bottom
                         drop-shadow-[0_0_50px_rgba(236,72,153,0.25)] animate-float"
            />
          */}

          {/* Bulle Hi! */}
          <div
            className="absolute z-20 top-[6%] left-[44%]
                       w-16 h-16 rounded-full bg-pink-500
                       flex items-center justify-center
                       text-white font-black text-lg
                       shadow-lg shadow-pink-500/50 animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            Hi!
          </div>

          {/* Badges tech flottants */}
          {floatingBadges.map(({ id, symbol, bg, top, right, bottom, left, size, delay, bold }) => (
            <div
              key={id}
              className="absolute z-20 flex items-center justify-center text-white rounded-2xl shadow-xl animate-[float_4s_ease-in-out_infinite]"
              style={{
                background: bg,
                top, right, bottom, left,
                width: size,
                height: size,
                fontSize: size >= 50 ? 20 : 16,
                fontWeight: bold ? 800 : 400,
                animationDelay: delay,
                boxShadow: `0 8px 24px ${bg}55`,
              }}
            >
              {symbol}
            </div>
          ))}

          {/* Points déco */}
          <div className="absolute bottom-10 left-[58%] w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50" />
          <div className="absolute top-1/3 right-[4%] w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse" />
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
