const Board = ({size}) => {
    var board = require("./images/MineField" + size + ".png")
    return (
        <img src={board} alt ="Board"></img>
    )
}

export default Board
