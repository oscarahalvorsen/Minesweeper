import { useState } from "react"
import React from 'react'
import Tile from './Tile.jsx'

const Tiles = ({level}) => {
    const [tiles, setTiles] = useState([
        {
            number: 4,
            covered: true,
        },
        {
            number: 4,
            covered: true,
        },
        {
            number: 1,
            covered: false,
        },
        {
            number: 0,
            covered: false,
        },
        {
            number: 0,
            covered: false,
        },

    ])
    return (
        <div class="row">
            <div class="column">
                {tiles.map(({number, covered}) => (
                    <Tile number={number} covered={covered}/>
                    ))
                }
            </div>
            <div class="column">
                {tiles.map(({number, covered}) => (
                    <Tile number={number} covered={covered}/>
                    ))
                }
            </div>
            <div class="column">
                {tiles.map(({number, covered}) => (
                        <Tile number={number} covered={covered}/>
                        ))
                    } 
            </div>
            <div class="column">
                {tiles.map(({number, covered}) => (
                    <Tile number={number} covered={covered}/>
                    ))
                }
            </div>
            <div class="column">
                {tiles.map(({number, covered}) => (
                    <Tile number={number} covered={covered}/>
                    ))
                }  
            </div>
        </div>    
    )
}

export default Tiles
