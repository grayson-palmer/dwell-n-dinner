import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ({ user }) => {
  return (
    <header className="header">
      <ul className="header__user-info">
        <li>username</li>
        <li>email</li>
        <li>reason</li>
      </ul>
      <h1 className="header__title">Dwell-n-Dine</h1>
      <div className="header__nav">
        <NavLink to="/favorites" className="header__button fav">
          <img src="../../images/favorite-icon.png" alt="favorite icon" />
          <div>Favorites</div>
        </NavLink>
        <NavLink to="path-to-favorites" className="header__button log-out">
          <img src="../../images/logout-icon.png" alt="logout icon" />
          <div>Log Out</div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
