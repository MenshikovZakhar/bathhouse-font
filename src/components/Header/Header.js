import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo_1.png';
import Navigation from '../Navigation/Navigation';
import telegram from '../../images/telegram_2.svg';
import phone from '../../images/phone_2.png';
import whatsapp from '../../images/whatsapp_2.svg';

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
            <div className='header__contact'>
                <p className='header__text-contact'> Связаться с нами</p>
                <ul className='header__list'>

                    <li className='header__list-item'>
                        <a href="tel:+79514652520">
                            <img className='iqon__logo-header' src={phone} alt='logo' />
                        </a>
                    </li>
                    <li className='header__list-item'>
                        <a href="https://wa.me/79514652520" target="_blank" rel="noreferrer">
                            <img className='iqon__logo-header' src={whatsapp} alt='logo' />
                        </a>
                    </li>

                    <li className='header__list-item'>
                        <a href="https://t.me/79514652520" target="_blank" rel="noreferrer">
                            <img className='iqon__logo-header' src={telegram} alt='logo' />
                        </a>
                    </li>
                </ul>
            </div>


            <Navigation />
        </header>
    );
};

export default Header;