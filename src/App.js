import React, { Suspense } from 'react';
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container-fluid">
        <div className="app-wrapper row">
          <NavBar />
          <hr />
          <Main pad="large">
            <Router />
          </Main>
        </div>
      </div>
    </Suspense>
  </BrowserRouter>
);

export default App;