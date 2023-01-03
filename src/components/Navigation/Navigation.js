import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import HiddenMenu from '../HiddenMenu/HiddenMenu';

function Navigation() {
    const [toggle, setToggle] = useState(true);

    const onClickOpenMenu = () => {
        setToggle(false);
    };

    const onClickCloseMenu = () => {
        setToggle(true);
    };

    return (
        <>
            {toggle ? (
                <div className='nav-menu__menu-adapt' onClick={onClickOpenMenu}></div>
            ) : (
                <HiddenMenu onClickCloseMenu={onClickCloseMenu} />
            )}
            <nav className='nav__menu'>

                <NavLink
                    to='/catalog'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Каталог
                </NavLink>

                <NavLink
                    to='/shopper'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Покупателям
                </NavLink>
                <NavLink
                    to='/portfolio'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Наши работы
                </NavLink>
                <NavLink
                    to='/contacts'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Контакты
                </NavLink>

            </nav>
        </>
    );
};

export default Navigation; 