// Default imports
import React, {Component} from 'react';

// Custom imports
import Nav from '../navbar/navbar';
import {connect} from 'react-redux';
import * as personalInfo from '../../actions/action';
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import Footer from "../../components/footer/footer";
import Person from '../../assets/IMG_2778.jpg';
import Loader from "../../components/loader/loader";

class Contact extends Component {
    renderLoader = () => {
        const {pending} = this.props;
        if (pending) {
            return (
                <Loader/>
            );
        } else {
            return null;
        }
    }

    render() {
        const {firstName, lastName, email, gitProfileLink, linkedInLink} = this.props.personalInfo;
        return (
            // HTML here
            <div>
                <Nav/>
                {this.renderLoader()}
                <div className='container'>
                    <div className="section">
                        <div className='row'>
                            <h4>Find me...</h4>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='card'>
                        <div className='card-content'>
                            <span className='card-title center'>{firstName + ' ' + lastName}</span>
                            <div className='row'>
                                <img alt='person' className='col s12 m12 l6' src={Person}/>
                                <div className='col s12 m12 l6'>
                                    <h5>Let's build something amazing!</h5>
                                    <a href={'mailto:' + email} className='black-text'><FaEnvelope/> • {email}</a>
                                    <br/>
                                    <a href={gitProfileLink} className='black-text'><FaGithub/> • {gitProfileLink}
                                    </a>
                                    <br/>
                                    <a href={linkedInLink} className='black-text'><FaLinkedin/> • {linkedInLink}</a>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

// Default export
export default connect(mapStateToProps, personalInfo)(Contact);
