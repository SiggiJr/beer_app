import './AllBeers.scss'

import { useEffect, useState } from "react";
import { apiBaseLink } from "../../../utils/apiLink/apiLink";
import BeerItem from "../shared/BeerItem/BeerItem";

const AllBeers = () => {

const [allBeers, setAllBeers] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  fetch(apiBaseLink)
  .then(response => {
    if (!response.ok) {
      throw new Error("Fetch hat nicht geklappt")
    }
    return response.json()
  })
  .then(beersData => {
    setAllBeers(beersData)
    setIsLoading(false)
  })
  .catch(error => console.log(error.message))
}, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return ( 
    <section className="all_beers">
    <div className="beer_list">
      {allBeers.map(beer => <BeerItem key={beer._id} beer={beer}/>)}
      </div>
    </section>
  );
}

export default AllBeers;