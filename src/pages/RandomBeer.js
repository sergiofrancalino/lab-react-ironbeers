import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState([]);
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

      {beer.random((randomBeer) => {
        return (
          <div key={beer._id}>
            <p>{beer.nome}</p>
            <p>{beer.tagline}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RandomBeer;
