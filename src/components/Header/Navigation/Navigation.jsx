import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavItem/NavItem';
import NavBtn from './NavBtn/NavBtn';

let navItemsArr = [
    { id: 1, link: '/intro', title: 'Home', icon: 'fas fa-home' },
    { id: 2, link: '/about', title: 'About', icon: 'fas fa-address-card' },
    {
        id: 3,
        link: '/portfolio',
        title: 'My Projects',
        icon: 'fas fa-briefcase',
    },
    { id: 4, link: '/contact', title: 'Contact', icon: 'fas fa-envelope' },
];

const Navigation = () => {
    const navItems = navItemsArr.map((navItem) => {
        return (
            <NavigationItem
                key={navItem.id}
                link={navItem.link}
                title={navItem.title}
                icon={navItem.icon}
            />
        );
    });

    return (
        <nav className='navbar navbar-expand-lg'>
            <NavBtn />
            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav mr-auto'>{navItems}</ul>
            </div>
        </nav>
    );
};

export default Navigation;
