// Default imports
import React, { Component } from "react";

// Custom imports
import "./contact.css";
import Nav from "../navbar/navbar";
import { connect } from "react-redux";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Footer from "../../components/footer/footer";
import Person from "../../assets/IMG_2778.jpg";
import Loader from "../../components/loader/loader";
import { GetEvents, GetSkills } from "../../actions/action";
import { printResume } from "../resume/resume";

class Contact extends Component {
  componentDidMount() {
    this.props.GetEvents();
    this.props.GetSkills();
  }

  resumeDownload = () => {
    printResume(this.props);
  };

  renderLoader = () => {
    const { pending } = this.props;
    if (pending) {
      return <Loader />;
    } else {
      return null;
    }
  };

  render() {
    const { firstName, lastName, email, gitProfileLink, linkedInLink } =
      this.props.personalInfo;
    return (
      // HTML here
      <div>
        <Nav />
        {this.renderLoader()}
        <div className="container">
          <div className="section">
            <div className="row">
              <h4>Find me...</h4>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card">
            <div className="card-content">
              <span className="card-title center">
                {firstName + " " + lastName}
              </span>
              <h5>Let's build something amazing!</h5>
              <div className="divider"></div>
              <div className="row">
                <br />
                <img alt="person" className="col s12 m12 l6" src={Person} />
                <div className="col s12 m12 l6">
                  <a href={"mailto:" + email} className="chip">
                    <FaEnvelope id="Icon" /> • {email}
                  </a>
                  <br />
                  <a href={gitProfileLink} className="chip">
                    <FaGithub id="Icon" /> • {gitProfileLink}
                  </a>
                  <br />
                  <a href={linkedInLink} className="chip">
                    <FaLinkedin id="Icon" /> • {linkedInLink}
                  </a>
                  <br />
                  <span className="chip" onClick={this.resumeDownload}>
                    <HiOutlineDocumentDownload id="Icon" /> • Click here to grab
                    my CV!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// Default export
export default connect(mapStateToProps, { GetSkills, GetEvents })(Contact);
