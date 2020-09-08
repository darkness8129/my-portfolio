import React from 'react';
import './Intro.scss';
import IntroText from './IntroText/IntroText';
import IntroImg from './IntroImg/IntroImg';

const Intro = () => {
    return (
        <div className='row intro'>
            <div className='col-lg-5 order-lg-2 p-0'>
                <IntroImg />
            </div>
            <div className='col-lg-5 order-lg-1 d-flex align-items-center'>
                <IntroText />
            </div>
        </div>
    );
};

export default Intro;
