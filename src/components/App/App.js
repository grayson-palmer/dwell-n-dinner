import React, { Component } from 'react';
import './App.scss';
import Login from '../Login/Login.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
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
