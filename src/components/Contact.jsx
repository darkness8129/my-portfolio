import React from 'react';
import './../scss/contact.scss';

const Contact = () => {
    return (
        <div className='col-lg-12 content'>
            <h1 class='text-uppercase title'>
                <b>
                    Get in <span class='highlighted-text'>touch</span>
                </b>
                <span class='title-bg'>Contact</span>
            </h1>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-6 contact-info'>
                        <h3 class='text-uppercase'>
                            <b>Don't be shy!</b>
                        </h3>
                        <p>
                            Feel free to get in touch with me. I am always open
                            to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                        </p>

                        <div class='contact-info__item'>
                            <i class='fas fa-envelope'></i>
                            <span>
                                <span class='d-block text-uppercase'>
                                    Mail me
                                </span>
                                yaroslaw460@gmail.com
                            </span>
                        </div>

                        <div class='contact-info__item'>
                            <i class='fas fa-phone'></i>
                            <span>
                                <span class='d-block text-uppercase'>
                                    Phone me
                                </span>
                                +380961952953
                            </span>
                        </div>

                        <div class='social-block'>
                            <a href='https://t.me/badb1ood'>
                                <i class='fab fa-telegram'></i>
                            </a>
                            <a href='https://www.instagram.com/yukhymchuk_ya/'>
                                <i class='fab fa-instagram'></i>
                            </a>
                            <a href='https://github.com/darkness8129'>
                                <i class='fab fa-github'></i>
                            </a>
                            <a href='linkedin.com/in/yaroslav-yukhymchuk-425ba2195'>
                                <i class='fab fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                    <div class='col-6 contact-img'>
                        <img src='../images/contactme.jpg' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
