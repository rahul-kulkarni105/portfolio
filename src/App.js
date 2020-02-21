import React from 'react';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import {
  Main,
} from 'grommet';
import { Router } from './Router/Router';
import { NavBar } from './Components/NavBar';

const App = () => (
  <BrowserRouter>
  <div className="container-fluid">
    <div className="app-wrapper row">
      <NavBar />
      <hr />
      <Main pad="large">
        <Router />
      </Main>
    </div>
  </div>
  </BrowserRouter>
);

export default App;