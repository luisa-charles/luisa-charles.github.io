import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Form from '../projects/Form';

class NewRoute extends React.Component {

    state = {
        name: '',
        image: '',
        text: '',
        errors: {}
    }

    handleChange = ({ target: { name, value } }) => {
        const errors = { ...this.state.errors, [name]: '' };
        this.setState({ [name]: value, errors }, () => console.log(this.state));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`/api/projects/${this.props.match.params.id}`, this.state, {
            headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
            .then(() => this.props.history.push(`/bangers/${this.props.match.params.id}`));
    }

    componentDidMount() {
        axios.get(`/api/projects/${this.props.match.params.id}`)
            .then(res => this.setState(res.data));
    }

    render() {
        return (
            <div className="container">
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    data={this.state}
                />
            </div>
        );
    }
}

export default NewRoute;
