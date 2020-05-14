// Default Imports
import React from 'react';

// Component imports
import Home from '../containers/home/home';
import About from '../containers/about/about';
import Timeline from "../containers/timeline/timeline";
import Portfolio from '../containers/portfolio/portfolio';
import Contact from '../containers/contact/contact';
import Error from '../components/error/error';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/timeline' component={Timeline}/>
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route exact path='/contact' component={Contact}/>
                <Route path='*' component={Error}/>
            </Switch>
        </Router>
    )
};

// Default export
export default Routes;
