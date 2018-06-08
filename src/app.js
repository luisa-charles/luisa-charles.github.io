import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';

import Navbar from './components/common/Navbar';

import ProjectsIndex from './components/pages/ProjectsIndex';
import ProjectsShow from './components/pages/ProjectsShow';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Login from './components/auth/Login';

import 'bulma';
import './assets/scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <main className="container">
          <Navbar />
          <section>
            <Switch>
              <Route path="/projects/:id" component={ProjectsShow} />
              <ProtectedRoute path="/projects" component={ProjectsIndex} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
