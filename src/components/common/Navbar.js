import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Navbar extends React.Component {

    state = {
        navIsOpen: false
    }

    handleToggle = () => {
        this.setState({ navIsOpen: !this.state.navIsOpen });
    }

    componentWillUpdate() {
        // if the nav is open, set the state back to closed when the component updates
        this.state.navIsOpen && this.setState({ navIsOpen: false });
    }

    handleLogout = () => {
        Auth.logout();
        this.props.history.push('/projects');
    }

    render() {
        return (
            <div>
                <nav id="navbar" className="navbar">
                    <div className="navbar-brand">
                            <Link className="navbar-item" to="/projects">Luisa Charles</Link>
                        <div className={`navbar-burger ${this.state.navIsOpen ? 'is-active' : ''}`}
                            onClick={this.handleToggle}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
                        <div className="navbar-end">
                        <Link className="navbar-item" to="/projects">Projects</Link>
                        <Link className="navbar-item" to="/about">About</Link>
                        {/* <Link className="navbar-item" to="/contact">Contact</Link> */}
                        {Auth.isAuthenticated() && <Link className="navbar-item" to="/projects/new">New Project</Link>}
                        {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Logout</a>}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Navbar);
