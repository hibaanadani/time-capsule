import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Navbar from '../Navbar';
import './style.css';

const Header=()=>{
    const navigate=useNavigate();

    return(
        <header>
            <div className='logo-section'>
            <img src="images/logo.jpg" alt="logo" className='logo-img'/>
            <h1 className='header-title'>MessageToSelf</h1>
            </div>
            <div className='nav-section'>
            <Navbar/>
            <Button text="Log In" buttonType="notPrimary" onClickListener={() => navigate('/auth')}/>
            <Button text="Create Your Time Capsule" buttonType="primary" onClickListener={() => navigate('/create-capsule')}/>
            </div>
        </header>
    )
}
export default Header;
