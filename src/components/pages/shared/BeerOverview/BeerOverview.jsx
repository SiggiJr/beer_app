import { Link } from 'react-router-dom';
import './BeerOverview.scss'

const BeerOverview = ({header, img}) => {
  return ( 
    <article className="beer_overview">
      <Link to={"/all-beers"}>
      <div className="img_wrapper">
        <img src={img} alt={header} />
      </div>
      <h1>{header}</h1>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
    </article>
  );
}

export default BeerOverview;