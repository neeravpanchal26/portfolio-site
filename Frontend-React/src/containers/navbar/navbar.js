// Default imports
import React, {Component} from 'react';

// Custom imports
import {NavLink} from "react-router-dom";
import './navbar.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {MdHome, MdInfo, MdWork, MdPhone, MdMenu} from 'react-icons/md';
import {connect} from 'react-redux';
import $ from "jquery";
import Initials from '../../assets/favicon.png';

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
        const {firstName, lastName, email} = this.props.personalInfo;
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
                            <img alt='initials' className="circle" src={Initials}/>
                            <span className="name">{firstName + ' ' + lastName}</span>
                            <a href={'mailto:' + email} className="email black-text">{email}</a>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/">
                            <i><MdHome/></i>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <i><MdInfo/></i>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">
                            <i><MdWork/></i>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <i><MdPhone/></i>
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
