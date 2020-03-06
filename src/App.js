import React, { Suspense } from 'react';
import {
  HashRouter,
} from "react-router-dom";
import { Router } from './Router/Router';
import { NavBar } from './Components/Navigation/NavBar';
import { LoadingSpinner } from './Components/LoadingSpinner';
import { FooterWrapper } from './Components/FooterWrapper';
import GA from './Utils/GoogleAnalytics';

const App = () => (
  <HashRouter basename='/'>
    { GA.init() && <GA.RouteTracker /> }
    <Suspense fallback={()=> <LoadingSpinner />}>
      <div className="container-fluid">
        <div className="portfolio-wrapper">
          <div className="page-wrapper">
            <NavBar />
            <div className="router-wrapper">
              <Router />
            </div>
          </div>
          <FooterWrapper />
        </div>
      </div>
    </Suspense>
  </HashRouter>
);

export default App;