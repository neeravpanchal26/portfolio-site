// Default imports
import React, { Component } from "react";

// Custom imports
import "./home.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { GetPersonalInfo } from "../../actions/action";
import Loader from "../../components/loader/loader";

class Home extends Component {
  // Form load
  componentDidMount() {
    this.props.GetPersonalInfo();
  }

  renderLoader = () => {
    const { pending } = this.props;
    if (pending) {
      return <Loader />;
    } else {
      return null;
    }
  };

  render() {
    const { firstName, lastName, jobTitle } = this.props.personalInfo;
    return (
      // HTML here
      <div>
        {this.renderLoader()}
        <div className="bg">
          <div className="contentCenter">
            <div className="fontSize">
              Hello, I'm <i>{firstName + " " + lastName}</i>.<br />
              I'm a <i>{jobTitle}</i>.
            </div>
            <br />
            <NavLink
              to="/about"
              className="waves-effect waves-light btn-flat white-text"
              id="btnMore"
            >
              Find out more
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// Default export
export default connect(mapStateToProps, { GetPersonalInfo })(Home);
