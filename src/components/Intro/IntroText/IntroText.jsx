import React from 'react';
import Button from '../../Button/Button';
import './IntroText.scss';

const IntroText = () => {
    return (
        <div className='text-block'>
            <p className='text-uppercase'>
                <b>Hello everyone!</b>
            </p>
            <h1 className='text-uppercase '>
                <b>
                    I am{' '}
                    <span className='highlighted-text'>
                        Yaroslav Yukhymchuk
                    </span>
                </b>
            </h1>
            <p>
                Looking for a job as a JUNIOR FRONT-END DEVELOPER. I create
                projects with clean and supported code, improving my skills and
                enjoying it. Ready to join the team and conquer web development
                together:)
            </p>
            <Button link='/about'>About me</Button>
        </div>
    );
};

export default IntroText;
