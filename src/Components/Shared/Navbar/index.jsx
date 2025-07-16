import React from 'react';
import './style.css';
import { useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

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
            key={link.name} 
            onClick={() => navigate(link.path)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;