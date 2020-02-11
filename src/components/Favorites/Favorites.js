import React from 'react';
import { Link } from 'react-router-dom';
// import './Favorites.scss';

const Favorites = props => {
  if (props.listings) {
    const domListings = props.listings.map(listing => {
      return (
        <div className="listings__card">
          <h3>{listing.name}</h3>
          <img
            className="listings__image"
            src={`/images/${listing.listing_id}_a.jpg`}
            alt={listing.name}
          />
          <Link
            to={`/areas/${listing.area_id}/listing/${listing.listing_id}`}
            className="listings__button"
          >
            See Details
          </Link>
          <button onClick={() => props.removeFromFavorites(listing)}>
            Remove Favorite
          </button>
        </div>
      );
    });

    return <section className="listings">{domListings}</section>;
  }
  return null;
};

export default Favorites;
