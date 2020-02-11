import React, { Component } from 'react';
import './ListingDetail.scss';
import { fetchListing } from '../../apiCalls/apiCalls';

class ListingDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentListing: undefined
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { listing_id }
      }
    } = this.props;
    fetchListing(listing_id)
      .then(currentListing => this.setState({ currentListing }));
  }

  render() {
    if (this.state.currentListing) {
      const { addToFavorites } = this.props;
      const {
        currentListing: { name, details, address, listing_id }
      } = this.state;
      const { beds, baths, cost_per_night, features } = details;
      const featureList = features.map(feature => {
        return <li>{feature}</li>;
      });
      return (
        <section className="listing-detail">
          <div className="listing-detail__images">
            <img src={`/images/${listing_id}_a.jpg`} alt={name + ' 1'} />
            <img src={`/images/${listing_id}_b.jpg`} alt={name + ' 2'} />
            <img src={`/images/${listing_id}_c.jpg`} alt={name + ' 3'} />
          </div>
          <article className="listing-detail__info">
            <div className="listing-detail__card">
              <h3 className="listing-detail__name">{name}</h3>
              <p className="listing-detail__address">
                {address.street} Denver, CO {address.zip}
              </p>
            </div>
            <div className="listing-detail__card">
              <h3>Amenities:</h3>
              <ul>
                <li>Number of beds: {beds}</li>
                <li>Number of baths: {baths}</li>
                <li>Cost per night: ${cost_per_night}</li>
              </ul>
            </div>
            <div className="listing-detail__card">
              <h3>Features:</h3>
              <ul>{featureList}</ul>
            </div>
          </article>
          <button
            type="button"
            onClick={() => {
              addToFavorites(this.state.currentListing);
            }}
          >
            Favorite
          </button>
        </section>
      );
    }
    return null;
  }
}

export default ListingDetail;
