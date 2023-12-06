// Import du style
import './App.scss';
import backgroundStar from '../assets/SWO-Background.png';

// Import de React
import Loader from '../Components/Loader/Loader';
import GamePromo from '../Components/GamePromo/GamePromo';
import GameAbout from '../Components/GameAbout/GameAbout';
import GameNews from '../Components/GameNews/GameNews';

// Import d'images

function App() {
  const styleBackground = {
    backgroundImage: `linear-gradient(
      90deg,
      rgba(0,0,0,.65) 0%,
      rgba(0,0,0,.85) 20%,
      rgba(0,0,0,.85) 80%,
      rgba(0,0,0,.65) 100%),
      url('${backgroundStar}')`,
  };

  return (
    <div className="App" style={styleBackground}>
      {/* <Loader /> */}
      <GamePromo />
      <GameAbout />
      <GameNews />
    </div>
  );
}

export default App;
