import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as AddCircle } from '../img/plus-circle-solid.svg';
import { ReactComponent as Logo } from '../img/logo.svg';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link title="watchlist" to="/">
              <Logo height="40" width="40" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink className="nav-links--item" to="/watchlist">
                Watch List
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-links--item" to="/watched">
                Watched
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" className="btn">
                <AddCircle fill="currentColor" width="24" height="24" />
                <span>&nbsp;Add</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
