// Default imports
import React, {Component} from 'react';

// Custom imports
import Nav from '../navbar/navbar';
import axios from 'axios';
import './portfolio.css';
import {GoGitBranch} from "react-icons/go";

class Portfolio extends Component {
    // default constructor
    constructor() {
        super();
        this.state = {
            gitData: [],
            loader: true
        }
    };

    // Form load
    componentDidMount() {
        // Get data from github api here
        axios
            .get('https://api.github.com/users/neeravpanchal26/repos')
            .then(data => this.setState({gitData: data.data, loader: false}))
            .catch(error => console.log(error));
    };

    renderLoader = () => {
        if (this.state.loader) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            );
        } else {
            return null;
        }
    };

    renderRepos = () => {
        return this.state.gitData
            .reverse()
            .map(repo => (
                // Html build here
                <div className='card hoverable'>
                    <div className='card-content'>
                        <a href={repo.html_url} className="card-title">{repo.name}</a>
                        <p>{repo.description}</p>
                        <div className="card-action">
                            <span className='blue-text'>{repo.language}</span>
                            <span> • Latest commit at: {new Date(repo.pushed_at).toUTCString().slice(0, 25)}</span>
                            <span className='right valign-wrapper'>
                                {repo.default_branch}
                                <GoGitBranch />
                        </span>
                        </div>
                    </div>
                </div>
            ));
    };

    render() {
        return (
            // HTML here
            <div>
                <Nav/>
                <div className='container'>
                    <div className="section">
                        <div className='row'>
                            <h4>My Projects</h4>
                        </div>
                    </div>
                    <div className="divider"></div>
                    {this.renderLoader()}
                    {this.renderRepos()}
                </div>
            </div>
        )
    }
}

// Default export
export default Portfolio;
