// Default imports
import React, {Component} from 'react';

// Custom imports
import Nav from '../../components/navbar/navbar';
import http from 'axios';

class Portfolio extends Component {
    // default constructor
    constructor() {
        super();
        this.state = {gitData: []}
    }

    componentDidMount() {
        // Get data from github api here
        http
            .get('https://api.github.com/users/neeravpanchal26/repos')
            .then(data => this.setState({gitData: data.data}))
            .catch(error => console.log(error));
    }

    renderRepos = () => {
        return this.state.gitData.map(repo => (
            // Html build here
            <div className='card'>
                <div className='card-content'>
                    <a href={repo.html_url} className="card-title">{repo.name} - {repo.language}</a>
                    <p>{repo.description}</p>
                    <div className="card-action">
                        <span>Latest commit at: {repo.pushed_at} to {repo.default_branch}.</span>
                        <span className='right'>{repo.owner.login}</span>
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        return (
            // HTML here
            <div>
                <Nav/>
                <div className='container'>
                    {this.renderRepos()}
                </div>
            </div>
        )
    }
}

// Default export
export default Portfolio;
