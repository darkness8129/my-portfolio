import React from 'react';
import './Title.scss';

const Title = ({ bgText, firstPart, secondPart }) => {
    return (
        <h1 className='text-uppercase title'>
            <b>
                {firstPart}{' '}
                <span className='highlighted-text'>{secondPart}</span>
            </b>
            <span className='title-bg'>{bgText}</span>
        </h1>
    );
};

export default Title;
