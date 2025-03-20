import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-name">
          Nisarga Charitable Trust
        </NavLink>
        <ul className="nav-menu">
          <li><NavLink to="/"       className={({isActive})=> isActive? "nav-links active": "nav-links"}>Home</NavLink></li>
          <li><NavLink to="/about"    className={({isActive})=> isActive? "nav-links active": "nav-links"}>About</NavLink></li>
          <li><NavLink to="/events"   className={({isActive})=> isActive? "nav-links active": "nav-links"}>Events</NavLink></li>
          <li><NavLink to="/donate"   className={({isActive})=> isActive? "nav-links active": "nav-links"}>Donate</NavLink></li>
          <li><NavLink to="/get-involved" className={({isActive})=> isActive? "nav-links active": "nav-links"}>Get Involved</NavLink></li>
          <li><NavLink to="/gallery"  className={({isActive})=> isActive? "nav-links active": "nav-links"}>Gallery</NavLink></li>
          <li><NavLink to="/testimonials" className={({isActive})=> isActive? "nav-links active": "nav-links"}>Testimonials</NavLink></li>
          <li><NavLink to="/legal"    className={({isActive})=> isActive? "nav-links active": "nav-links"}>Legal</NavLink></li>
          <li><NavLink to="/contact"  className={({isActive})=> isActive? "nav-links active": "nav-links"}>Contact</NavLink></li> {/* Moved to the end */}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;