import React from 'react'
import Axios from 'axios'

class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gamesList : []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        Axios
        .get('https://wild-games.herokuapp.com/api/v1')
        .then(res=> this.setState({ gamesList : res.data }))
        .catch(error => console.log(error))

    }


    render() {
        console.log(this.state.gamesList)
        return (
            <>

            <h1>Test Game</h1>

            </>
        )
    }

    
}


export default GameList