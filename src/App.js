import React, { Suspense } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { NavBar } from "./Components/Navigation/NavBar";
import { LoadingSpinner } from "./Components/LoadingSpinner";
import { FooterWrapper } from "./Components/FooterWrapper";
import { deploymentConfig } from "./Utils/DeploymentConfig";
import GA from "./Utils/GoogleAnalytics";

const App = () => {
  // Choose router based on deployment environment
  const RouterComponent = deploymentConfig.getRouterType() === 'hash' ? HashRouter : BrowserRouter;
  const routerProps = deploymentConfig.getRouterType() === 'hash'
    ? {}
    : { basename: deploymentConfig.basePath };

  return (
    <RouterComponent {...routerProps}>
      {GA.init() && <GA.RouteTracker />}
      <Suspense fallback={() => <LoadingSpinner />}>
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
    </RouterComponent>
  );
};

export default App;
