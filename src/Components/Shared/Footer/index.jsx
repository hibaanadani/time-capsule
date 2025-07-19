import React from 'react';
import Navbar from '../Navbar';
import './style.css';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <Navbar />
            </div>
            <div className="footer-copyright">
                <p>&copy;{new Date().getFullYear()} MessageToSelf</p>
            </div>
        </footer>
    );
}

export default Footer;