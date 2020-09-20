import React, { useState } from 'react';
import './Header.scss';
import Navigation from './Navigation/Navigation';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => setIsActive(!isActive);

    return (
        <header className={`header ${isActive ? ' header_active' : ''}`}>
            {/* <span className='header-title-mobile'>
                Ho<span className='highlighted-text'>me</span>
            </span> */}
            <Navigation toggleIsActive={toggleIsActive} isActive={isActive} />
        </header>
    );
};

export default Header;
