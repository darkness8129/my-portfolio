import React from 'react';

import ExperienceItem from './ExperienceItem/ExperienceItem';

const Experience = () => {
    return (
        <div className='row'>
            <div className='col-md-6 mb-5 mb-md-0'>
                <ExperienceItem
                    timeText='October 2019 - Present'
                    position='HTML/CSS Developer - '
                    company='Freelance'
                    descrText='I was involved in the development of HTML
                            templates and writing styles and also dealt with
                            some JS scripts.'
                />
            </div>
            <div className='col-md-6'>
                <ExperienceItem
                    timeText='September 2018 - June 2022'
                    position='Bachelor degree - '
                    company='Kyiv Polytechnic Institute'
                    descrText='Student of FICT, specialty - computer
                            engineering. I am studying in the 3rd year.'
                />
            </div>
        </div>
    );
};

export default Experience;
