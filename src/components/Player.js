import React from 'react';
import {Counter} from "./Counter";

export const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.handleRemovePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score} id={props.id} handleChangeScore={props.handleChangeScore}/>
    </div>
  );
}