import React from 'react';
import NAVBAR from '../components/NAVBAR'; // Importe la NAVBAR qu'on a créée
import Footer from '../components/Footer';

// ===== DÉFINITION DES TYPES =====
// Le Layout reçoit maintenant 3 props au lieu d'une seule
interface LayoutProps {
  children: React.ReactNode; // Les pages enfants (Accueil, Contact, etc.)
  darkMode: boolean; // L'état du mode sombre venant de App.tsx
  toggleDarkmode: () => void; // La fonction pour basculer le mode
}

// ===== COMPOSANT LAYOUT =====
// On déstructure les 3 props reçues depuis App.tsx
const Layout = ({ children, darkMode, toggleDarkmode }: LayoutProps) => {
  return (
    <>
      {/* ===== NAVBAR MODERNE AVEC DARK MODE ===== */}
      {/* On remplace l'ancienne <nav> basique par notre NAVBAR animée */}
      {/* On lui passe darkMode et toggleDarkmode pour qu'elle puisse : */}
      {/* 1. Afficher les bonnes couleurs selon le mode */}
      {/* 2. Permettre à l'utilisateur de changer de mode avec le bouton */}
      <NAVBAR darkMode={darkMode} toggleDarkmode={toggleDarkmode} />

      {/* ===== CONTENU PRINCIPAL ===== */}
      {/* Le contenu change selon la route active */}
      <main>
        {children} {/* Affiche : Accueil, Compétences, Réalisations, etc. */}
      </main>

      {/* ===== FOOTER ===== */}
      {/* Le footer s'affiche sur toutes les pages */}
      
      <Footer />
    </>
  );
};

export default Layout;