import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

// ===== TYPES TYPESCRIPT =====
interface NavbarProps {
  darkMode: boolean;
  toggleDarkmode: () => void;
}

interface NavItem {
  name: string;
  href: string;
}

const NAVBAR = ({ darkMode, toggleDarkmode }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('Home');

  // Définir les items de navigation
  const navItems: NavItem[] = [
    { name: 'Accueil', href: '/' },
    { name: 'Compétences', href: '/competence' },
    { name: 'Skills', href: '/softSkill' },
    { name: 'Réalisation', href: '/realisation' },
    { name: 'Contact', href: '/contact' }
  ];

  const lightColors = {
    navBg: 'bg-white/80',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textActive: 'text-rose-500',
    buttonBg: 'bg-gradient-to-r from-rose-400 to-pink-500',
    borderActive: 'border-rose-500',
  };

  const darkColors = {
    navBg: 'bg-gray-900/80',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textActive: 'text-rose-400',
    buttonBg: 'bg-gradient-to-r from-rose-500 to-pink-600',
    borderActive: 'border-rose-400',
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName: string) => {
    setActiveSection(itemName);
  };

  return (
    <div className="flex justify-center w-full fixed top-4 z-50 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${colors.navBg} backdrop-blur-lg rounded-full px-6 py-3 shadow-xl border border-gray-200/20`}
      >
        <div className="flex items-center gap-8">
          {/* Logo à gauche */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-rose-500">.</span>
            </span>
          </Link>

          {/* Navigation items au centre */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name
                      ? colors.textActive
                      : colors.textSecondary
                  } hover:${colors.textActive}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                
                {/* Barre de soulignement pour l'élément actif */}
                {activeSection === item.name && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${
                      darkMode ? 'from-rose-500 to-pink-600' : 'from-rose-400 to-pink-500'
                    }`}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Bouton Dark Mode + Hire Me à droite */}
          <div className="flex items-center gap-4">
            {/* Bouton Dark Mode circulaire */}
            <motion.button
              onClick={toggleDarkmode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-rose-50'} transition-colors`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-rose-400" />
              ) : (
                <Moon className="w-5 h-5 text-rose-500" />
              )}
            </motion.button>

            {/* Bouton Hire Me */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.buttonBg} text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow`}
            >
              Me Trouver
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default NAVBAR;