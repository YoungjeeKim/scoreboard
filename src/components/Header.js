import React from 'react';
import {Statistics} from "./Statistics";


export const Header = (props) => {
  const {title} = props; //destruct assignment

  return (
    <header>
      <Statistics players={props.players}/>
      <h1>{title}</h1>
    </header>
  );
}