import React from 'react';
import {
  Header,
} from 'grommet';
import {
  Link,
  Route,
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
          <>
            {
              routeUrl
              && (
                <Link
                  className="nav-link"
                  to={`/${routeUrl}`}
                >
                  {navLabel}
                </Link>
              )
            }
            {
              !routeUrl
              && (
                <Route path="/" component={NotFound} />
              )
            }
          </>
        ))
      }
    </Header>
  </nav>
);