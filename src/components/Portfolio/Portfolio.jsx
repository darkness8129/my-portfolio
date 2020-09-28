import { motion } from 'framer-motion';
import React from 'react';
import pageTransition from '../../animationProps';
import Title from '../Title/Title';
import ProjectCard from './ProjectCard/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Calculator',
        link: 'https://darkness8129.github.io/dark-calculator/',
        img:
            'https://darkness8129.github.io/my-portfolio/images/projects/calculator.png',
    },
    {
        id: 2,
        title: 'Matrix effect',
        link: 'https://darkness8129.github.io/matrix-effect/',
        img:
            'https://darkness8129.github.io/my-portfolio/images/projects/matrixEffect.png',
    },
    {
        id: 3,
        title: 'Notes App',
        link: 'https://darkness8129.github.io/notes-app/',
        img:
            'https://darkness8129.github.io/my-portfolio/images/projects/notesApp.png',
    },
    {
        id: 4,
        title: 'Abi Compass',
        link: 'https://github.com/darkness8129/abi-compass',
        img:
            'https://darkness8129.github.io/my-portfolio/images/projects/abiCompass.png',
    },
    {
        id: 5,
        title: 'Axit',
        link: 'https://github.com/darkness8129/Axit',
        img:
            'https://darkness8129.github.io/my-portfolio/images/projects/axit.png',
    },
    {
        id: 6,
        title: 'Pex',
        link: '#',
        img:
            'https://darkness8129.github.io/my-portfolio/images/projects/pex.png',
    },
];

const Portfolio = () => {
    const projectCards = projects.map((project) => {
        return (
            <div key={project.id} className='col-12 col-sm-6 col-lg-4'>
                <ProjectCard
                    title={project.title}
                    link={project.link}
                    img={project.img}
                />
            </div>
        );
    });

    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransition}
            className='content'
        >
            <Title bgText='Works' firstPart='My' secondPart='Portfolio' />
            <div className='container'>
                <div className='row'>{projectCards}</div>
            </div>
        </motion.div>
    );
};

export default Portfolio;
