import './BeerItem.scss'

import { Link } from "react-router-dom";

const BeerItem = ({beer}) => {
  return ( 
    <section className="beer_item_wrapper">
      <article className="beer_item">
        <div className="image_wrapper"><img src={beer.image_url} alt={beer.name} /></div>
        <div className="info_wrapper">
          <h2>{beer.name}</h2>
          <p className="tagline">{beer.tagline}</p>
          <p className="brewery">Created by: {beer.name}</p>
          <Link to={`/${beer.name}/${beer._id}`}>Details</Link>
        </div>
      </article>
    </section>
  );
}

export default BeerItem;