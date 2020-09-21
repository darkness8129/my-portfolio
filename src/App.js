import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import './scss/base.scss'
import { Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import { CSSTransition } from 'react-transition-group';

const routes = [
    { path: '/', name: 'Home', Component: Intro },
    { path: '/about', name: 'About', Component: About },
    { path: '/portfolio', name: 'Contact', Component: Portfolio },
    { path: '/contact', name: 'Contact', Component: Contact },
];

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row" style={{ height: 100 + 'vh' }}>
                    <Header />
                    <div className="col-lg-12">
                        {routes.map(({ path, Component }) => (
                            <Route key={path} exact path={path}>
                                {({ match }) => (
                                    <CSSTransition
                                        in={match != null}
                                        timeout={300}
                                        classNames="animation"
                                        unmountOnExit
                                    >
                                        <div className="animation">
                                            <Component />
                                        </div>
                                    </CSSTransition>
                                )}
                            </Route>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
