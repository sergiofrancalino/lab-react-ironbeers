import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { useState } from "react";
import Backhome from "./components/BackHome";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";

function App(props) {
  const [allBeers, SetAllBeers] = useState();
  const [randomBeer, setRandombeer] = useState();

  return (
    <div className="App">
      <Backhome />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/allbeers" element={<AllBeers />} />

        <Route path="/randombeer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
