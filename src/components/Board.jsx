const Board = ({size}) => {
    var board = require("./images/MineField" + size + ".png")
    return (
        <div>
            <img src={board} alt ="Board" className="board"></img>
        </div>
    )
}

export default Board
