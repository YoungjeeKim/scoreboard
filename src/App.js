import React from 'react';
import './App.css';


const Header = (props) => {

  console.log(props);
  //변수 선언하면 {props.tilte} 대신 {title} 사용 가능
  const {title, totalPlayers} = props; //destruct assignment

  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players : {totalPlayers}</span>
    </header>
  );

}

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 30
    }

  }

  incrementScore = () => {
    console.log(this);
    this.setState(prevState => {
      return {score: prevState.score + 1}
    });
  }

  decrementScore = () => {
    this.setState(prevState => {
      return {score: prevState.score - 1}
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.handleRemovePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter />
    </div>
  );
}


class App extends React.Component {
  state = {
    players: [
      {name: 'KYJ', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />


        { this.state.players.map(player =>
          <Player name={player.name} key={player.id.toString()}
                  handleRemovePlayer={this.handleRemovePlayer} id={player.id} />)
        }
      </div>
    );
  }
}

export default App;