/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { Link } from "react-router-dom";
import { func, string } from "prop-types";

export const NavLink = ({
  handleOnClick,
  navLabel = "",
  routeUrl = "",
  menuUnderLine = "",
}) => {
  const navClass = menuUnderLine === navLabel ? "nav-link-border" : "nav-link-border-less";
  return (
    <div onClick={(event) => handleOnClick(event, navLabel)}>
      <Link className={`nav-link ${navClass}`} to={routeUrl}>
        {navLabel}
      </Link>
    </div>
  );
};

NavLink.propTypes = {
  handleOnClick: func,
  navLabel: string,
  routeUrl: string,
  menuUnderLine: string,
};
