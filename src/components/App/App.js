import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Areas from '../Areas/Areas.js';
import Listings from '../Listings/Listings.js';
import ListingDetail from '../ListingDetail/ListingDetail.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      areaDetails: [],
      listings: [],
      selectedAreaId: '',
      favorites: []
    };
  }

  setUserInfo = user => {
    this.setState({ user });
  };

  addToFavorites = listing => {
    this.setState({ favorites: [...this.state.favorites, listing] });
    console.log(this.state.favorites);
  };

  removeFromFavorites = listing => {
    const revisedFavorites = this.state.favorites.filter(favorite => {
      return favorite !== listing;
    });
    this.setState({ favorites: [revisedFavorites] });
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
                areaDetails: [
                  ...this.state.areaDetails,
                  { ...details, area: area.area || area.name }
                ]
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

  setAreaId = id => {
    this.setState({ selectedAreaId: id });
  };

  componentDidMount = () => {
    Promise.all([this.getAreaDetails(), this.getListingDetails()]);
  };

  render() {
    return (
   <div className='app-background'>
     <Header user={this.state.user} />
      <div className="app">
        <Switch>
          <Route
            listings={this.state.listings}
            path="/areas/:area_id/listing/:listing_id"
            render={({ match }) => (
              <ListingDetail
                addToFavorites={this.addToFavorites}
                match={match}
              />
            )}
          />
          <Route
            path="/areas/:id"
            render={() => (
              <Listings
                listings={this.state.listings}
                selectedAreaId={this.state.selectedAreaId}
              />
            )}
          />
          <Route
            path="/areas"
            render={() => (
              <Areas
                areaDetails={this.state.areaDetails}
                setAreaId={this.setAreaId}
              />
            )}
          />
          <Route path="/" component={Login} setUserInfo={this.setUserInfo} />
        </Switch>
       </div>
      </div>
    );
  }
}
