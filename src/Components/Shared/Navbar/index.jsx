import React from 'react';
import { useEffect,useState } from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
          const checkLoginStatus = () => {
              const token = localStorage.getItem('token');
              setIsLoggedIn(!!token); 
          };
          checkLoginStatus();
        },[]);

  const navLinks = isLoggedIn
    ? (location.pathname === '/dashboard'
        ? [
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Pricing', path: '/pricing' },
          ]
        : [
            { name: 'Dashboard', path: '/dashboard' },
            { name: 'About Us', path: '/about' },
            { name: 'Pricing', path: '/pricing' },
          ])
    : [
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
              <Link to={link.path} className="nav-link-item">{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
