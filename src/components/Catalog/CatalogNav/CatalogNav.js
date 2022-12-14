import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './CatalogNav.css';



function PortfolioNav() {

    return (
        <>
            <nav className='catalog__menu'>

                <NavLink
                    to='/catalog'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    Купели
                </NavLink>

                <NavLink
                    to='/catalog_2'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    Готовые решения
                </NavLink>

                <NavLink
                    to='catalog_3'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    Собери свой чан
                </NavLink>

            </nav>

        </>
    );
};

export default PortfolioNav; 