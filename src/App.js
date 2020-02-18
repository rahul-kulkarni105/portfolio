import React from 'react';
import './App.css';
import {
  BrowserRouter,
  // Switch,
  // Route,
  Link
} from "react-router-dom";
import {
  Header,
  Main,
} from 'grommet';
import { Router } from './Router/Router';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="header-wrapper">
          <Header className="header-component" background="brand" pad="medium">
            <Link className="nav-link" to="/portfolio">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/skills">Skills</Link>
            <Link className="nav-link" to="/work">Work</Link>
            <Link className="nav-link" to="/education">Education</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Header>
        </div>
        <hr />
        <Main pad="large">
          <Router />
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;