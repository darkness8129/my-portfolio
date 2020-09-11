import React from 'react';
import Title from '../Title/Title';
import ProjectCard from './ProjectCard/ProjectCard';

const Portfolio = () => {
    return (
        <div className='content'>
            <Title bgText='Works' firstPart='My' secondPart='Portfolio' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <ProjectCard
                            title='Calculator'
                            link='https://darkness8129.github.io/dark-calculator/'
                            img='/images/projects/calculator.png'
                        />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <ProjectCard
                            title='Matrix effect'
                            link='https://darkness8129.github.io/matrix-effect/'
                            img='/images/projects/matrixEffect.png'
                        />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <ProjectCard
                            title='Notes App'
                            link='https://github.com/darkness8129/notes-app'
                            img='images/projects/notesApp.png'
                        />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <ProjectCard
                            title='Abi compass'
                            link='https://github.com/darkness8129/abi-compass'
                            img='/images/projects/abiCompass.png'
                        />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <ProjectCard
                            title='Axit'
                            link='https://github.com/darkness8129/Axit'
                            img='/images/projects/axit.png'
                        />
                    </div>
                    <div className='col-12 col-sm-6 col-lg-4'>
                        <ProjectCard
                            title='Pex'
                            link='#'
                            img='/images/projects/pex.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
