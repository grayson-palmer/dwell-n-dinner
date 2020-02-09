import React, { Component } from 'react';
import './App.scss';
import Login from '../Login/Login.js';
import { Switch, Route, NavLink } from 'react-router-dom';
import Areas from '../Areas/Areas.js';
import Listings from '../Listings/Listings.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      areaDetails: [],
      listings: [],
      selectedAreaId: ''
    };
  }

  setUserInfo = user => {
    this.setState({ user });
  };

  getAreaDetails = () => {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areas =>
        areas.areas.map(area => {
          fetch(`http://localhost:3001${area.details}`)
            .then(response => response.json())
            .then(details => {
              this.setState({
                areaDetails: [...this.state.areaDetails, {...details, area: area.area || area.name}]
              });
            })
            .catch(error => console.log(error));
        })
      )
      .catch(error => console.log(error));
  };

  getListingDetails = () => {
    fetch('http://localhost:3001/api/v1/listings')
      .then(response => response.json())
      .then(listings =>
        listings.listings.map(listing => {
          this.setState({ listings: [...this.state.listings, listing] });
        })
      )
      .catch(error => console.log(error));
  };

  setAreaId = (id) => {
    this.setState({selectedAreaId: id})
    
  }

  componentDidMount = () => {
    Promise.all([this.getAreaDetails(), this.getListingDetails()]);
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/areas/:id' render={ () => <Listings 
            listings={this.state.listings} 
            component={ Listings }
            selectedAreaId={this.state.selectedAreaId} /> }
          />
          <Route path='/areas' render={ () => <Areas areaSpecs={this.state.areaDetails} setAreaId={this.setAreaId}/> } />
          <Route path='/' component={ Login } />
        </Switch>
      </div>
    );
  }
}
