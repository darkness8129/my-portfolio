import React from 'react';
import './ExperienceItem.scss';

const Experience = ({ timeText, position, company, descrText }) => {
    return (
        <div>
            <div className='exp-icon'>
                <i className='fas fa-briefcase'></i>
            </div>
            <div className='col exp-block'>
                <p className='time-text'>{timeText}</p>
                <p className='activity-text'>
                    {position}
                    <span>{company}</span>
                </p>
                <p className='descr-text'>{descrText}</p>
            </div>
        </div>
    );
};

export default Experience;
