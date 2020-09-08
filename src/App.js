import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import './scss/base.scss'
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div class="container-fluid">
                    <div class="row" style={{ height: 100 + 'vh' }}>
                        <Header />
                        <div class="col-lg-12">
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
