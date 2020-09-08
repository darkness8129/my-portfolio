import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import './scss/base.scss'
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container-fluid">
                    <div className="row" style={{ height: 100 + 'vh' }}>
                        <Header />
                        <div className="col-lg-12">
                            <Route path='/intro' component={Intro} />
                            <Route path='/about' component={About} />
                            <Route path='/portfolio' component={Portfolio} />
                            <Route path='/contact' component={Contact} />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
