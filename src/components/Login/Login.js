import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      reason: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginUser = e => {
    e.preventDefault();
    const { setUserInfo } = this.props;
    setUserInfo({ ...this.state });
  };

  render() {
    return (
      <form className="login-form">
        <h1>Dwell-n-Dine</h1>
        <label htmlFor="login-name">Name</label>
        <input
          onChange={this.handleChange}
          name="name"
          id="login-name"
          placeholder="Name"
        ></input>
        <label htmlFor="login-email">Email</label>
        <input
          onChange={this.handleChange}
          name="email"
          id="login-email"
          placeholder="Email"
        ></input>
        <label htmlFor="login-reason">Reason for visit</label>
        <select onChange={this.handleChange} id="login-reason" name="reason">
          <option disabled selected value>
            -- select an option --
          </option>
          <option value="Special Occasion">Special Occasion</option>
          <option value="Business">Business</option>
          <option value="Vacation">Vacation</option>
          <option value="Other">Other</option>
        </select>
        <Link className="login-button" to="/Areas">
          Login
        </Link>
      </form>
    );
  }
}
