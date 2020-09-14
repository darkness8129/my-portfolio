import React from 'react';
import './NavBtn.scss';

const NavBtn = () => {
    return (
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
    );
};

export default NavBtn;
