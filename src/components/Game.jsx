import React from 'react'
import './Game.css'
import {Link} from 'react-router-dom'



const Game = ({ image, name, rate, release, id, slug, clip, genres, screens, deleteGame}) => {

    return (

        <div className='game' key={id}>

            <h1>{name}</h1>
            
            <h3>{genres}</h3>
            
            <h6>Date of release : {release}</h6>
            
            <p>Rated : {rate}</p>
            
            <img src={image} alt={name}></img>

            <p>Regarder la vidéo de présentation :</p>
            <iframe src={clip} title={slug} key={id}></iframe>

            <div className='screens'>

                <p>Accèder aux screenshots du jeu :</p>

                <div className='screenshots'>
                    {screens.map(screen => (
                        <img key={screen.id} alt={screen.id} src={screen.image}></img>
                    ))}

                </div>

            </div>
            
            <Link to={{
                pathname: `/jeu/screenshots/${id}`,
                screens : {screens},
                name : {name}
            }}>Voir le sreenshot</Link>
            
            <button onClick={() => deleteGame({id})}>Delete this game</button>

        </div>
    )
}


export default Game