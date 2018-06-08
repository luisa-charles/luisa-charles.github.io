import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Project from '../projects/Project.js';

class ProjectsIndex extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        axios.get('/api/projects')
            .then(res => this.setState({ projects: res.data }, () => console.log(this.state)));
            // .then(res => this.setState({ projects: res.data }));
    }

    render() {
        return (
            <div>
                <ul className="columns is-multiline">
                    {this.state.projects.map((project, i) => 
                        <li key={i} className="column is-one-third">
                            <Link to={`/projects/${project._id}`}>
                                <div className="card">
                                    <div className="card-content">
                                        <h3 className="title is-4">{project.name}</h3>
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