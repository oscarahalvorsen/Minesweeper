import { useState } from "react"
import React from 'react'
import TileView from "./TileView.jsx"
import {Game} from "../core/Game.jsx"


const TilesView = ({level}) => {
    let game = new Game(16,30,99).getBoard()
    console.log(game)
    return (
        <div className="tile">
            <div className="row">
                    {game.map(index1 => (
                        <div key={Math.random()} className="column">
                            {index1.map((index2) => (
                                <TileView number={index2.getType()} key={Math.random()}/>
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
