  
import React from 'react'
import TileView from "./TileView.jsx"
import {Game} from "../core/Game.jsx"


const TilesView = ({level}) => {
    let game = new Game(30,16,99)
    console.log(game.toString())
    return (
        <div className="tile">  
            <div className="row">
                    {game.getBoard().map((tileRow, y) => (
                        <div key={Math.random()} className="column">
                            {tileRow.map((tile, x) => (
                                <TileView game={game} number={tile.getType()} x={x} y={y} key={Math.random()}/>
                            ))}
                        </div>
                        ))
                    }
            </div>
        </div>
        /*
        <div className="tiles">
            <div className="row">
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                            <Tile number={number} covered={covered}/>
                            ))
                        } 
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
                <div className="column">
                    {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    }  
                </div>
            </div>   
        </div> 
        */
    )
}

export default TilesView
