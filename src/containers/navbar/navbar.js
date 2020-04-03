// Default imports
import React, {Component} from 'react';

// Custom imports
import {Link, NavLink} from "react-router-dom";
import './navbar.css';
import Favicon from '../../assets/favicon.png';
import Person from '../../assets/IMG_2778.jpg';
import M from 'materialize-css/dist/js/materialize';
import {MdHome, MdInfo, MdWork, MdPhone,MdMenu} from 'react-icons/md';

class Nav extends Component {
    // Form load
    componentDidMount() {
        // Side nav menu button trigger
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        return (
            // HTML here
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href='#' data-target="sideNav" className="sidenav-trigger show-on-large">
                            <i className="valign-wrapper">
                                <MdMenu size={24} />
                            </i>
                        </a>
                    </div>
                </nav>

                <ul className="sidenav" id="sideNav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img alt='person' src={Person}/>
                            </div>
                            <img alt='initials' className="circle" src={Favicon}/>
                            <span className="name black-text">Neerav Panchal</span>
                            <span className="email black-text">masterpanchieneerav@gmail.com</span>
                        </div>
                    </li>
                    <li><NavLink to="/"><i className='valign-wrapper'><MdHome size={24}/></i>Home</NavLink></li>
                    <li><NavLink to="/about"><i className='valign-wrapper'><MdInfo size={24}/></i>About</NavLink></li>
                    <li><NavLink to="/portfolio"><i className='valign-wrapper'><MdWork
                        size={24}/></i>Portfolio</NavLink></li>
                    <li><NavLink to="/contact"><i className='valign-wrapper'><MdPhone size={24}/></i>Contact</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

// Default export
export default Nav;
