import React from 'react';
import './Intro.scss';
import IntroText from './IntroText/IntroText';
import IntroImg from './IntroImg/IntroImg';
import { motion } from 'framer-motion';
import pageTransition from '../../animationProps';

const Intro = () => {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransition}
            className='row intro'
        >
            <div className='col-lg-5 order-lg-2 p-0'>
                <IntroImg />
            </div>
            <div className='col-lg-5 order-lg-1 d-flex align-items-center'>
                <IntroText />
            </div>
        </motion.div>
    );
};

export default Intro;
