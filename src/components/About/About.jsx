import React from 'react';
import Skill from './Skill/Skill';
import Title from '../Title/Title';
import InfoList from './InfoList/InfoList';
import { infoList } from './InfoList/InfoListsItems';
import Button from '../Button/Button';
import Achievement from './Achievement/Achievement';
import Experience from './Experience/Experience';
import Subtitle from '../Subtitle/Subtitle';
import Delimiter from '../Delimiter/Delimiter';
const About = () => {
    return (
        <div className='content'>
            <Title bgText='Resume' firstPart='About' secondPart='me' />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-12'>
                                <Subtitle
                                    text='Personal info'
                                    additionalClasses='m-0 text-left'
                                />
                            </div>
                            <div className='col-6'>
                                <InfoList infoList={infoList.slice(0, 5)} />
                            </div>
                            <div className='col-6'>
                                <InfoList infoList={infoList.slice(5, 10)} />
                            </div>
                            <div className='col-12'>
                                <Button link='/myCV'>View CV</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5 mt-lg-0'>
                        <div className='row'>
                            <div className='col-6'>
                                <Achievement
                                    number={1}
                                    title='Years of experience'
                                />
                            </div>
                            <div className='col-6'>
                                <Achievement number={10} title='Projects' />
                            </div>
                            <div className='col-6'>
                                <Achievement
                                    number={3}
                                    title='Years in university'
                                />
                            </div>
                            <div className='col-6'>
                                <Achievement
                                    number={1}
                                    title='Years of experience'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Delimiter />
                <Subtitle text='My skills' />
                <div className='row'>
                    <div className='col-6 col-md-3'>
                        <Skill level={70} title='HTML5' />
                    </div>
                    <div className='col-6 col-md-3'>
                        <Skill level={75} title='CSS3' />
                    </div>
                    <div className='col-6 col-md-3'>
                        <Skill level={70} title='JavaScript' />
                    </div>
                    <div className='col-6 col-md-3'>
                        <Skill level={50} title='ReactJs' />
                    </div>
                    <div className='col-6 col-md-3'>
                        <Skill level={60} title='SCSS' />
                    </div>
                    <div className='col-6 col-md-3'>
                        <Skill level={50} title='Bootstrap' />
                    </div>
                    <div className='col-6 col-md-3'>
                        <Skill level={40} title='jQuery' />
                    </div>
                    <div className='col-6 col-md-3'>
                        <Skill level={40} title='Git' />
                    </div>
                </div>
                <Delimiter />
                <Subtitle text={'Experience & education'} />
                <div className='row'>
                    <div className='col-md-6 mb-5 mb-md-0'>
                        <Experience
                            timeText='October 2019 - Present'
                            position='HTML/CSS Developer - '
                            company='Freelance'
                            descrText='I was involved in the development of HTML
                            templates and writing styles and also dealt with
                            some JS scripts.'
                        />
                    </div>
                    <div className='col-md-6'>
                        <Experience
                            timeText='September 2018 - June 2022'
                            position='Bachelor degree - '
                            company='Kyiv Polytechnic Institute'
                            descrText='Student of FICT, specialty - computer
                            engineering. I am studying in the 3rd year.'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
