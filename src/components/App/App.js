import React, { Component } from 'react';
import './App.scss';
import Login from '../Login/Login.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}
