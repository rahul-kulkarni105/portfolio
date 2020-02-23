import React, { Suspense } from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import {
  Footer,
  Text,
  // Image,
} from 'grommet';
import { Router } from './Router/Router';
import { NavBar } from './Components/NavBar';
import { LoadingSpinner } from './Components/LoadingSpinner';
import { GitHubSvg } from './Components/Logos/GitHubSvg';
import GA from './Utils/GoogleAnalytics';

// const Linkedin = require('./Images/Linkedin.png');

const App = () => (
  <BrowserRouter>
    { GA.init() && <GA.RouteTracker /> }
    <Suspense fallback={()=> <LoadingSpinner />}>
      <div className="container-fluid">
        <div className="portfolio-wrapper">
          <div className="page-wrapper">
            <NavBar />
            <div className="p-5 router-wrapper">
              <Router />
            </div>
          </div>
          <Footer className="footer" background="brand" pad="medium">
            <Text>Copyright</Text>
            <GitHubSvg
              link="https://github.com/rahul-kulkarni105"
            />
            {/* <Image className="footer-image" src={Linkedin} /> */}
          </Footer>
        </div>
      </div>
    </Suspense>
  </BrowserRouter>
);

export default App;