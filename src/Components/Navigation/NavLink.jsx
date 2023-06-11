import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({
  handleOnClick,
  navLabel = "",
  routeUrl = "",
  menuUnderLine = "",
}) => {
  const navClass =
    menuUnderLine === navLabel ? "nav-link-border" : "nav-link-border-less";
  return (
    <div className="" onClick={(event) => handleOnClick(event, navLabel)}>
      <Link className={`nav-link ${navClass}`} to={`/${routeUrl}`}>
        {navLabel}
      </Link>
    </div>
  );
};
