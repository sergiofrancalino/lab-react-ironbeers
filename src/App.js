import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import Navbar from './components/Navbar';

function App(props) {
  const [allBeers, setAllBeers] = useState();


  return (
    <div className="App">
      <Navbar />

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
