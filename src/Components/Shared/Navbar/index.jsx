import React from 'react';
import './style.css';
import { Link} from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
   <nav className="navbar-container">
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li 
            key={link.name}>
              <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;