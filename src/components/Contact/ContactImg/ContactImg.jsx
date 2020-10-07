import React from 'react';
import './ContactImg.scss';
import contactImg from './../../../images/contactme.jpg';

const ContactImg = () => {
    return (
        <div className='contact-img'>
            <img src={contactImg} alt='Contact me' />
        </div>
    );
};

export default ContactImg;
