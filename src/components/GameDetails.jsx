import React from 'react'


const GameDetails = (props) => {
    const screens = props.location.screens.screens
    const game = props.location.name.name

    return(
        <>
            <h1>{game}</h1>

            <div className='screenshots'>
            {screens.map(screen => (
                <img key={screen.id} alt={screen.id} src={screen.image}></img>
            ))}

            </div>

    </>

    )
}

export default GameDetails 