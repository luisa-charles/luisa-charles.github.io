import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

    state = {
        navIsOpen: false
    }

    //to avoid binding the method inside a constructor I use an arrow function, because they don't care about 'this'
    handleToggle = () => {
        // for burger menu, toggle between open and closed
        this.setState({ navIsOpen: !this.state.navIsOpen });
    }

    componentWillUpdate() {
        // if the nav is open, set the state back to closed when the component updates
        this.state.navIsOpen && this.setState({ navIsOpen: false });
    }

    render() {
        return (
            <div>
                <nav id="navbar" className="navbar">
                    <div className="navbar-brand">
                            {/* <Link className="navbar-item" to="/projects">Projects</Link> */}
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
                          <Link className="navbar-item" to="/contact">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Navbar);
