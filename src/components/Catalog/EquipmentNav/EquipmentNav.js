import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './EquipmentNav.css';



function EquipmentNav() {

    return (
        <>
            <nav className='catalog__menu'>

                <NavLink
                    to='/equipment_4'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    До 4 человек
                </NavLink>

                <NavLink
                    to='/equipment_6'
                    className={({ isActive }) =>
                        isActive ? 'catalog__link active' : 'catalog__link'
                    }
                >
                    До 6 человек
                </NavLink>

                <NavLink
                    to='equipment_8'
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