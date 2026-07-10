interface HeroIllustrationProps {
  darkMode?: boolean
}

/**
 * Illustration d'avatar de développeuse, dessinée en SVG (aucune image externe).
 * Style sobre et naturel. Se recolore selon le dark mode.
 * Remplaçable plus tard par une vraie photo.
 */
const HeroIllustration = ({ darkMode }: HeroIllustrationProps) => {
  const screen = darkMode ? '#0f172a' : '#1e293b'
  const laptop = darkMode ? '#475569' : '#cbd5e1'
  const backdrop = darkMode ? '#1e293b' : '#f1f5f9'

  // Couleurs naturelles
  const skin = '#e7b28a'
  const skinShadow = '#d99f76'
  const hair = '#3b3340'
  const top = darkMode ? '#5b677a' : '#64748b' // tenue neutre (slate)

  return (
    <svg
      viewBox="0 0 400 440"
      className="relative z-10 w-72 md:w-[340px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration d'une développeuse"
    >
      {/* Fond doux et neutre */}
      <circle cx="200" cy="205" r="165" fill={backdrop} />
      {/* Touche de rose très discrète */}
      <circle cx="150" cy="140" r="120" fill="#ec4899" opacity="0.05" />

      {/* Épaules / buste */}
      <path d="M112 410 Q114 308 200 308 Q286 308 288 410 Z" fill={top} />
      {/* Col */}
      <path d="M176 312 Q200 336 224 312 L224 340 L176 340 Z" fill={skinShadow} opacity="0.5" />

      {/* Cou */}
      <rect x="185" y="264" width="30" height="52" rx="13" fill={skinShadow} />

      {/* Cheveux (arrière) */}
      <path
        d="M136 245 Q126 148 200 148 Q274 148 264 245 L264 320 Q258 268 236 258 L236 210 L164 210 L164 258 Q142 268 136 320 Z"
        fill={hair}
      />

      {/* Tête */}
      <circle cx="200" cy="220" r="57" fill={skin} />

      {/* Frange naturelle */}
      <path
        d="M145 214 Q142 158 200 158 Q258 158 255 214 Q246 182 214 178 Q206 200 196 200 Q186 200 182 182 Q160 188 152 208 Q149 212 145 214 Z"
        fill={hair}
      />

      {/* Yeux */}
      <circle cx="182" cy="216" r="4" fill="#2d2a32" />
      <circle cx="218" cy="216" r="4" fill="#2d2a32" />
      {/* Sourcils */}
      <path d="M174 206 Q182 202 190 206" stroke="#2d2a32" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M210 206 Q218 202 226 206" stroke="#2d2a32" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Nez */}
      <path d="M200 220 L197 234 Q200 237 203 234" stroke={skinShadow} strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Sourire discret */}
      <path d="M188 242 Q200 252 212 242" stroke="#b56b52" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Base du laptop */}
      <path d="M104 404 L296 404 L318 434 L82 434 Z" fill={laptop} />
      <rect x="82" y="430" width="236" height="8" rx="4" fill={laptop} />

      {/* Écran du laptop */}
      <rect x="128" y="332" width="144" height="82" rx="8" fill={screen} />

      {/* Lignes de code (neutres) */}
      <rect x="140" y="346" width="34" height="6" rx="3" fill="#94a3b8" />
      <rect x="180" y="346" width="50" height="6" rx="3" fill="#64748b" />
      <rect x="148" y="362" width="58" height="6" rx="3" fill="#94a3b8" />
      <rect x="212" y="362" width="28" height="6" rx="3" fill="#64748b" />
      <rect x="148" y="378" width="40" height="6" rx="3" fill="#64748b" />
      <rect x="140" y="394" width="46" height="6" rx="3" fill="#94a3b8" />
    </svg>
  )
}

export default HeroIllustration
