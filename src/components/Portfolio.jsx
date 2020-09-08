import React from 'react';
import './../scss/portfolio.scss';

const Portfolio = () => {
    return (
        <div class='content'>
            <h1 class='text-uppercase title'>
                <b>
                    My <span class='highlighted-text'>Portfolio</span>
                </b>
                <span class='title-bg'>Works</span>
            </h1>
            <div class='container'>
                <div class='row portfolio-block'>
                    <div class='col-12 col-sm-6 col-lg-4 project-card'>
                        <span class='project-card-title'>Calculator</span>
                        <div class='project-card-img'>
                            <a href='https://darkness8129.github.io/dark-calculator/'>
                                <img
                                    src='../images/project-1.png'
                                    alt=''
                                    class='project-img'
                                />
                            </a>
                        </div>
                    </div>
                    <div class='col-12 col-sm-6 col-lg-4 project-card'>
                        <span class='project-card-title'>Matrix effect</span>
                        <div class='project-card-img'>
                            <a href='https://darkness8129.github.io/matrix-effect/'>
                                <img
                                    src='../images/project-2.png'
                                    alt=''
                                    class='project-img'
                                />
                            </a>
                        </div>
                    </div>
                    <div class='col-12 col-sm-6 col-lg-4 project-card'>
                        <span class='project-card-title'>Notes app</span>
                        <div class='project-card-img'>
                            <a href='https://github.com/darkness8129/notes-app'>
                                <img
                                    src='../images/project-3.png'
                                    alt=''
                                    class='project-img'
                                />
                            </a>
                        </div>
                    </div>
                    <div class='col-12 col-sm-6 col-lg-4 project-card'>
                        <span class='project-card-title'>Abi compass</span>
                        <div class='project-card-img'>
                            <a href='https://github.com/darkness8129/abi-compass'>
                                <img
                                    src='../images/project-4.png'
                                    alt=''
                                    class='project-img'
                                />
                            </a>
                        </div>
                    </div>
                    <div class='col-12 col-sm-6 col-lg-4 project-card'>
                        <span class='project-card-title'>Axit</span>
                        <div class='project-card-img'>
                            <a href='https://github.com/darkness8129/Axit'>
                                <img
                                    src='../images/project-5.png'
                                    alt=''
                                    class='project-img'
                                />
                            </a>
                        </div>
                    </div>
                    <div class='col-12 col-sm-6 col-lg-4 project-card'>
                        <span class='project-card-title'>Pex</span>
                        <div class='project-card-img'>
                            <a href='https://darkness8129.github.io/dark-calculator/'>
                                <img
                                    src='../images/project-6.png'
                                    alt=''
                                    class='project-img'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
