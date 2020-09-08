import React from 'react';
import './../scss/header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header class='header'>
            <span class='header-title-mobile'>
                Ho<span class='highlighted-text'>me</span>
            </span>
            <nav class='navbar navbar-expand-lg'>
                <button
                    class='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span class='toggler-icon'></span>
                </button>

                <div
                    class='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul class='navbar-nav mr-auto'>
                        <li class='nav-item highlighted-text'>
                            <NavLink class='nav-link' to='/intro'>
                                <i class='fas fa-home'></i>
                                <span class='nav-link-text'>Home</span>
                            </NavLink>
                        </li>
                        <li class='nav-item'>
                            <NavLink class='nav-link' to='/about'>
                                <i class='fas fa-address-card'></i>
                                <span class='nav-link-text'>About</span>
                            </NavLink>
                        </li>
                        <li class='nav-item'>
                            <NavLink class='nav-link' to='/portfolio'>
                                <i class='fas fa-briefcase'></i>
                                <span class='nav-link-text'>My projects</span>
                            </NavLink>
                        </li>
                        <li class='nav-item'>
                            <NavLink class='nav-link' to='/contact'>
                                <i class='fas fa-envelope'></i>
                                <span class='nav-link-text'>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
