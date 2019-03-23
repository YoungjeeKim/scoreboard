import React from 'react';

export const Statistics = (props) => {
  const totalPlayer = props.players.length;
  let totalScore = 0;

  props.players.forEach(item => totalScore += item.score);

  return (
    <table>
      <tbody>
      <tr>
        <td>Players : </td>
        <td>{totalPlayer}</td>
      </tr>
      <tr>
        <td>Total Score : </td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
}