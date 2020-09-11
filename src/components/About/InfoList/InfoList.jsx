import React from 'react';
import './InfoList.scss';

const InfoList = ({ infoList }) => {
    return (
        <ul className='info-list'>
            {infoList.map((item) => {
                return (
                    <li key={item.id}>
                        <span>{item.title}: </span>
                        <span>{item.info}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default InfoList;
