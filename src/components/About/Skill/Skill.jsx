import React from 'react';
import './Skill.scss';

const Skill = ({ level, title }) => {
    return (
        <div>
            <div className={`skill-${level}`}>
                <span>{level}%</span>
            </div>
            <h5 className='skill-title'>{title}</h5>
        </div>
    );
};

export default Skill;
