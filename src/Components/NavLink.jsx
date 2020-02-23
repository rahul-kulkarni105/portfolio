import React from 'react';
import {
  Link,
} from "react-router-dom";
import ClassNames from 'classnames';
import { replaceForwardSlash } from '../Utils/Utilities';

export const NavLink = ({
  handleOnClick,
  navLabel = '',
  routeUrl = '',
  menuUnderLine = '',
}) => {
  const windowLocation = replaceForwardSlash(window.location.pathname);
  const navClass = ClassNames(
    'nav-link',
    { 'nav-link-border': menuUnderLine === navLabel || windowLocation === routeUrl,
      'nav-link-border-less': menuUnderLine !== navLabel || windowLocation !== routeUrl,
    }
  );
  return (
    <div
      className=""
      onClick={(event) => handleOnClick(event, navLabel)}
    >
      <Link
        className={navClass}
        to={`/${routeUrl}`}
      >
        {navLabel}
      </Link>
    </div>
  );
}