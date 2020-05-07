import React from 'react'
import './GameDetails.css'
import {Link} from 'react-router-dom'


const GameDetails = (props) => {
    const screens = props.location.screens.screens
    const game = props.location.name.name

    return(
        <>
            <nav>
                <ul>
                    <Link to={{ pathname: `/` }}><li>Home</li></Link>
                </ul>
            </nav>
            
            <h1>{game}</h1>

            <div className='screenshot'>
            {screens.map(screen => (
                <img key={screen.id} alt={screen.id} src={screen.image}></img>
            ))}

            </div>

    </>

    )
}

export default GameDetails 