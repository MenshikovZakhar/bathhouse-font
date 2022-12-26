import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './EquipmentNav.css';



function EquipmentNav() {

    return (
        <>
            <nav className='catalog__menu'>

                <NavLink
                    to='/catalog_3'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    До 4 человек
                </NavLink>

                <NavLink
                    to='/catalog_4'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    До 6 человек
                </NavLink>

                <NavLink
                    to='catalog_5'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    До 8 человек
                </NavLink>

            </nav>

        </>
    );
};

export default EquipmentNav; 