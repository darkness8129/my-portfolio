import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import ContactItem from './ContactItem/ContactItem';
import './ContactText.scss';

const ContactText = () => {
    return (
        <div className='contact-info'>
            <h3 className='text-uppercase'>
                <b>Don't be shy!</b>
            </h3>
            <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
            </p>
            <ContactItem action='Mail me' info='yaroslaw460@gmail.com' />
            <ContactItem action='Phone me' info='+380961952963' />
            <SocialIcons />
        </div>
    );
};

export default ContactText;
