import React, { Component } from 'react';
import './Areas.scss';

export default Areas = ({ area, details }) => {
  const areaCards = area => {
    <Link className="area-card">
      <h2>{area}</h2>
    </Link>
  }
  return (
    <section className='Areas-container'>
      <{ areaCards }/>
    </section>
  )
};
