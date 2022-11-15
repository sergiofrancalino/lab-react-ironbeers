import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AllBeers from "./AllBeers";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }

    fetchBeers();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  return (
    <div>
      <h1>All Beers</h1>

      <form className="newber">
        <input type="text" placeholder="New beer's name?" />
        <input type="text" placeholder="New beer's tagline..." />
        <button>Save Now</button>
      </form>

      <button onClick={handleReload}>Atualizar!!</button>

      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img className="imagem" src={beer.image_url} alt="Beer Type" />
            <p>Beer Name: {beer.name}</p>
            <p>Tagline: {beer.tagline}</p>
            <p>Contributed By: {beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
