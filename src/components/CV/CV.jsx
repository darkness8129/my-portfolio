import { motion } from 'framer-motion';
import React, { useState } from 'react';
import pageTransition from '../../animationProps';
import Title from '../Title/Title';
import { Document, Page } from 'react-pdf';

const CV = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
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
                    {/* <embed
                        src={
                            'https://darkness8129.github.io/my-portfolio/cv.pdf'
                        }
                        width='500'
                        height='375'
                    ></embed> */}
                </div>
            </div>
        </motion.div>
    );
};

export default CV;
