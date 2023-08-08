import BeerOverview from "../shared/BeerOverview/BeerOverview";
import allBeersImage from '../../../assets/img/all_beers.png'
import randomBeersImage from '../../../assets/img/random_beer.png'
import './Home.scss'

const Home = () => {
  return ( 
<section className="home">
  <BeerOverview header={"All Beers"} img={allBeersImage} path={"/all-beers"}/>
  <BeerOverview header={"Random Beer"} img={randomBeersImage} path1={"beer"} path2={"random"}/>
</section>
  );
}

export default Home;