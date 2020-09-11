import React from 'react';
import './Subtitle.scss';

const Subtitle = ({ text, additionalClasses }) => {
    let className = 'subtitle';

    if (additionalClasses) {
        className += ` ${additionalClasses}`;
    }

    return <h2 className={className}>{text}</h2>;
};

export default Subtitle;
