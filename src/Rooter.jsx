import React from "react";
import { Switch, Route } from "react-router-dom";
import GameList from './components/GameList'
import GameDetails from './components/GameDetails'
// import Game from './components/Game'

const Rooter = () => {
  return (
    <>
      <Switch>
          
        <Route exact path="/" component={GameList} />
        <Route path='/jeu/screenshots/:id' component={GameDetails} />

      </Switch>
    </>
  );
};

export default Rooter;
