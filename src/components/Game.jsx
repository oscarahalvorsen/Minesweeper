import Board from './Board.jsx'
import Tiles from './Tiles.jsx'

const Game = () => {
    return (
        <div className='Game'>
            <Board size="3"/>
            <Tiles level="3"/>
        </div>
    )
}

export default Game
