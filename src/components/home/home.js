// Default imports
import React from 'react';

// Custom imports
import './home.scss';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        // HTML here
        <div className='bg'>
            <div className="contentCenter">
                <div className='fontSize'>
                    Hey, I'm <b>Neerav Panchal</b>.<br/>
                    I'm a full-stack web developer.
                </div>
                <br/>
                <NavLink to='/about' className="waves-effect waves-light btn-flat white">
                    Find out more.
                </NavLink>
            </div>
        </div>
    )
};

// Default export
export default Home;