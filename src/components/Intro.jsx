import React from 'react';
import './../scss/intro.scss';

const Intro = () => {
    return (
        <div class='row intro'>
            <div class='col-lg-5 order-lg-2 p-0'>
                <div class='intro-img'></div>
            </div>
            <div class='col-lg-5 order-lg-1 d-flex align-items-center'>
                <div class='text-block'>
                    <p class='text-uppercase'>
                        <b>Hello everyone!</b>
                    </p>
                    <h1 class='text-uppercase '>
                        <b>
                            I am{' '}
                            <span class='highlighted-text'>
                                Yaroslav Yukhymchuk
                            </span>
                        </b>
                    </h1>
                    <p>
                        This is my small site and if you can call it that - my
                        portfolio. I study at KPI and want to work in the field
                        of frontend development. I have already taken several
                        online courses and obtained certificates. Also, I have
                        good soft skills. I am looking for a job as a front-end
                        developer.{' '}
                    </p>
                    <a href='templates/about.html' class='button'>
                        About Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;
