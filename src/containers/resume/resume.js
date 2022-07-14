// Default imports
import React, { Component } from "react";

// Custom imports
import Nav from "../navbar/navbar";
import { connect } from "react-redux";
import * as personalInfo from "../../actions/action";
import Footer from "../../components/footer/footer";
import Loader from "../../components/loader/loader";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

class Resume extends Component {
  // default constructor
  constructor() {
    super();
    this.state = {
      gitData: [],
      loader: false,
    };
  }

  // Form load
  componentDidMount() {}

  renderLoader = () => {
    if (this.state.loader) {
      return <Loader />;
    } else {
      return null;
    }
  };

  render() {
    return (
      // HTML here
      <div>
        <Nav />
        {this.renderLoader()}
        <div className="container">
          <div className="section">
            <div className="row">
              <h4>My Resume</h4>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row">Hello World!</div>
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
export default connect(mapStateToProps, personalInfo)(Resume);
