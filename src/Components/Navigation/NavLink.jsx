import React from 'react';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';

export const NavLink = ({
  handleOnClick,
  navLabel = '',
  routeUrl = '',
  menuUnderLine = '',
}) => {
  const navClass = ClassNames('nav-link', {
    'nav-link-border': menuUnderLine === navLabel,
    'nav-link-border-less': menuUnderLine !== navLabel,
  });
  return (
    <div className="" onClick={(event) => handleOnClick(event, navLabel)}>
      <Link className={navClass} to={`/${routeUrl}`}>
        {navLabel}
      </Link>
    </div>
  );
};
