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
        level: 80,
        title: 'React',
    },
    {
        id: 5,
        level: 80,
        title: 'Redux',
    },
    {
        id: 6,
        level: 75,
        title: 'Redux Thunk',
    },
    {
        id: 7,
        level: 50,
        title: 'Redux Form',
    },
    {
        id: 8,
        level: 70,
        title: 'React Router',
    },
    {
        id: 9,
        level: 75,
        title: 'React Hooks',
    },
    {
        id: 10,
        level: 50,
        title: 'Styled Components',
    },
    {
        id: 11,
        level: 80,
        title: 'CSS-modules',
    },
    {
        id: 12,
        level: 70,
        title: 'Sass/SCSS',
    },
    {
        id: 13,
        level: 80,
        title: 'REST API',
    },
    {
        id: 14,
        level: 60,
        title: 'Bootstrap',
    },
    {
        id: 15,
        level: 40,
        title: 'jQuery',
    },
    {
        id: 16,
        level: 50,
        title: 'Webpack',
    },
    {
        id: 17,
        level: 60,
        title: 'Git',
    },
    {
        id: 18,
        level: 70,
        title: 'npm/yarn',
    },
    {
        id: 19,
        level: 30,
        title: 'node.js',
    },
    {
        id: 20,
        level: 70,
        title: 'VS Code',
    },
    {
        id: 21,
        level: 50,
        title: 'Figma',
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
