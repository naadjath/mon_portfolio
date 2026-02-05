import {Link} from 'react-router-dom'
export const NAVBAR = () => {
  return (
<nav>
    <ul>
        <li><Link to="/">Accueil </Link> </li>
        <li><Link to="/competence">Compétences </Link> </li>
         <li><Link to="/realisation"> Réalisations </Link> </li>
         <li><Link to="/softSkill"> SOFT SKILLS </Link> </li>
        <li><Link to="/contact"> Me Contacter </Link> </li>
    </ul>
</nav>


  )
}

export default NAVBAR