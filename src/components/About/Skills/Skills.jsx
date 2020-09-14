import React from 'react';
import Skill from './Skill/Skill';

const skillsData = [
    {
        id: 1,
        level: 75,
        title: 'HTML5',
    },
    {
        id: 2,
        level: 75,
        title: 'CSS3',
    },
    {
        id: 3,
        level: 70,
        title: 'JavaScript',
    },
    {
        id: 4,
        level: 50,
        title: 'ReactJs',
    },
    {
        id: 5,
        level: 60,
        title: 'SCSS',
    },
    {
        id: 6,
        level: 50,
        title: 'Bootstrap',
    },
    {
        id: 7,
        level: 40,
        title: 'jQuery',
    },
    {
        id: 8,
        level: 50,
        title: 'Git',
    },
];

const Skills = () => {
    const skills = skillsData.map((skill) => {
        return (
            <div className='col-6 col-md-3'>
                <Skill key={skill.id} level={skill.level} title={skill.title} />
            </div>
        );
    });

    return <div className='row'>{skills}</div>;
};

export default Skills;
