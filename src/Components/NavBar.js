import React, { Suspense } from 'react';
import {
  Header,
} from 'grommet';
import {
  Link,
} from "react-router-dom";
import { Routes } from '../DataStubs/RouterStub';
import { NotFound } from '../Components/NotFound';

export const NavBar = () => (
  <nav className="header-wrapper navbar-fixed-top" role="navigation">
    <Header className="header-component col-sm-4 col-sm-12" background="brand" pad="medium">
      {
        Routes.map(({
          routeUrl = '',
          navLabel = '',
        }) => (
          <Suspense fallback={()=> NotFound}>
            <Link
              className="nav-link"
              to={`/${routeUrl}`}
            >
              {navLabel}
            </Link>
          </Suspense>
        ))
      }
    </Header>
  </nav>
);