import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ title, link, img }) => {
    return (
        <div className='project-card'>
            <span className='project-card-title'>{title}</span>
            <div class='project-card-img'>
                <a href={link}>
                    <img src={img} alt='' className='project-img' />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
