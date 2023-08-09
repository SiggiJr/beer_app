import BeerOverview from "../shared/BeerOverview/BeerOverview";
import allBeersImage from '../../../assets/img/all_beers.png'
import randomBeersImage from '../../../assets/img/random_beer.png'
import './Home.scss'

const Home = () => {

  const allBeersPath = "/all-beers"
  const randomBeerPath = {
    part1: "/beer",
    part2: "/random"
  }

  return ( 
<section className="home">
  <BeerOverview header={"All Beers"} img={allBeersImage} path={allBeersPath}/>
  <BeerOverview header={"Random Beer"} img={randomBeersImage} path={randomBeerPath}/>
</section>
  );
}

export default Home;