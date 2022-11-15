import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleBeer() {

  const { beerID } = useParams();
  const [beer, setBeer] = useState({});
  
  useEffect(() => {
    async function fetchBeer() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerID}`
      );
      setBeer(response.data);
    }
    fetchBeer();
  }, []);

  
  return (
    <div>
      <div>
       <img className="imagem" src={beer.image_url} alt="Single Bear" />
        <div>Name: {beer.name}</div>
        <div>Slogan:  {beer.tagline}</div>
        <div>Created in: {beer.first_brewed}</div>
        <div>Description: {beer.description}</div>
        <div>Contributed By: {beer.contributed_by}</div>
      </div>
    </div>
  );
}

export default SingleBeer
