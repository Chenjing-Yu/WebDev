import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';

function Square(props) {
    const className = props.highlight ? 'square win-square' : 'square';
    return (
      <button className={className} onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  }

class Board extends React.Component {
  renderSquare(i) {
    const highlight = this.props.winLine && this.props.winLine.includes(i);
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
        highlight={highlight}
      />
    );
  }

  render() {
    const indexes = [0, 1, 2];
    return (
      <div>
        {indexes.map((i) => {
          return (
            <div key={i} className="board-row">
              {indexes.map((j) => this.renderSquare(3*i+j))}
            </div>
        );
        })}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        location: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      ascendMoves: true,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();

    if (squares[i] || calculateWinLine(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        location: i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  changeSortType() {
    this.setState((preState) => ({
      ascendMoves: !preState.ascendMoves
    }));
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winLine = calculateWinLine(current.squares);
    const status = winLine ?
      'Winner: ' + current.squares[winLine[0]] :
      'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    const sortBtnValue = this.state.ascendMoves
      ? 'Descend'
      : 'Ascend';
    let sortedHistory = history.slice().map((item, index) => ({[index]: item}));
    if (!this.state.ascendMoves) sortedHistory = sortedHistory.reverse();
    const moves = sortedHistory.map((item) => {
      const move = Object.keys(item)[0];
      const info = Object.values(item)[0];
      const desc = move !== '0' ?
        (`Go to move #${move} at
          (${Math.floor(info.location/3) + 1}, ${info.location%3 + 1})`) :
        'Go to game start';
      const style = this.state.stepNumber === move ?
        {fontWeight: 'bold'} : {fontWeight: 'normal'};
      return (
        <li key={move}>
          <button style={style} onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            winLine={winLine}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>
            <Button
              variant='outlined'
              color='primary'
              size='small'
              onClick={() => this.changeSortType()}
              >{sortBtnValue}</Button>
          </div>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinLine(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}
