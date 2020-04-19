// Default imports
import React, {Component} from 'react';
import './App.css';

// Module imports
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize'
import {IconContext} from "react-icons";

// Component imports
import Routes from "./routes/routes";
import {connect} from "react-redux";
import * as personalInfo from './actions/action';

class App extends Component {
    // Component load
    componentDidMount() {
        this.props.GetPersonalInfo();
    }

    render() {
        return (
            // HTML here
            <IconContext.Provider value={{style: {verticalAlign: 'middle'}, size: '24px'}}>
                <div className="App">
                    <Routes/>
                </div>
            </IconContext.Provider>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

// Default export
export default connect(mapStateToProps, personalInfo)(App);
