import React from 'react';

const InfoListItem = ({ title, info }) => {
    return (
        <li>
            <span>{title}: </span>
            <span>{info}</span>
        </li>
    );
};

export default InfoListItem;
