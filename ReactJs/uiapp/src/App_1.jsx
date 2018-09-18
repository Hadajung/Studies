import React, { Component } from 'react';
import Square from './components/Square';

class App extends Component {
  state = {
    board: ["", "", "",
            "", "", "",
            "", "", ""],
    turn: 'X'
  }

  playerWon() {
    const board = this.state.board;
    const winning = [
      [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ];

    for(let i=0; i<winning.length; i++){
      const [a,b,c] = winning[i];
      //check if someone has won
      if(board[a] !== '' && board[a] === board[b] && board[b] === board[c]){
        return board[a];
      }
    }

    let isBoardFull = true;
    for(let i=0; i<board.length; i++) {
      if(board[i]===''){
        isBoardFull = false;
        break;
      }
    }
    if(!isBoardFull) {
      return '';
    }else {
      return 'tie';
    }
  }

  updateBoard(i) {
    let board = this.state.board.slice();
    let turn = this.state.turn;
    if (board[i] === '') {
      board[i] = turn;
      turn = turn === 'O' ? 'X' : 'O';
    }
    this.setState({
      board,
      turn
    })
  }


  render() {
    return (
      <div>
        <h1>{this.playerWon()}</h1>
        <div>
          <Square handleClick={this.updateBoard.bind(this, 0)}  value={this.state.board[0]} />
          <Square handleClick={this.updateBoard.bind(this, 1)}  value={this.state.board[1]} /><Square handleClick={this.updateBoard.bind(this, 2)}  value={this.state.board[2]} />
        </div>
        <div>
          <Square handleClick={this.updateBoard.bind(this, 3)}  value={this.state.board[3]} /><Square handleClick={this.updateBoard.bind(this, 4)}  value={this.state.board[4]} /><Square handleClick={this.updateBoard.bind(this, 5)}  value={this.state.board[5]} />
        </div>
        <div>
          <Square handleClick={this.updateBoard.bind(this, 6)}  value={this.state.board[6]} /><Square handleClick={this.updateBoard.bind(this, 7)}  value={this.state.board[7]} /><Square handleClick={this.updateBoard.bind(this, 8)}  value={this.state.board[8]} />
        </div>
      </div>
    );
  }
}

export default App;
