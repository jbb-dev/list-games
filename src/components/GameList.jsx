import React from 'react'
import Axios from 'axios'
import Game from './Game'

class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gamesList : []
        }

    this.deleteGame = this.deleteGame.bind(this)

    }

    componentDidMount() {
        this.getData()
    }

    // componentDidUpdate(prevState) {
    //     if (prevState.gamesList !== this.state.gamesList) {
    //       console.log('state has changed.')
    //     }
    //   }

    getData() {
        Axios
        .get('https://wild-games.herokuapp.com/api/v1')
        .then(res=> this.setState({ gamesList : res.data }))
        .catch(error => console.log(error))

    }

    deleteGame = (gameId) => {
        let currentList = this.state.gamesList
        let filteredList = currentList.filter(game => game.id !== gameId.id)
        this.setState({ gamesList : filteredList })
    }


    render() {
// console.log(this.state.gamesList)
        return (
            <>

            <button>BEST GAMES</button>

            {this.state.gamesList.map(game => (
                
                <div key={game.id}>
                    <Game 
                        image = {game.background_image}
                        name = {game.name}
                        rate = {game.rating}
                        release = {game.released}
                        id = {game.id}
                        slug = {game.slug}
                        genres = {game.genres.map(genre=> genre.name + ' ')}
                        clip = {game.clip.clip}
                        screens = {game.short_screenshots}
                        deleteGame = {this.deleteGame}
                    />
                
                </div>))
                
            }
            

            </>
        )
    }

    
}


export default GameList