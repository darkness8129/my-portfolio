import React from 'react';
import './Header.scss';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <header className='header'>
            {/* <span className='header-title-mobile'>
                Ho<span className='highlighted-text'>me</span>
            </span> */}
            <Navigation />
        </header>
    );
};

export default Header;
