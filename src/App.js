import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import './scss/base.scss'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import CV from './components/CV/CV';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row" style={{ height: 100 + 'vh' }}>
                    <Header />
                    <div className="col-lg-12">
                        <AnimatePresence exitBeforeEnter>
                            <Switch location={location} key={location.pathname}>
                                <Route exact path='/' component={Intro} />
                                <Route exact path='/about' component={About} />
                                <Route exact path='/portfolio' component={Portfolio} />
                                <Route exact path='/contact' component={Contact} />
                                <Route exact path='/cv' component={CV} />
                                <motion.Fragment exit="undefined">
                                    <Redirect to="/" />
                                </motion.Fragment>
                            </Switch>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
