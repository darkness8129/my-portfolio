import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ children, link }) => {
    return (
        <Link to={link} className='button'>
            {children}
        </Link>
    );
};

export default Button;
