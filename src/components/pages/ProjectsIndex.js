import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import { Link } from 'react-router-dom';

// import Project from '../projects/Project.js';
import SearchBar from '../projects/SearchBar.js';

class ProjectsIndex extends React.Component {

    state = {
        projects: [],
        query: ''
    }

    componentDidMount() {
        axios.get('/api/projects')
            // .then(res => this.setState({ projects: res.data }, () => console.log(this.state)));
            .then(res => this.setState({ projects: res.data }));
    }

    handleSort = (e) => {
        const query = e.target.innerHTML;
        this.setState({ query });
        // console.log(e.target.innerHTML);
    }

    handleSortFilterLogic = () => {
        if (this.state.query === 'All') this.setState({ query: '' });
        const { query } = this.state;
        const regex = new RegExp(query, 'i');

        const filteredProjects = _.filter(this.state.projects, (project) => regex.test(project.type));
        return filteredProjects;
    }

    render() {
        return (
            <div id="projects-index">
                <SearchBar handleSort={ this.handleSort } />
                <ul className="columns is-multiline">
                    {this.handleSortFilterLogic().map((project, i) => 
                        <li key={i} className="column is-one-third-desktop is-half-tablet is-mobile">
                            <Link to={`/projects/${project._id}`}>
                                <div className="card">
                                    <div className="card-content">
                                        <h3 className="title is-4">{project.name}</h3>
                                        <p>{project.materials}</p>
                                    </div>
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={project.image} alt={project.name} />
                                        </figure>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ProjectsIndex;