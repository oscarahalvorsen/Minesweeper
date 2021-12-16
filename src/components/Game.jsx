import Board from './Board.jsx';
import Tile from './Tile.jsx';

const Game = () => {
    return (
        <div>
            <Board size="3"/>
            <Tile number="3" covered/>
        </div>
    )
}

export default Game
