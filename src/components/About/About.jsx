import React from 'react';
import Title from '../Title/Title';
import Experience from './Experience/Experience';
import Subtitle from '../Subtitle/Subtitle';
import Delimiter from '../Delimiter/Delimiter';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Achievements from './Achievements/Achievements';
import Skills from './Skills/Skills';
const About = () => {
    return (
        <div className='content'>
            <Title bgText='Resume' firstPart='About' secondPart='me' />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <PersonalInfo />
                    </div>
                    <div className='col-lg-6 mt-5 mt-lg-0'>
                        <Achievements />
                    </div>
                </div>
                <Delimiter />
                <Subtitle text='My skills' />
                <Skills />
                <Delimiter />
                <Subtitle text={'Experience & education'} />
                <Experience />
            </div>
        </div>
    );
};

export default About;
