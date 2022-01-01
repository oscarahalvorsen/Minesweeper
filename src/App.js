import './App.css';
import Header from "./components/Header.jsx"
import GameView from "./components/GameView.jsx"
import TilesView from './components/TilesView.jsx';
import Tile from "./core/Tile.jsx"
import Game from "./core/Game.jsx"

function App() {
 
  return (
    <div className="App">
      <Header/>
      <TilesView level={3}/>
    </div>
  );
}

export default App;
