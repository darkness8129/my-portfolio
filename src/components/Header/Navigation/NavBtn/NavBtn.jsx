import React from 'react';
import './NavBtn.scss';

const NavBtn = ({ toggleIsActive, isActive }) => {
    return (
        <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={toggleIsActive}
        >
            <span
                className={`toggler-icon ${
                    isActive ? ' toggler-icon_active' : ''
                }`}
            ></span>
        </button>
    );
};

export default NavBtn;
