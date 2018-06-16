import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class ProjectsShow extends React.Component {

    state = {
        project: null
    }

    componentDidMount() {
        axios.get(`/api/projects/${this.props.match.params.id}`)
            .then(res => this.setState({ project: res.data }, () => console.log(this.state.project)));
    }

    handleDelete = () => {
        axios.delete(`/api/projects/${this.props.match.params.id}`, {
            headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
            .then(() => this.props.history.push('/projects'));
    }

    render() {
        if(!this.state.project) return null;
        return (
            <div>
                <h1 className="title">{this.state.project.name}</h1>
                <p>{this.state.project.materials}</p>
                <p>{this.state.project.text}</p>
                <figure className="image">
                    <img src={this.state.project.image} alt={this.state.project.name} />
                </figure>

                {/* {this.state.deletePressed ? (
                    <div>
                        <p>Are you sure?</p>
                        <button className="button" onClick={this.handleDelete}>Yes</button>
                        <button className="button" onClick={this.toggleDeletePressed}>No</button>
                    </div>
                ) : ( */}

                    {Auth.isAuthenticated() ? 
                        <div>
                            <Link className="button" to={`/projects/${this.props.match.params.id}/edit`}>Edit</Link>
                            <button className="button" onClick={this.handleDelete}>Delete</button>
                        </div>
                    :
                    <div>
                     {/* empty div */}
                    </div>
                }

                    {/* )} */}
            </div>
        );
    };
}

export default ProjectsShow;