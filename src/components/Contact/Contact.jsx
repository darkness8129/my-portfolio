import React from 'react';
import ContactText from './ContactText/ContactText';
import ContactImg from './ContactImg/ContactImg';
import Title from '../Title/Title';
import { motion } from 'framer-motion';
import pageTransition from '../../animationProps';

const Contact = () => {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransition}
            className='content'
        >
            <Title bgText='Contact' firstPart='Get in' secondPart='touch' />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <ContactText />
                    </div>
                    <div className='col-6'>
                        <ContactImg />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
