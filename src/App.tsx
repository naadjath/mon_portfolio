import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './assets/Layouts/layout';
import Accueil from './pages/Accueil';
import Competences from './pages/competence';
import Realisation from './pages/realisation';
import SoftSkill from './pages/softSkill';
import Contact from './pages/contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.remove('dark');
  }, []);

  const toggleDarkmode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'bg-[#0a0a0a] min-h-screen' : 'bg-white min-h-screen'}>
      <BrowserRouter>
        <Routes>
          {/* On passe darkMode et toggleDarkmode à chaque Layout */}

          <Route
            path="/"
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                 <Accueil darkMode={darkMode} />  {/* ← ajoute darkMode ici */}
              </Layout>
             }
          />
          
         <Route
            path="/competence"
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <Competences darkMode={darkMode} />
              </Layout>
            }
          />
          <Route
            path="/realisation"
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <Realisation darkMode={darkMode} />
              </Layout>
            }
          />
          <Route
            path="/softSkill"
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <SoftSkill darkMode={darkMode} />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <Contact darkMode={darkMode} />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;