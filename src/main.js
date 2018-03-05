import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'

import { hasWon } from './utils'
import Theme from './../style/theme'
import Board from './components/Board'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Theme.padding.regular
  },
  button: {
    marginTop: Theme.padding.regular
  },
  buttonText: {
    color: '#fff'
  },
  turn: {
    marginTop: Theme.padding.regular,
    fontFamily: Theme.font.family.regular
  },
  winner: {
    fontFamily: Theme.font.family.regular
  }
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      xIsNext: true,
      winner: ''
    }

    this.onClick = this.onClick.bind(this)
    this.reset = this.reset.bind(this)
  }

  onClick(i, j) {
    const { xIsNext, board, winner } = this.state

    if (winner !== null && winner.length > 0) {
      return
    }

    if (board[i][j] !== '') {
      return
    }

    let letter = xIsNext ? 'x' : 'o'
    const newBoard = board.slice()
    newBoard[i][j] = letter

    this.setState({
      board: newBoard,
      xIsNext: !xIsNext
    })

    if (hasWon(newBoard, i, j)) {
      this.setState({ winner: (letter === 'x' ? '1' : '2') })
    }
  }

  reset() {
    this.setState({
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      xIsNext: true,
      winner: ''
    })
  }

  render() {
    const { board, winner, xIsNext } = this.state
    // Switch because game is over
    const letter = xIsNext ? 'o' : 'x'

    return (
      <div style={styles.container}>
        <Board board={board} onClick={this.onClick} />
        <RaisedButton
          style={styles.button}
          label='Reset'
          labelColor={styles.buttonText.color}
          onClick={this.reset}
          secondary
        />
        <div style={styles.turn}>
          {
            winner === '' ? (xIsNext ? `It's Player X's turn` : `It's Player O's turn`): null
          }
        </div>
        <div style={styles.winner}>
          {
            winner === '' ? null : `Player ${letter} has won`
          }
        </div>
      </div>
    )
  }
}

export default Main
