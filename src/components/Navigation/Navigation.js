import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import HiddenMenu from '../HiddenMenu/HiddenMenu';
import menu_icon from '../../images/menu_icon.png';

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
                        isActive ? 'nav__link-2 active' : 'nav__link-2'
                    }
                >
                    <img className='menu_icon' src={menu_icon} alt='' /> Каталог
                </NavLink>
                <ul className="submenu">
                    <li className="submenu__links"><Link className="submenu__link" to="/services_1">Окрашивание</Link></li>
                    <li className="submenu__links"><Link className="submenu__link" to="/services_2">Тонирование</Link></li>
                    <li className="submenu__links"><Link className="submenu__link" to="/services_3">Женские стрижки</Link></li>
                    <li className="submenu__links"><Link className="submenu__link" to="/services_4">Профессиональный уход</Link></li>
                </ul>
                <NavLink
                    to='/delivery'
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    Доставка
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