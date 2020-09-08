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
                This is my small site and if you can call it that - my
                portfolio. I study at KPI and want to work in the field of
                frontend development. I have already taken several online
                courses and obtained certificates. Also, I have good soft
                skills. I am looking for a job as a front-end developer.{' '}
            </p>
            <Button link='/about'>About me</Button>
        </div>
    );
};

export default IntroText;
