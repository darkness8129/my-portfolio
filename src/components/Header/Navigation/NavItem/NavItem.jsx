import React from 'react';
import './NavItem.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ link, title, icon }) => {
    return (
        <li className='nav-item'>
            <NavLink className='nav-link' to={link}>
                <i className={icon}></i>
                <span className='nav-link-text'>{title}</span>
            </NavLink>
        </li>
    );
};

export default NavigationItem;
