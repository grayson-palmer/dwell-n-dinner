import React, { Component } from 'react';
import './Header.scss';

export default Header = () => {
  return (
    <div className='header-user-info'>
      {/* User info from state 
      <p>{username}</p>
      <p>{email}</p>
      <p>{reason}</p>
      */}
    </div>
    <h1 className='header-title'>Dwell-n-Dine</h1>
    <div className='header-buttons'>
        <NavLink to='path-to-logout' className='nav'>
          <img src='../../images/favorite-icon.png' alt='favorite icon' />Log Out
        </NavLink>
        <NavLink to='path-to-favorites' className='nav'>
          <img src='../../images/logout-icon.png' alt='logout icon' />Favorites
        </NavLink>
    </div>
  )
}