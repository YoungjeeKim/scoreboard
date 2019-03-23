import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";


class App extends React.Component {

  state = {
    players: [
      {name: 'KYJ', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  handleChangeScore = (id, delta) => {

    // console.log(id, delta);
    this.setState(prevState => {

      prevState.players.forEach(item => {
        if(item.id === id) {
          item.score += delta;
        }
      })

      //새로운 배열에 dcoby
      // object.assign
      // spread 연산자 : ...
      // [] :새로운 배열을 만든다
      return {players: [...prevState.players]}
    })
  }

  render() {
    return (
      <div className="scoreboard">

        <Header title="My scoreboard" totalPlayers={this.state.players.length} />
        {
          this.state.players.map(player =>
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    score={player.score}
                    handleRemovePlayer={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore} />)
        }
      </div>
    );
  }
}

export default App;