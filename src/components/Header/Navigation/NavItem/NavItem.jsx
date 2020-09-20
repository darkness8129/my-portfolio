import React from 'react';
import './NavItem.scss';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ link, title, icon, toggleIsActive }) => {
    return (
        <li className='nav-item'>
            <NavLink
                className='nav-link'
                to={link}
                activeClassName='nav-link_active'
                onClick={toggleIsActive}
            >
                <i className={icon}></i>
                <span className='nav-link-text'>{title}</span>
            </NavLink>
        </li>
    );
};

export default NavigationItem;