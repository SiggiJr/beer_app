import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseLink } from "../../../../utils/apiLink/apiLink";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const BeerDetails = () => {

  const [beer, setBeer] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const beerId = useParams().id

  useEffect(() => {
    fetch(`${apiBaseLink}/${beerId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Fetch ist fehlgeschlagen!")
      }
      return response.json()
    })
    .then(beerData => {
      setBeer(beerData)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return
  }

  // const beer = beers.find((beer) => beer._id === beerId)


  return ( 
    <section className="details_section">
      <img src={beer.image_url} alt={beer.name} className="img_wrapper" />
      <h1></h1>
      <h2></h2>
      <div className="data_wrapper"></div>
      <div className="data_wrapper"></div>
      <p></p>
      <Link className="back_btn">⬅</Link>
      <Navbar/>
    </section>
  );
}

export default BeerDetails;