/* eslint-disable react/no-array-index-key */
import React, { Suspense, useState } from "react";
import { Header } from "grommet";
import { NavRoutes } from "../../DataStubs/NavRouterStub";
import { NavDetails } from "./NavDetails";
import { LoadingSpinner } from "../LoadingSpinner";
import { NavLink } from "./NavLink";
import "../../Styles/Nav.scss";

export const NavBar = () => {
  const [menuUnderLine, setMenuUnderLine] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOnClick = (event, navLabel) => {
    setMenuUnderLine(navLabel);
    setMobileOpen(false); // close mobile menu on nav click
  };

  return (
    <nav className="navbar header-component" role="navigation">
      <div className="nav-inner">
        <div className="nav-left">
          <NavDetails />
        </div>
        {/* Hamburger for mobile */}
        <button
          type="button"
          className={`nav-hamburger${mobileOpen ? " open" : ""}`}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        {/* Horizontal nav for tablet+ and mobile menu */}
        <div className={`nav-links${mobileOpen ? " open" : ""}`}>
          <Suspense fallback={() => <LoadingSpinner />}>
            <Header className="header__grommet" background="#000" pad="medium">
              {NavRoutes.map(({ routeUrl = "", navLabel = "" }, index) => (
                <NavLink
                  key={`NavLink-${index}-${routeUrl}`}
                  menuUnderLine={menuUnderLine}
                  handleOnClick={handleOnClick}
                  routeUrl={routeUrl}
                  navLabel={navLabel}
                />
              ))}
            </Header>
          </Suspense>
        </div>
      </div>
    </nav>
  );
};
