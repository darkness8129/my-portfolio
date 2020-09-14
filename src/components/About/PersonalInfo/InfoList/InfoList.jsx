import React from 'react';
import './InfoList.scss';
import InfoListItem from './InfoListItem/InfoListItem';

const InfoList = ({ infoListData }) => {
    const infoList = infoListData.map((item) => {
        return (
            <InfoListItem key={item.id} title={item.title} info={item.title} />
        );
    });

    return <ul className='info-list'>{infoList}</ul>;
};

export default InfoList;
