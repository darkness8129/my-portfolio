import React from 'react';
import InfoList from './InfoList/InfoList';
import Button from '../../Button/Button';
import Subtitle from '../../Subtitle/Subtitle';

export const infoList = [
    { title: 'First name', info: 'Yaroslav', id: 1 },
    { title: 'Last name', info: 'Yukhymchuk', id: 2 },
    { title: 'Age', info: '19 years', id: 3 },
    { title: 'Nationality', info: 'Ukrainian', id: 4 },
    { title: 'Marital status', info: 'Unmarried', id: 5 },
    { title: 'Address', info: 'Kyiv', id: 6 },
    { title: 'Phone', info: '+380961952963', id: 7 },
    { title: 'Email', info: 'yaroslaw460@gmail.com', id: 8 },
    { title: 'Languages', info: 'Ukr, Rus, Eng', id: 9 },
    { title: 'Work status', info: 'Open to work', id: 10 },
];

const PersonalInfo = () => {
    return (
        <div className='row'>
            <div className='col-12'>
                <Subtitle
                    text='Personal info'
                    additionalClasses='m-0 text-left'
                />
            </div>
            <div className='col-6'>
                <InfoList infoListData={infoList.slice(0, 5)} />
            </div>
            <div className='col-6'>
                <InfoList infoListData={infoList.slice(5, 10)} />
            </div>
            <div className='col-12'>
                <Button link='/cv'>View CV</Button>
            </div>
        </div>
    );
};

export default PersonalInfo;
