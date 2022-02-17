// Default imports
import React, { Component } from "react";
import "./App.css";

// Module imports
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";
import { IconContext } from "react-icons";

// Component imports
import Routes from "./routes/routes";
import { connect } from "react-redux";

class App extends Component {
  renderDarkMode() {
    const { darkMode } = this.props;
    if (darkMode)
      return (
        <div className="App darkMode">
          <Routes />
        </div>
      );
    else
      return (
        <div className="App">
          <Routes />
        </div>
      );
  }

  render() {
    return (
      // HTML here
      <IconContext.Provider
        value={{ style: { verticalAlign: "middle" }, size: "24px" }}
      >
        {this.renderDarkMode()}
      </IconContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// Default export
export default connect(mapStateToProps)(App);
