import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

// ===== TYPES TYPESCRIPT =====
interface NavbarProps {
  darkMode: boolean;
  toggleDarkmode: () => void;
}

interface NavItem {
  name: string;
  href: string;
}

const NAVBAR = ({ darkMode = false, toggleDarkmode }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Définir les items de navigation
  const navItems: NavItem[] = [
    { name: 'Accueil', href: '/' },
    { name: 'Compétences', href: '/competence' },
    { name: 'Réalisation', href: '/realisation' },
    { name: 'Skills', href: '/softSkill' },
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

  const goTo = (href: string) => {
    navigate(href);
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed top-4 z-50 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative ${colors.navBg} backdrop-blur-lg rounded-3xl lg:rounded-full px-5 md:px-6 py-3 shadow-xl border border-gray-200/20`}
      >
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Logo à gauche */}
          <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <span className={`text-2xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-rose-500">.</span>
            </span>
          </Link>

          {/* Navigation items au centre (desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? colors.textActive
                      : colors.textSecondary
                  } hover:${colors.textActive}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>

                {/* Barre de soulignement pour l'élément actif */}
                {location.pathname === item.href && (
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

          {/* Contrôles à droite */}
          <div className="flex items-center gap-2 md:gap-4 ml-auto lg:ml-0">
            {/* Bouton Dark Mode circulaire */}
            <motion.button
              onClick={toggleDarkmode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Changer de thème"
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-rose-50'} transition-colors`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-rose-400" />
              ) : (
                <Moon className="w-5 h-5 text-rose-500" />
              )}
            </motion.button>

            {/* Bouton Me Trouver (caché sur très petit écran) */}
            <motion.button
              onClick={() => goTo('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden sm:inline-flex ${colors.buttonBg} text-white px-5 md:px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow`}
            >
              Me Trouver
            </motion.button>

            {/* Bouton burger (mobile / tablette) */}
            <motion.button
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              className={`lg:hidden p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-rose-50'} transition-colors`}
            >
              {menuOpen ? (
                <X className={`w-5 h-5 ${colors.textPrimary}`} />
              ) : (
                <Menu className={`w-5 h-5 ${colors.textPrimary}`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Menu déroulant (mobile / tablette) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ background: darkMode ? '#111827' : '#ffffff' }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 rounded-3xl shadow-xl border border-gray-200/20 p-3"
            >
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => goTo(item.href)}
                    className={`text-left px-4 py-3 rounded-2xl font-medium transition-colors ${
                      location.pathname === item.href
                        ? `${colors.textActive} ${darkMode ? 'bg-gray-800' : 'bg-rose-50'}`
                        : `${colors.textSecondary} ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-rose-50'}`
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default NAVBAR;
