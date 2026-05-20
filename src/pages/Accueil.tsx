import React from 'react'
import Hero from './hero'

interface AccueilProps {
  darkMode?: boolean
}

const Accueil = ({ darkMode }: AccueilProps) => {
  return (
    <div>
      <Hero darkMode={darkMode} />
      {/* Tes autres sections ici */}
    </div>
  )
}

export default Accueil
