const Tile = ({number, covered}) => {
    var image = require('./images/' + (covered ? 'Covered' : 'Uncovered' + number) + '.png');
    return (
        <img src={image} alt="Tile"></img>
    )
}

export default Tile
