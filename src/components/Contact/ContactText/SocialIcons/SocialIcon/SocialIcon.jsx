import React from 'react';

const SocialIcon = ({ link, icon }) => {
    return (
        <a href={link}>
            <i className={icon}></i>
        </a>
    );
};

export default SocialIcon;
