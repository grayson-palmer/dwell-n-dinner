import React from 'react';
import { Link } from 'react-router-dom';
import './Listings.scss';

const Listings = props => {
  const filteredListings = props.listings.filter(
    listing => listing.area_id === props.selectedAreaId
  );
  const domListings = filteredListings.map(({ name, listing_id, area_id }) => {
    return (
      <div className="listings__card">
        <h3>{name}</h3>
        <img
          className="listings__image"
          src={`/images/${listing_id}_a.jpg`}
          alt={name}
        />
        <Link to={`/areas/${area_id}/listing/${listing_id}`} className='listings__button'>See Details</Link>
      </div>
    );
  });

  return <section className="listings">{domListings}</section>;
};

export default Listings;
