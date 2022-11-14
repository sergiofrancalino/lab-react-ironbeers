import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {

 const [beers, setBeers] = useState([])
 const [reload, setReload] = useState(false)

 useEffect(() => {
  async function fetchBeers() {
    const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    setBeers(response.data);
  }

  fetchBeers();

}, [reload]);

function handleReload() {
  setReload(!reload);
}

return (
  <div>
    <h1>All Beers da API</h1>

    <form>
      <input type="text" placeholder="What's the new beer's name?" />
      <input type="text" placeholder="The new beer's tagline!?"/>
      <button>Save Now</button>
    </form>

    <button onClick={handleReload}>Atualizar!!</button>

    {beers.map((beer) => {
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

export default AllBeers