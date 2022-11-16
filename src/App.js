import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from 'react-hot-toast'

import HomePage from "./pages/HomePage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import Navbar from './components/Navbar';
import NewBeer from "./pages/NewBeer";

function App(props) {
  const [allBeers, setAllBeers] = useState();


  return (
    <div className="App">
      <Navbar />

      <Toaster />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/allbeers" element={<AllBeers beers={allBeers} setBeers={setAllBeers}/>} />

        <Route path="/singlebeer/:beerID" element={<SingleBeer />} />

        <Route path="/randombeer" element={<RandomBeer />} />

        <Route path="/new-beer" element={<NewBeer/>}/>

      </Routes>
    </div>
  );
}

export default App;
