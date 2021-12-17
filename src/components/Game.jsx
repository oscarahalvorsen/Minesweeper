import Board from './Board.jsx'
import Tile from './Tile.jsx'
import Tiles from './Tiles.jsx'

const Game = () => {
    return (
        <div className='Game'>
            <Tiles level="3"/>
            <Board size="3"/>
            <Tile number="3" covered/>
        </div>
    )
}

export default Game
