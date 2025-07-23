import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Navbar from '../Navbar';
import './style.css';
import { toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token); 
        };
        checkLoginStatus();

        const handleStorageChange = (event) => {
            if (event.key === 'token' || event.key === null) {
                checkLoginStatus();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup function: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        setIsLoggedIn(false);
        toast.info("You have been logged out.");
        navigate('/');
    };


    return (
        <header>
            <div className='logo-section'>
                <img src="images/logo.jpg" alt="logo" className='logo-img'/>
                <h1 className='header-title'>MessageToSelf</h1>
            </div>
            <div className='nav-section'>
                <Navbar/>
                {isLoggedIn ? (
                    <Button text="Log Out" buttonType="notPrimary" onClickListener={handleLogout}/>
                ) : (
                    <Button text="Log In" buttonType="notPrimary" onClickListener={() => navigate('/auth')}/>
                )}
                <Button text="Create Your Time Capsule" buttonType="primary" onClickListener={() => navigate('/create-capsule')}/>
            </div>
        </header>
    );
}

export default Header;