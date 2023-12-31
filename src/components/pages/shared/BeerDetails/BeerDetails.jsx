import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiBaseLink } from "../../../../utils/apiLink/apiLink";
import backArrowIcon from '../../../../assets/img/Back.svg'

import './BeerDetails.scss'

const BeerDetails = () => {

  const [beer, setBeer] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const beerId = useParams().id
  // const backLink = beerId === "random" ? "/" : "/all-beers"
  const navigator = useNavigate()

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
    return <p>Loading...</p>
  }

  return ( 
    <section className="details_section">
      <div className="content_wrapper">
        <img src={beer.image_url} alt={beer.name} className="beer_img"  />
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <div className="more_beer_details_wrapper">
          <p>First brewed:</p>
          <p>{beer.first_brewed}</p>
        </div>
        <div className="more_beer_details_wrapper">
          <p>Attenuation Level:</p>
          <p>{beer.attenuation_level}</p>
        </div>
        <p>{beer.description}</p>
        <button onClick={() => navigator(-1)} className="back_btn">
          <img src={backArrowIcon} alt="back" className="back"/>
        </button>
      </div>
    </section>
  );
}

export default BeerDetails;