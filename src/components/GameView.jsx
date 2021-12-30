import Board from './Board.jsx'
import TilesView from './TilesView.jsx'

const GameView = () => {
    return (
        <div className='Game'>
            <Board size="3"/>
            <TilesView level="3"/>
        </div>
    )
}

export default GameView
