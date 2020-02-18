import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import {
  Header,
  Main,
} from 'grommet';
import { Router } from './Router/Router';

const App = () => {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <div className="app-wrapper row">
        <nav className="header-wrapper navbar-fixed-top" role="navigation">
          <Header className="header-component col-sm-4 col-sm-12" background="brand" pad="medium">
            <Link className="nav-link" to="/portfolio">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/skills">Skills</Link>
            <Link className="nav-link" to="/work">Work</Link>
            <Link className="nav-link" to="/education">Education</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Header>
        </nav>
        <hr />
        <Main pad="large">
          <Router />
        </Main>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;