import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

import ProjectImage from '../projects/ProjectImage';

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
            <div id="projects-show">
                <div className="columns">
                    <div className="column is-three-fifths">
                        <figure className="image projects-show-padding-bottom">
                            <img src={this.state.project.image} alt={this.state.project.name} />
                        </figure>
                        <div style={{ padding: '56.25% 0 24px 0', position: 'relative' }}><iframe className="projects-show-padding-bottom" src={this.state.project.videoSrc} style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                        {this.state.project.imageSrcs.map(image => 
                            <figure className="image projects-show-padding-bottom">
                                <img src={image} />
                            </figure>
                        )}
                        

                        {/* <ProjectImage images={this.state.project.imageSrcs} alts={this.state.project.name} /> */}
                    </div>
                    <div className="column is-two-fifths">
                        <h1 className="title">{this.state.project.name}</h1>
                        <p className="subtitle"><i>{this.state.project.materials}</i></p>
                        <p dangerouslySetInnerHTML={{ __html: this.state.project.text }} ></p>
                    </div>
                </div>
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