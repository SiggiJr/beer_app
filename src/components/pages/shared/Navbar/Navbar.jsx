import './Navbar.scss'
import bierNavImage from '../../../../assets/img/bier_nav.svg'

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
  <nav className="navbar">
    <NavLink to={"/"}>
      <div className="background_circle">
        <img src={bierNavImage} alt="Proooost!" />
      </div>
    </NavLink>
  </nav> 
  );
}

export default Navbar;