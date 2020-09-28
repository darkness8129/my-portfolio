import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import { usePdf } from 'react-pdf-js';
import pageTransition from '../../animationProps';
import Title from '../Title/Title';
import './CV.scss';

const CV = () => {
    const canvasEl = useRef(null);

    usePdf({
        file: 'https://darkness8129.github.io/my-portfolio/cv.pdf',
        canvasEl,
    });

    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransition}
            className='content'
        >
            <Title bgText='Resume' firstPart='My' secondPart='CV' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                        <div>
                            <canvas ref={canvasEl} className='cv-document' />
                            <a
                                href='https://drive.google.com/drive/folders/1goqX8A2wyt2Tzq5KL4aK-pZZN4TqhmnM?usp=sharing'
                                className='cv-mobile-link'
                            >
                                View on GoogleDrive
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CV;
