// Default imports
import React from "react";

// Custom imports
import {FaReact} from 'react-icons/fa';
import {DiDjango} from 'react-icons/di';

const Footer = () => {
    return (
        <footer className='container'>
            <div className="center">
                <div className="divider"></div>
                Powered by <FaReact/> and <DiDjango/>.
            </div>
        </footer>
    )
};

//Default export
export default Footer;
