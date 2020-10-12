import { motion } from 'framer-motion';
import React from 'react';
import pageTransition from '../../animationProps';
import Title from '../Title/Title';
import ProjectCard from './ProjectCard/ProjectCard';
import calculatorImg from './../../images/projects/calculator.png';
import matrixImg from './../../images/projects/matrixEffect.png';
import notesAppImg from './../../images/projects/notesApp.png';
import confusionImg from './../../images/projects/confusion.png';
import olloImg from './../../images/projects/ollo.png';
import calendarImg from './../../images/projects/calendar.png';

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
        title: 'Calendar',
        link: 'https://darkness8129.github.io/test-task-calendar/',
        img: calendarImg,
    },
    {
        id: 5,
        title: 'ConFusion',
        link: 'https://github.com/darkness8129/confusion',
        img: confusionImg,
    },
    {
        id: 6,
        title: 'Ollo',
        link: 'https://github.com/darkness8129/ollo',
        img: olloImg,
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
