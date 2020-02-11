import React from 'react';
import './Areas.scss';
import { Link } from 'react-router-dom';

const Areas = props => {
  const areaCards = props.areaDetails.map(area => {
    return (
      <Link to={`/areas/${area.id}`} className="areas__card" id={`area-${area.id}`} onClick={() => props.setAreaId(area.id)}>
        <div className='areas__info'>
          <h2>{area.name} - <i>{area.area}</i></h2>
          <p><i>{area.location}</i></p>
          <p>{area.about}</p>
        </div>
      </Link>
    );
  });

  return <section className="areas">{areaCards}</section>;
};

export default Areas;
