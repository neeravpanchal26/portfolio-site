// Default imports
import React, {Component} from 'react';

// Custom imports
import {NavLink} from "react-router-dom";
import './navbar.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {MdHome, MdInfo, MdWork, MdPhone, MdMenu,MdTimeline} from 'react-icons/md';
import {connect} from 'react-redux';
import $ from "jquery";

class Nav extends Component {
    // Form load
    componentDidMount() {
        // Side nav menu button trigger
        const sidenav = document.querySelectorAll('#sideNav');
        M.Sidenav.init(sidenav, {});
        $('.sidenav-overlay').trigger('click');
    }

    render() {
        // Extracting data from redux store
        const {firstName, lastName} = this.props.personalInfo;
        return (
            // HTML here
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href='/#' data-target="sideNav" className="sidenav-trigger show-on-large">
                            <i className="valign-wrapper">
                                <MdMenu/>
                            </i>
                        </a>
                    </div>
                </nav>

                <ul className="sidenav" id="sideNav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                            </div>
                            <span className='initials'>{firstName.toString().slice(0,1)+lastName.toString().slice(0,1)}</span>
                            <span className="name">{firstName + ' ' + lastName}</span>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/">
                            <i><MdHome className='black-text' id='Icon'/></i>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <i><MdInfo className='black-text' id='Icon'/></i>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timeline">
                            <i><MdTimeline className='black-text' id='Icon'/></i>
                            Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">
                            <i><MdWork className='black-text' id='Icon'/></i>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <i><MdPhone className='black-text' id='Icon'/></i>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

// Default export
export default connect(mapStateToProps)(Nav);
