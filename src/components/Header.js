import React from 'react';

export const Header = (props) => {
  const {title, totalPlayers} = props; //destruct assignment

  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players : {totalPlayers}</span>
    </header>
  );
}