import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beers, setBeer] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchBeer() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeer(response.data);
    }

    fetchBeer();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  return (
    <div>
      <h1>A Random Beer from API</h1>

      <button onClick={handleReload}>Recarregar!</button>
    
      {beers.flatMap((beer) => {
        return (
          <div key={beer._id}>
            <b>URL: {beer.image_url}</b>
            <p>Beer Name: {beer.name}</p>
            <p>Tagline: {beer.tagline}</p>
            <p>Contributed By: {beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RandomBeer;
