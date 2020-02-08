import React from 'react';
import './Listings.scss';

const Listings = (props) => {
  const filteredListings = props.listings.filter(listing => listing.area_id === props.selectedAreaId)
  const domListings = filteredListings.map(listing => {
    return (
      <div className='listing-card'>
        <h4>{listing.name}</h4>
        <img src={`/images/${listing.listing_id}_a.jpg`} alt={listing.name} width='100px'/>
        <button type='button'>See Details</button>
      </div>
    )
  })

  

  return (
    <section className='listing-section'>
      {domListings}
    </section>
    )
}

export default Listings