import React from 'react';
import './../scss/about.scss';

const About = () => {
    return (
        <div class='content'>
            <h1 class='text-uppercase title'>
                <b>
                    About <span class='highlighted-text'>me</span>
                </b>
                <span class='title-bg'>Resume</span>
            </h1>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-6'>
                        <div class='row'>
                            <div class='col-12'>
                                <h2 class='subtitle m-0'>Personal info</h2>
                            </div>
                            <div class='col-6'>
                                <ul class='info-list'>
                                    <li>
                                        <span>First name: </span>
                                        <span>Yaroslav</span>
                                    </li>
                                    <li>
                                        <span>Last name: </span>
                                        <span>Yukhymchuk</span>
                                    </li>
                                    <li>
                                        <span>Age: </span>
                                        <span>19 years</span>
                                    </li>
                                    <li>
                                        <span>Nationality: </span>
                                        <span>Ukrainian</span>
                                    </li>
                                    <li>
                                        <span>Marital status: </span>
                                        <span>Unmarried</span>
                                    </li>
                                </ul>
                            </div>
                            <div class='col-6'>
                                <ul class='info-list'>
                                    <li>
                                        <span>Address: </span>
                                        <span>Kyiv</span>
                                    </li>
                                    <li>
                                        <span>Phone: </span>
                                        <span>+380961952963</span>
                                    </li>
                                    <li>
                                        <span>Email: </span>
                                        <span>yaroslaw460@gmail.com</span>
                                    </li>
                                    <li>
                                        <span>Languages: </span>
                                        <span>Ukr, Rus, Eng</span>
                                    </li>
                                    <li>
                                        <span>Work status: </span>
                                        <span>Open to work</span>
                                    </li>
                                </ul>
                            </div>
                            <div class='col-12'>
                                <a
                                    href='../filestorage/my-cv.pdf'
                                    class='button'
                                >
                                    View CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-6 mt-5 mt-lg-0'>
                        <div class='row'>
                            <div class='col-6'>
                                <div class='achievement'>
                                    <span class='achievement-num'>1+</span>
                                    <span class='achievement-title'>
                                        Years of experience
                                    </span>
                                </div>
                            </div>
                            <div class='col-6'>
                                <div class='achievement'>
                                    <span class='achievement-num'>10+</span>
                                    <span class='achievement-title'>
                                        Projects
                                    </span>
                                </div>
                            </div>
                            <div class='col-6'>
                                <div class='achievement'>
                                    <span class='achievement-num'>2+</span>
                                    <span class='achievement-title'>
                                        Years in university
                                    </span>
                                </div>
                            </div>
                            <div class='col-6'>
                                <div class='achievement'>
                                    <span class='achievement-num'>1+</span>
                                    <span class='achievement-title'>
                                        Years of experience
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class='delimiter' />
                <h2 class='subtitle' style={{ textAlign: 'center' }}>
                    My skills
                </h2>
                <div class='row'>
                    <div class='col-6 col-md-3'>
                        <div class='skill-70'>
                            <span>70%</span>
                        </div>
                        <h5 class='skill-title'>HTML</h5>
                    </div>
                    <div class='col-6 col-md-3'>
                        <div class='skill-75'>
                            <span>75%</span>
                        </div>
                        <h5 class='skill-title'>CSS</h5>
                    </div>
                    <div class='col-6 col-md-3'>
                        <div class='skill-60'>
                            <span>60%</span>
                        </div>
                        <h5 class='skill-title'>Js</h5>
                    </div>
                    <div class='col-6 col-md-3'>
                        <div class='skill-50'>
                            <span>50%</span>
                        </div>
                        <h5 class='skill-title'>React</h5>
                    </div>
                    <div class='col-6 col-md-3'>
                        <div class='skill-60'>
                            <span>60%</span>
                        </div>
                        <h5 class='skill-title'>SCSS</h5>
                    </div>
                    <div class='col-6 col-md-3'>
                        <div class='skill-50'>
                            <span>50%</span>
                        </div>
                        <h5 class='skill-title'>Bootstrap</h5>
                    </div>
                    <div class='col-6 col-md-3'>
                        <div class='skill-40'>
                            <span>40%</span>
                        </div>
                        <h5 class='skill-title'>jQuery</h5>
                    </div>
                    <div class='col-6 col-md-3'>
                        <div class='skill-40'>
                            <span>40%</span>
                        </div>
                        <h5 class='skill-title'>Git</h5>
                    </div>
                </div>
                <hr class='delimiter' />
                <h2 class='subtitle' style={{ textAlign: 'center' }}>
                    Experience & education
                </h2>
                <div class='row'>
                    <div class='col-md-6 mb-5 mb-md-0'>
                        <div class='row'>
                            <div class='exp-ed-icon'>
                                <i class='fas fa-briefcase  '></i>
                            </div>
                            <div class='col exp-ed-block'>
                                <p class='time-text'>October 2019 - Present</p>
                                <p class='activity-text'>
                                    HTML/CSS Developer - <span>Freelance</span>
                                </p>
                                <p class='descr-text'>
                                    I was involved in the development of HTML
                                    templates and writing styles and also dealt
                                    with some JS scripts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-6'>
                        <div class='row'>
                            <div class='exp-ed-icon'>
                                <i class='fas fa-briefcase'></i>
                            </div>
                            <div class='col exp-ed-block'>
                                <p class='time-text'>
                                    September 2018 - June 2022
                                </p>
                                <p class='activity-text'>
                                    Bachelor degree -{' '}
                                    <span>Kyiv Polytechnic Institute</span>
                                </p>
                                <p class='descr-text'>
                                    Student of FICT, specialty - computer
                                    engineering. I'm studying in the 3rd year.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
