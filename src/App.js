import React, { Suspense } from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import { Router } from './Router/Router';
import { NavBar } from './Components/NavBar';
import { LoadingSpinner } from './Components/LoadingSpinner';

const App = () => (
  <BrowserRouter>
    <Suspense fallback={()=> <LoadingSpinner />}>
      <div className="container-fluid">
        <div className="portfolio-wrapper">
          <div className="page-wrapper">
            <NavBar />
            <div className="p-5 router-wrapper">
              <Router />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  </BrowserRouter>
);

export default App;