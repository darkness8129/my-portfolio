import React from 'react';
import './../../scss/header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            {/* <span className='header-title-mobile'>
                Ho<span className='highlighted-text'>me</span>
            </span> */}
            <nav className='navbar navbar-expand-lg'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item highlighted-text'>
                            <NavLink className='nav-link' to='/intro'>
                                <i className='fas fa-home'></i>
                                <span className='nav-link-text'>Home</span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fas fa-address-card'></i>
                                <span className='nav-link-text'>About</span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/portfolio'>
                                <i className='fas fa-briefcase'></i>
                                <span className='nav-link-text'>
                                    My projects
                                </span>
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fas fa-envelope'></i>
                                <span className='nav-link-text'>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
