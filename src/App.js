import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import Backhome from "./components/BackHome";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";

function App(props) {
  const [allBeers, setAllBeers] = useState();


  return (
    <div className="App">
      <Backhome />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/allbeers" element={<AllBeers beers={allBeers} setBeers={setAllBeers}/>} />

        <Route path="/singlebeer/:beerID" element={<SingleBeer />} />

        <Route path="/randombeer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
