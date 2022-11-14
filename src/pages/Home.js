import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import HomeCards from "../components/HomeCards";

function Home(props) {
  return (
    <div>
      <HomeCards
        imagem={beers}
        title="All Beers"
        text="We can view all the beers on the menu"
        link="/allbeers"
      />
      <HomeCards
        imagem={randomBeer}
        title="Random Beer"
        text="A beer could random showed from menu!"
        link="/randombeer"
      />
      <HomeCards
        imagem={newBeer}
        title="New Beer"
        text="A new beer could be added to menu!"
      />
    </div>
  );
}

export default Home
