import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';

import Navbar from './components/common/Navbar';
import NotFound from './components/common/NotFound';
// import FlashMessages from './components/common/FlashMessages';

import ProjectsIndex from './components/pages/ProjectsIndex';
import ProjectsShow from './components/pages/ProjectsShow';
import ProjectsNew from './components/pages/ProjectsNew';
import ProjectsEdit from './components/pages/ProjectsEdit';
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
              <ProtectedRoute path="/projects/:id/edit" component={ProjectsEdit} />
              <ProtectedRoute path="/projects/new" component={ProjectsNew} />
              <Route path="/projects/:id" component={ProjectsShow} />
              <Route path="/projects" component={ProjectsIndex} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/" render={() => <Redirect to="/projects" />} />
              <Route component={NotFound} />
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
