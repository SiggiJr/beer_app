import './AllBeers.scss'

import { useEffect, useState } from "react";
import { apiBaseLink } from "../../../utils/apiLink/apiLink";
import BeerItem from "../shared/BeerItem/BeerItem";
import Navbar from '../shared/Navbar/Navbar';

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
    return
  }

  return ( 
    <section className="all_beers">
    <div className="beer_list">{allBeers.map(beer => <BeerItem key={beer._id} beer={beer}/>)}</div>
    <Navbar/>
    </section>
  );
}

export default AllBeers;