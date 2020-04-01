// Default imports
import React from 'react';
import './App.css';

// Module imports
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize'
import {BrowserRouter, Route} from "react-router-dom";
import 'material-icons/iconfont/material-icons.scss';

// Component imports
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './containers/portfolio/portfolio';
import Contact from './components/contact/contact';

function App() {
    return (
        // HTML here
        <BrowserRouter>
            <div className="App">
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/contact' component={Contact}/>
            </div>
        </BrowserRouter>
    );
}

// Default export
export default App;
