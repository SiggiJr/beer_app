import BeerOverview from "../shared/BeerOverview/BeerOverview";
import './Home.scss'

const Home = () => {
  return ( 
<section className="home">
  <BeerOverview header={"All Beers"} img={"./src/assets/img/all_beers.png"}/>
  <BeerOverview header={"Random Beer"} img={"./src/assets/img/random_beer.png"}/>
</section>
  );
}

export default Home;