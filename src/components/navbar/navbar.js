// Default imports
import React from 'react';

// Custom imports
import './navbar.css';

const Nav = () => {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elements, {});
    });
    return (
        // HTML here
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a data-target="mobile-demo" className="sidenav-trigger show-on-large"><i
                        className="material-icons">menu</i></a>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li>
                    <div className="user-view">
                        <div className="background">
                            {/*<img src="../../assets/IMG_2778.jpg"/>*/}
                        </div>
                        {/*<a href="#user"><img className="circle" src="../../assets/IMG_2778.jpg"/></a>*/}
                        <a href="#name"><span className="name black-text">Neerav Panchal</span></a>
                        <a href="#email"><span className="email black-text">masterpanchieneerav@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="/"><i className="material-icons left">home</i>Home</a></li>
                <li><a href="/about"><i className="material-icons left">info</i>About</a></li>
                <li><a href="/portfolio"><i className="material-icons left">work</i>Portfolio</a></li>
                <li><a href="/contact"><i className="material-icons left">phone</i>Contact</a></li>
            </ul>
        </div>
    )
};

// Default export
export default Nav;
