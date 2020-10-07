import { motion } from 'framer-motion';
import React from 'react';
import pageTransition from '../../animationProps';
import Title from '../Title/Title';
import ProjectCard from './ProjectCard/ProjectCard';
import calculatorImg from './../../images/projects/calculator.png';
import matrixImg from './../../images/projects/matrixEffect.png';
import notesAppImg from './../../images/projects/notesApp.png';
import abiCompassImg from './../../images/projects/abiCompass.png';
import axitImg from './../../images/projects/axit.png';
import pexImg from './../../images/projects/pex.png';

const projects = [
    {
        id: 1,
        title: 'Calculator',
        link: 'https://darkness8129.github.io/dark-calculator/',
        img: calculatorImg,
    },
    {
        id: 2,
        title: 'Matrix effect',
        link: 'https://darkness8129.github.io/matrix-effect/',
        img: matrixImg,
    },
    {
        id: 3,
        title: 'Notes App',
        link: 'https://darkness8129.github.io/notes-app/',
        img: notesAppImg,
    },
    {
        id: 4,
        title: 'Abi Compass',
        link: 'https://github.com/darkness8129/abi-compass',
        img: abiCompassImg,
    },
    {
        id: 5,
        title: 'Axit',
        link: 'https://github.com/darkness8129/Axit',
        img: axitImg,
    },
    {
        id: 6,
        title: 'Pex',
        link: '#',
        img: pexImg,
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
