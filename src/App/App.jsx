// Import du style
import './App.scss';

// Import de React
import Loader from '../Components/Loader/Loader';
import GamePromo from '../Components/GamePromo/GamePromo';
import GameAbout from '../Components/GameAbout/GameAbout';

// Import d'images

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <GamePromo />
      <GameAbout />
    </div>
  );
}

export default App;
