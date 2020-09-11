import React from 'react';
import './Achievement.scss';

const Achievement = ({ number, title }) => {
    return (
        <div className='achievement'>
            <span className='achievement-num'>{number}+</span>
            <span className='achievement-title'>{title}</span>
        </div>
    );
};

export default Achievement;
