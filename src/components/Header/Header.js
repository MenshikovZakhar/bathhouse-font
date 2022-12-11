import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo_1.png';
import Navigation from '../Navigation/Navigation';

function Header({ onAppointment }) {
    const [fixedHeader, setFixedHeader] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                setFixedHeader(true);
            } else {
                setFixedHeader(false);
            }
        });
    }, []);
    return (
        <header className={fixedHeader ? 'header_active' : 'header'}>
            <Link to='/' className='header__link'>
                <img className='header__logo' src={logo} alt='logo' />
            </Link>

            <Navigation />
        </header>
    );
};

export default Header;