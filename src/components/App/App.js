import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Areas from '../Areas/Areas.js';
import Listings from '../Listings/Listings.js';
import ListingDetail from '../ListingDetail/ListingDetail.js';
import Favorites from '../Favorites/Favorites.js';
import { fetchArea, fetchAreaDetails, fetchListings } from '../../apiCalls/apiCalls';

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
    console.log(user);
    if (!user.name) {
      this.setState({ favorites: [] });
    }
    this.setState({ user });
  };

  addToFavorites = listing => {
    if (!this.state.favorites.includes(listing)) {
      this.setState({ favorites: [...this.state.favorites, listing] });
    }
  };

  removeFromFavorites = listing => {
    const revisedFavorites = this.state.favorites.filter(favorite => {
      return favorite !== listing;
    });
    console.log(revisedFavorites);
    this.setState({ favorites: [...revisedFavorites] });
  };

  getAreaDetails = () => {
    fetchArea()
      .then(areas =>
        areas.areas.map(area => {
          fetchAreaDetails(area)
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
    fetchListings()
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
      <div className="app-background">
        <Header setUserInfo={this.setUserInfo} user={this.state.user} />
        <div className="app">
          <Switch>
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  listings={this.state.favorites}
                  removeFromFavorites={this.removeFromFavorites}
                />
              )}
            />
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
            <Route
              path="/"
              render={() => <Login setUserInfo={this.setUserInfo} />}
            />
          </Switch>
        </div>
      </div>
    </div>
    );
  }
}
