import React from 'react';
import BigField from './BigField';

const players = [ 'X', 'O' ]

class Game extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      values: Array(9).fill(Array(9).fill(null)),
      currentPlayer: players[0]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  changePlayer() {
    const current = this.state.currentPlayer;

    const index = players.findIndex(player => player === current);
    console.log(index);
    if (index === -1) {
      throw new Error('NO_PLAYER_FINDED');
    }

    const next = (index + 1 < players.length) ?
      players[index + 1] :
      players[0];

    this.setState({ currentPlayer: next });
  }

  handleClick(i, j) {
    console.log(i, j);

    const values = JSON.parse(JSON.stringify(this.state.values));

    values[i][j] = this.state.currentPlayer;

    this.changePlayer();

    this.setState({
      values
    });
  }

  render() {
    return (
      <div>
        <div>Game</div>
        <BigField values={this.state.values} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Game;