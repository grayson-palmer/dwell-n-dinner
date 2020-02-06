import React, { Component } from 'react';
import './App.scss';
import Login from '../Login/Login.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      areaDetails: [],
      listings: []
    };
  }

  setUserInfo = user => {
    this.setState({ user });
  };

  getAreaDetails = () => {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areas => areas.areas.map(area => {
        fetch(`http://localhost:3001${area.details}`)
          .then(response => response.json())
          .then(details => {
            this.setState({areaDetails: [...this.state.areaDetails, details]})
            console.log(this.state)
          })
          .catch(error => console.log(error))
      }))
      .catch(error => console.log(error))
  }

  getListingDetails = () => {
    fetch('http://localhost:3001/api/v1/listings')
      .then(response => response.json())
      .then(listings => listings.listings.map(listing => {
        this.setState({listings: [...this.state.listings, listing]})
      }))
      .catch(error => console.log(error))
  }

  componentDidMount = () => {
    Promise.all([this.getAreaDetails(), this.getListingDetails()]);
  }

  render() {
    return (
      <div className="App">
        <Login setUserInfo={this.setUserInfo} />
      </div>
    );
  }
}