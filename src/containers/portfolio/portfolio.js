// Default imports
import React, { Component } from "react";

// Custom imports
import axios from "axios";
import { GoGitBranch, GoRepo } from "react-icons/go";
import { connect } from "react-redux";
import Footer from "../../components/footer/footer";
import Loader from "../../components/loader/loader";
import Modal from "../../components/modal/modal";
import Nav from "../navbar/navbar";
import "./portfolio.css";

class Portfolio extends Component {
  // default constructor
  constructor() {
    super();
    this.state = {
      gitData: [],
      loader: true,
    };
  }

  // Form load
  componentDidMount() {
    const { gitApiLink } = this.props.personalInfo;
    // Get data from github api here
    axios
      .get(gitApiLink)
      .then((data) => this.setState({ gitData: data.data, loader: false }))
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.pending === true) {
      axios
        .get(this.props.gitApiLink)
        .then((data) => this.setState({ gitData: data.data, loader: false }))
        .catch((error) => console.log(error));
    }
  }

  renderLoader = () => {
    if (this.state.loader) {
      return <Loader />;
    } else {
      return null;
    }
  };

  renderRepos = () => {
    const { gitData } = this.state;
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return gitData
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .map((repo) => (
        // Html build here
        <div className="col s12 m6 l4" key={repo.id}>
          <div className="card">
            <div className="card-content">
              {repo.description ? (
                <i
                  className="material-icons right modal-trigger"
                  data-target={repo.name}
                >
                  more_horiz
                </i>
              ) : (
                ""
              )}
            </div>
            <br />
            <div className="card-image center">
              <span className="letter">{repo.language.slice(0, 1)}</span>
              <br />
              {repo.language}
            </div>
            <div className="card-content">
              <span className="card-title text-overflow">{repo.name}</span>
              <span>
                Latest commit:
                <br />
                {new Date(repo.pushed_at).toLocaleString("en-ZA", options)}
              </span>
              <div className="card-action">
                <a href={repo.html_url} className="blue-text">
                  <GoRepo />
                </a>
                <span className="right">
                  {repo.default_branch}
                  <GoGitBranch size={14} />
                </span>
              </div>
            </div>
            <Modal
              ID={repo.name}
              Heading={repo.name}
              Content={repo.description}
            />
          </div>
        </div>
      ));
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
              <h4>My Projects</h4>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row">{this.renderRepos()}</div>
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
export default connect(mapStateToProps)(Portfolio);
