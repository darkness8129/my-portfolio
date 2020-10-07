import React from 'react';
import Achievement from './Achievement/Achievement';

const achievementsData = [
    {
        id: 1,
        number: 1,
        title: 'Years of experience',
    },
    {
        id: 2,
        number: 10,
        title: 'Projects',
    },
    {
        id: 3,
        number: 12,
        title: 'Skills',
    },
    {
        id: 4,
        number: 3,
        title: 'Years in university',
    },
];

const Achievements = () => {
    const achievements = achievementsData.map((achievement) => {
        return (
            <div key={achievement.id} className='col-6'>
                <Achievement
                    number={achievement.number}
                    title={achievement.title}
                />
            </div>
        );
    });
    return <div className='row'>{achievements}</div>;
};

export default Achievements;
