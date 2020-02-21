import React, { Suspense } from 'react';
import './Styles/App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import {
  Main,
} from 'grommet';
import { Router } from './Router/Router';
import { NavBar } from './Components/NavBar';
import { LoadingSpinner } from './Components/LoadingSpinner';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={()=> <LoadingSpinner />}>
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