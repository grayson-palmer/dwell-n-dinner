import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ({ user, setUserInfo }) => {
  return (
    <header className="header">
      <ul className="header__user-info">
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.reason}</li>
      </ul>

      <h1 className="header__title">Dwell-n-Dine</h1>
      <div className="header__nav">
        <NavLink to="/favorites" className="header__button fav">
          <img src="../../images/favorite-icon.png" alt="favorite icon" />
          <div>Favorites</div>
        </NavLink>
        <NavLink
          onClick={() => setUserInfo({ name: '', email: '', reason: '' })}
          to="path-to-login"
          className="header__button log-out"
        >
          <img src="../../images/logout-icon.png" alt="logout icon" />
          <div>Log Out</div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
