import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <form className="login-form">
      <h1>Dwell-n-Dine</h1>
      <label htmlFor="login-name">Name</label>
      <input id="login-name" placeholder="Name"></input>
      <label htmlFor="login-email">Email</label>
      <input id="login-email" placeholder="Email"></input>
      <label htmlFor="login-reason">Reason for visit</label>
      <select id="login-reason" name="reason">
        <option value="Special Occasion">Special Occasion</option>
        <option value="Business">Business</option>
        <option value="Vacation">Vacation</option>
        <option value="Other">Other</option>
      </select>
      <button className="login-button">Login</button>
    </form>
  );
};

export default Login;
