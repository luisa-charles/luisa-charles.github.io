import React from 'react';
import axios from 'axios';

class ProjectsShow extends React.Component {

    state = {
        project: null
    }

    componentDidMount() {
        axios.get(`/api/projects/${this.props.match.params.id}`)
            .then(res => this.setState({ project: res.data }, () => console.log(this.state.project)));
    }

    render() {
        if(!this.state.project) return null;
        return (
            <div>
                <h1 className="title">{this.state.project.name}</h1>
                <p>{this.state.project.text}</p>
                <figure className="image">
                    <img src={this.state.project.image} alt={this.state.project.name} />
                </figure>
            </div>
        );
    };
}

export default ProjectsShow;