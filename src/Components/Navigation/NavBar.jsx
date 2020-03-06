import React, { Suspense, useState } from 'react';
import {
  Header,
} from 'grommet';
import { NavRoutes } from '../../DataStubs/NavRouterStub';
import { NavDetails } from './NavDetails';
import { LoadingSpinner } from '../LoadingSpinner';
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
      <section className="col nav-wrapper">
        <NavDetails />
      </section>
      <section className="col nav-col"/>
      <section className="col header-wrapper">
        <Header className="header__grommet" background="#000" pad="medium">
          <Suspense fallback={()=> <LoadingSpinner />}>
          {
            NavRoutes.map(({
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