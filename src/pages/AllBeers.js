import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers(allBeers, setAllBeers) {
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
  /* 
  function handleReload() {
    setReload(!reload);
  } */

  return (
    <Container className="my-1">
      <h1>​🆓 All the Beers </h1>

      {/*     <button onClick={handleReload}>Atualizar!!</button> */}

      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/singlebeer/${beer._id}`}>
              <img src={beer.image_url} alt="Beer Type" />
            </Link>
            <p>Beer Name: {beer.name}</p>
            <p>Tagline: {beer.tagline}</p>
            <p>Contributed By: {beer.contributed_by}</p>
          </div>
        );
      })}
    </Container>
  );
}

export default AllBeers;
