// Default imports
import React from 'react';

// Custom imports
import './home.scss';

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
                <a href='/about' className="waves-effect waves-light btn-flat white">
                    <i className="material-icons right">add</i>
                    Find out more
                </a>
            </div>
        </div>
    )
};

// Default export
export default Home;