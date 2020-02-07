import React, { Component } from 'react';
import './App.scss';
import Login from '../Login/Login.js';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      data: {}
    };
  }

  setUserInfo = user => {
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        <Login setUserInfo={this.setUserInfo} />
      </div>
    );
  }
}
