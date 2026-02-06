import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './Layouts/layout';
import Accueil from './pages/Accueil';
import Competences from './pages/competence';
import Realisation from './pages/realisation';
import SoftSkill from './pages/softSkill';
import Contact from './pages/contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkmode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
        : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <BrowserRouter>
        <Routes>
          {/* On passe darkMode et toggleDarkmode à chaque Layout */}
          <Route 
            path="/" 
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <Accueil />
              </Layout>
            } 
          />
          <Route 
            path="/competence" 
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <Competences />
              </Layout>
            } 
          />
          <Route 
            path="/realisation" 
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <Realisation />
              </Layout>
            } 
          />
          <Route 
            path="/softSkill" 
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <SoftSkill />
              </Layout>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Layout darkMode={darkMode} toggleDarkmode={toggleDarkmode}>
                <Contact />
              </Layout>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;