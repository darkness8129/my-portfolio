import React from 'react';
import './ContactItem.scss';

const ContactItem = ({ action, info }) => {
    return (
        <div className='contact-info__item'>
            <i className='fas fa-envelope'></i>
            <span>
                <span className='d-block text-uppercase'>{action}</span>
                {info}
            </span>
        </div>
    );
};

export default ContactItem;
