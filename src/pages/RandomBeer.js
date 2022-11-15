import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [sortedBeer, setSortedBeer] = useState({});
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchRandomBeer() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random')

      setSortedBeer(response.data);
    }

    fetchRandomBeer();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  return (
    <div>
      <h1>🔀 A Random Beer</h1>
    
        <img className="imagem" src={sortedBeer.image_url} alt="Beer Sorted"/>
        <p>Beer Name: {sortedBeer.name}</p>
        <p>Tagline: {sortedBeer.tagline}</p>
        <p>First Brewed: {sortedBeer.first_brewed}</p>
        <p>Attenuation Level: {sortedBeer.attenuation_level}</p>
        <p>Description: {sortedBeer.description}</p>
        <p>Contributed By: {sortedBeer.contributed_by}</p>

        <button onClick={handleReload}>Ruffle again</button>
      </div>
  );
}

export default RandomBeer
