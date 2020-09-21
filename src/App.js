import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import './scss/base.scss'
import { Route, Switch, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import { AnimatePresence } from 'framer-motion';

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
                                <Route path='/about' component={About} />
                                <Route path='/portfolio' component={Portfolio} />
                                <Route path='/contact' component={Contact} />
                            </Switch>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
