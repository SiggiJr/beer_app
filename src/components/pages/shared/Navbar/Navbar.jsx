import './Navbar.scss'
import bierNavImage from '../../../../assets/img/bier_nav.svg'

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
  <nav className="navbar">
    <NavLink to={"/"} className={"nav_link"}>
        <img src={bierNavImage} alt="Proooost!" />
    </NavLink>
  </nav> 
  );
}

export default Navbar;