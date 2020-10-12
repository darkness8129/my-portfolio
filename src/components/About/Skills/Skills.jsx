import React from 'react';
import Skill from './Skill/Skill';

const skillsData = [
    {
        id: 1,
        level: 90,
        title: 'HTML5',
    },
    {
        id: 2,
        level: 90,
        title: 'CSS3',
    },
    {
        id: 3,
        level: 80,
        title: 'JavaScript',
    },
    {
        id: 4,
        level: 70,
        title: 'ReactJs',
    },
    {
        id: 5,
        level: 70,
        title: 'Redux',
    },
    {
        id: 6,
        level: 65,
        title: 'SCSS',
    },
    {
        id: 7,
        level: 60,
        title: 'Bootstrap',
    },
    {
        id: 8,
        level: 40,
        title: 'jQuery',
    },
    {
        id: 9,
        level: 50,
        title: 'Git',
    },
    {
        id: 10,
        level: 70,
        title: 'npm/yarn',
    },
    {
        id: 11,
        level: 30,
        title: 'node.js',
    },
    {
        id: 12,
        level: 70,
        title: 'VS Code',
    },
];

const Skills = () => {
    const skills = skillsData.map((skill) => {
        return (
            <div key={skill.id} className='col-6 col-md-3'>
                <Skill level={skill.level} title={skill.title} />
            </div>
        );
    });

    return <div className='row'>{skills}</div>;
};

export default Skills;
