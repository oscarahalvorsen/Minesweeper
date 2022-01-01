const TileView = ({game, number, covered, x, y}) => {
    var image = require('./images/' + (covered ? 'Covered' : 'Uncovered' + number) + '.png');
    const onClick = () => {
        game.uncover(x, y)
        console.log("onClick: " + x + ":" + y)
        
    }
    return <img src={image} alt="Tile" onClick={onClick}/>
}

TileView.defaultProps = {
    number: 0,
    covered: false
}

export default TileView

