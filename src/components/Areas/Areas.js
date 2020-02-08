import React from 'react';
import './Areas.scss';
import { Link } from 'react-router-dom';

const Areas = props => {
  const areaCards = props.areaSpecs.map(area => {
    return (
      <Link className="area-card">
        <h2>{area.name}</h2>
      </Link>
    );
  });

  return <section className="Areas-container">{areaCards}</section>;
};

export default Areas;
