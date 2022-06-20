import GlobalStyles from "./components/styles/Global";

import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import GamesList from "./components/GamesList";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Carousel />
      <GamesList />
    </>
  );
}

export default App;
