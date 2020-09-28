import React from 'react';
import './SocialIcons.scss';
import SocialIcon from './SocialIcon/SocialIcon';

const socialIconsData = [
    { id: 1, link: 'https://t.me/badb1ood', icon: 'fab fa-telegram' },
    {
        id: 2,
        link: 'https://www.instagram.com/yukhymchuk_ya/',
        icon: 'fab fa-instagram',
    },
    { id: 3, link: 'https://github.com/darkness8129', icon: 'fab fa-github' },
    {
        id: 4,
        link: 'https://www.linkedin.com/in/yaroslav-yukhymchuk-425ba2195/',
        icon: 'fab fa-linkedin',
    },
];

const SocialIcons = () => {
    const socialIcons = socialIconsData.map((icon) => {
        return <SocialIcon key={icon.id} link={icon.link} icon={icon.icon} />;
    });

    return <div className='social-block'>{socialIcons}</div>;
};

export default SocialIcons;
