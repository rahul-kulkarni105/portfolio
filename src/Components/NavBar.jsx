import React, { Suspense, useState } from 'react';
import {
  Header,
} from 'grommet';
import { Routes } from '../DataStubs/RouterStub';
import { NavDetails } from './NavDetails';
import { LoadingSpinner } from './LoadingSpinner';
import { NavLink } from './NavLink';

export const NavBar = () => {
  const [menuUnderLine, setMenuUnderLine] = useState('Home');

  const handleOnClick = (event) => {
    const {
      currentTarget: {
        innerText = '',
      }
    } = event;
    setMenuUnderLine(innerText);
  }

  return (
    <nav className="navbar-fixed-top header-component row" role="navigation">
      <section className="col-sm-3 col-lg-4 col-md-3 nav-wrapper">
        <NavDetails />
      </section>
      <section className="col-sm-3 col-lg-4 col-md-3"/>
      <section className="col-sm-12 col-lg-4 col-md-12 header-wrapper">
        <Header className="" background="brand" pad="medium">
          <Suspense fallback={()=> <LoadingSpinner />}>
          {
            Routes.map(({
              routeUrl = '',
              navLabel = '',
            }, index) => {
              return (
                <NavLink
                  key={`NavLink-${index}-${routeUrl}`}
                  menuUnderLine={menuUnderLine}
                  handleOnClick={handleOnClick}
                  routeUrl={routeUrl}
                  navLabel={navLabel}
                />
              )}
            )
          }
          </Suspense>
        </Header>
      </section>
    </nav>
  );
}