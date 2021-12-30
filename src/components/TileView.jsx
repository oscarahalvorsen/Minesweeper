const TileView = ({number, covered}) => {
    var image = require('./images/' + (covered ? 'Covered' : 'Uncovered' + number) + '.png');
    return <img src={image} alt="Tile"></img>
}

TileView.defaultProps = {
    number: 0,
    covered: false
}

export default TileView

