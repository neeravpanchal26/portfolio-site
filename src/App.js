// Default imports
import React from 'react';
import './App.css';

// Module imports
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Component imports
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './containers/portfolio/portfolio';
import Contact from './components/contact/contact';

function App() {
    return (
        // HTML here
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </div>
        </Router>
    );
}

// Default export
export default App;
