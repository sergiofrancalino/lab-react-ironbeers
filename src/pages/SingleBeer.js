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
       <h1>🔂 A Single Beer</h1>
       <img className="imagem" src={beer.image_url} alt="Single Bear" />
        <h1>Name: {beer.name}</h1>
        <div>Slogan:  {beer.tagline}</div>
        <div>Attenuation Level: {beer.attenuation_level}</div>
        <div>Description: {beer.description}</div>
        <div>Contributed By: {beer.contributed_by}</div>
      </div>
    </div>
  );
}

export default SingleBeer
