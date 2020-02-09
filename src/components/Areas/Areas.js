import React from 'react';
import './Areas.scss';
import { Link } from 'react-router-dom';

const Areas = props => {
  const areaCards = props.areaSpecs.map(area => {
    return (
      <Link to={`/areas/${area.id}`} className="area-card" onClick={() => props.setAreaId(area.id)}>
        <h2>{area.name} - <i>{area.area}</i></h2>
        <p>{area.location}</p>
        <p>{area.about}</p>
      </Link>
    );
  });

  return <section className="areas-container">{areaCards}</section>;
};

export default Areas;
