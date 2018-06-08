import React from 'react';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: {}
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <main>
                <h1 className="title">Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            className="input"
                            placeholder="Name"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            type="text"
                        />
                        {/* {data.errors.name && <small>{data.errors.name}</small>} */}
                    </div>
                    <div className="field">
                        <label htmlFor="name">Email</label>
                        <input
                            className="input"
                            placeholder="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            type="email"
                        />
                        {/* {data.errors.email && <small>{data.errors.email}</small>} */}
                    </div>
                    <div className="field">
                        <label htmlFor="name">Subject</label>
                        <input
                            className="input"
                            placeholder="Subject"
                            name="subject"
                            onChange={this.handleChange}
                            value={this.state.subject}
                            type="text"
                        />
                        {/* {data.errors.subject && <small>{data.errors.subject}</small>} */}
                    </div>
                    <div className="field">
                        <label htmlFor="name">Message</label>
                        <input
                            className="input"
                            placeholder="Message"
                            name="message"
                            onChange={this.handleChange}
                            value={this.state.message}
                            type="text"
                        />
                        {/* {data.errors.message && <small>{data.errors.message}</small>} */}
                    </div>
                    <button className="button is-primary">Submit</button>
                </form>
            </main>
        )
    }
}

export default Contact;