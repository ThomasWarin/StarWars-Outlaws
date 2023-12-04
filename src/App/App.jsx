// Import du style
import './App.scss';

// Import de React
import Loader from '../Components/Loader/Loader';
import GamePromo from '../Components/GamePromo/GamePromo';

// Import d'images

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <GamePromo />
    </div>
  );
}

export default App;
