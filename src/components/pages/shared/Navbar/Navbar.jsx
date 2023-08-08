import './Navbar.scss'

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
  <nav className="navbar">
    <NavLink to={"/"}>
      <div className="background_circle">
        <img src="../../../src/assets/img/bier_nav.svg" alt="Proooost!" />
      </div>
    </NavLink>
  </nav> 
  );
}

export default Navbar;