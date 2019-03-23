import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends Component {

  max_player_id = 4;

  state = {
    players: [
      {name: 'KYJ', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  //삭제
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  //점수 변환
  handleChangeScore = (id, delta) => {

    // console.log(id, delta);
    this.setState(prevState => {

      prevState.players.forEach(item => {
        if(item.id === id) {
          item.score += delta;
        }
      })
      return {players: [...prevState.players]}
    })
  }

  //사용자 추가
  handleAddPlayer = (name) => {
    this.setState(prevState => ({
      players: [...prevState.players, {name, score: 0, id: ++this.max_player_id}]
    }));
  }

  render() {
    return (
      <div className="scoreboard">

        <Header title="My scoreboard" totalPlayers={10 + 1} players={this.state.players}/>
        {
          this.state.players.map(player =>
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    score={player.score}
                    handleRemovePlayer={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore} />)
        }
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer}/>
      </div>

    );
  }
}

export default App;