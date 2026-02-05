import React from 'react'
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

const layout = ({children} : {children: React.ReactNode}) => {

    return (

         <>
         <nav>
            <ul>
                <li> <Link to="/"> Accueil</Link>  </li>
                <li> <Link to="/competence"> Compétences</Link>  </li>
                <li> <Link to="/realisation"> Réalisations </Link>  </li>
                <li> <Link to="/softSkill"> SOFT SKILLS </Link>  </li>
                <li> <Link to="/contact"> Me Contacter </Link>  </li>


                
            </ul>
         </nav>

          <main>
             {children}
             <Footer />

        </main>
         </>

  )

}

export default layout