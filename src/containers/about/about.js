// Default imports
import React, { Component } from "react";

// Custom imports
import Nav from "../navbar/navbar";
import { connect } from "react-redux";
import "./obout.css";
import Footer from "../../components/footer/footer";
import "material-icons";
import Loader from "../../components/loader/loader";
import { GetAbilities, GetSkills } from "../../actions/action";

class About extends Component {
  // Form load
  componentDidMount() {
    this.props.GetAbilities();
    this.props.GetSkills();
  }

  renderLoader = () => {
    const { abilities, skills } = this.props;
    if (abilities.length === 0 || skills.length === 0) {
      return <Loader />;
    } else {
      return null;
    }
  };

  renderSkills = () => {
    const { skills } = this.props;
    return skills.map((data) => (
      <div className="chip" id={data.id} key={data.id}>
        {data.title}
      </div>
    ));
  };

  renderAbilities = () => {
    const { abilities } = this.props;
    return abilities.map(({ id, title, abilityDescription, abilityIcon }) => (
      // Html build here
      <div className="col s12 m6 l3 center-align" id={id} key={id}>
        <div className="card">
          <div className="card-content">
            <i className="large material-icons" id="Icon">
              {abilityIcon}
            </i>
            <span className="card-title">{title}</span>
            <span
              dangerouslySetInnerHTML={{ __html: abilityDescription }}
            ></span>
          </div>
        </div>
      </div>
    ));
  };

  renderMe = () => {
    const { description, firstName, lastName } = this.props.personalInfo;
    return (
      <div className="col">
        <div className="card" id="me">
          <div className="card-content row">
            <div className="card-title center">
              {firstName + " " + lastName}
            </div>
            <div className="col s12 m6 l6">
              <b>Summary</b>
              <div className="divider"></div>
              <br />
              <span dangerouslySetInnerHTML={{ __html: description }}></span>
            </div>
            <div className="col s12 m6 l6">
              <b>Skilled in</b>
              <div className="divider"></div>
              <br />
              {this.renderSkills()}
            </div>
          </div>
        </div>
      </div>
    );
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
              <h4>More about me...</h4>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row">
            {this.renderAbilities()}
            {this.renderMe()}
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
export default connect(mapStateToProps, { GetSkills, GetAbilities })(About);
