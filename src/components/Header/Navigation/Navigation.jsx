import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavItem/NavItem';
import NavBtn from './NavBtn/NavBtn';
import classNames from 'classnames';

let navItemsArr = [
    { id: 1, link: '/', title: 'Home', icon: 'fas fa-home' },
    { id: 2, link: '/about', title: 'About', icon: 'fas fa-address-card' },
    {
        id: 3,
        link: '/portfolio',
        title: 'My Projects',
        icon: 'fas fa-briefcase',
    },
    { id: 4, link: '/contact', title: 'Contact', icon: 'fas fa-envelope' },
];

const Navigation = ({ toggleIsActive, isActive }) => {
    const navItems = navItemsArr.map((navItem) => {
        return (
            <NavigationItem
                key={navItem.id}
                link={navItem.link}
                title={navItem.title}
                icon={navItem.icon}
                toggleIsActive={toggleIsActive}
            />
        );
    });

    return (
        <nav className='navbar navbar-expand-lg'>
            <NavBtn toggleIsActive={toggleIsActive} isActive={isActive} />
            <div
                className={classNames('collapse', 'navbar-collapse', {
                    show: isActive,
                })}
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav mr-auto'>{navItems}</ul>
            </div>
        </nav>
    );
};

export default Navigation;
