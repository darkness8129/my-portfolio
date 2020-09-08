import React from 'react';
import './../../scss/about.scss';

const About = () => {
    return (
        <div className='content'>
            <h1 className='text-uppercase title'>
                <b>
                    About <span className='highlighted-text'>me</span>
                </b>
                <span className='title-bg'>Resume</span>
            </h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-12'>
                                <h2 className='subtitle m-0'>Personal info</h2>
                            </div>
                            <div className='col-6'>
                                <ul className='info-list'>
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
                            <div className='col-6'>
                                <ul className='info-list'>
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
                            <div className='col-12'>
                                <a
                                    href='../filestorage/my-cv.pdf'
                                    className='button'
                                >
                                    View CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5 mt-lg-0'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='achievement'>
                                    <span className='achievement-num'>1+</span>
                                    <span className='achievement-title'>
                                        Years of experience
                                    </span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='achievement'>
                                    <span className='achievement-num'>10+</span>
                                    <span className='achievement-title'>
                                        Projects
                                    </span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='achievement'>
                                    <span className='achievement-num'>2+</span>
                                    <span className='achievement-title'>
                                        Years in university
                                    </span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='achievement'>
                                    <span className='achievement-num'>1+</span>
                                    <span className='achievement-title'>
                                        Years of experience
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='delimiter' />
                <h2 className='subtitle' style={{ textAlign: 'center' }}>
                    My skills
                </h2>
                <div className='row'>
                    <div className='col-6 col-md-3'>
                        <div className='skill-70'>
                            <span>70%</span>
                        </div>
                        <h5 className='skill-title'>HTML</h5>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='skill-75'>
                            <span>75%</span>
                        </div>
                        <h5 className='skill-title'>CSS</h5>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='skill-60'>
                            <span>60%</span>
                        </div>
                        <h5 className='skill-title'>Js</h5>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='skill-50'>
                            <span>50%</span>
                        </div>
                        <h5 className='skill-title'>React</h5>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='skill-60'>
                            <span>60%</span>
                        </div>
                        <h5 className='skill-title'>SCSS</h5>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='skill-50'>
                            <span>50%</span>
                        </div>
                        <h5 className='skill-title'>Bootstrap</h5>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='skill-40'>
                            <span>40%</span>
                        </div>
                        <h5 className='skill-title'>jQuery</h5>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div className='skill-40'>
                            <span>40%</span>
                        </div>
                        <h5 className='skill-title'>Git</h5>
                    </div>
                </div>
                <hr className='delimiter' />
                <h2 className='subtitle' style={{ textAlign: 'center' }}>
                    Experience & education
                </h2>
                <div className='row'>
                    <div className='col-md-6 mb-5 mb-md-0'>
                        <div className='row'>
                            <div className='exp-ed-icon'>
                                <i className='fas fa-briefcase  '></i>
                            </div>
                            <div className='col exp-ed-block'>
                                <p className='time-text'>
                                    October 2019 - Present
                                </p>
                                <p className='activity-text'>
                                    HTML/CSS Developer - <span>Freelance</span>
                                </p>
                                <p className='descr-text'>
                                    I was involved in the development of HTML
                                    templates and writing styles and also dealt
                                    with some JS scripts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='exp-ed-icon'>
                                <i className='fas fa-briefcase'></i>
                            </div>
                            <div className='col exp-ed-block'>
                                <p className='time-text'>
                                    September 2018 - June 2022
                                </p>
                                <p className='activity-text'>
                                    Bachelor degree -{' '}
                                    <span>Kyiv Polytechnic Institute</span>
                                </p>
                                <p className='descr-text'>
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
