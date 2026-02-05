import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Layout from './assets/Layouts/layout';

import Accueil from './pages/Accueil';
import Competences from './pages/competence';
import Realisation from './pages/realisation';
import SoftSkill from './pages/softSkill';
import Contact from './pages/contact';



const App = () => {

    return <BrowserRouter>
    <Routes>
    <Route   path="/" element={<Layout><Accueil /> </Layout> }  />
    <Route   path="/competence" element={ <Layout> <Competences /> </Layout>  }  />
    <Route path="/realisation" element={<Layout> <Realisation /></Layout>} />
    <Route path="/softSkill" element={<Layout> <SoftSkill /></Layout>} />
    <Route path="/contact " element={<Layout> <Contact  /></Layout>} />



    </Routes>
    
    </BrowserRouter>

}

export default App; // a chaque fois qu'on fait un export on renvoie un objet ; il est utilisé dans main.tsx
