import React from 'react';
import './NavBtn.scss';
import classNames from 'classnames';

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
                className={classNames('toggler-icon', {
                    'toggler-icon_active': isActive,
                })}
            ></span>
        </button>
    );
};

export default NavBtn;
