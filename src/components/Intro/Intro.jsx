import React from 'react';
import './Intro.scss';
import IntroText from './IntroText/IntroText';
import IntroImg from './IntroImg/IntroImg';
import { motion } from 'framer-motion';

const pageTransition = {
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: '-100vh',
    },
};

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
