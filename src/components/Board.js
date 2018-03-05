import React from 'react'
import Tile from './Tile'

const Board = ({ board, onClick }) => (
  <div>
    <div>
      <Tile value={board[0][0]} onClick={() => onClick(0, 0)} />
      <Tile value={board[0][1]} onClick={() => onClick(0, 1)} />
      <Tile value={board[0][2]} onClick={() => onClick(0, 2)} />
    </div>
    <div>
      <Tile value={board[1][0]} onClick={() => onClick(1, 0)} />
      <Tile value={board[1][1]} onClick={() => onClick(1, 1)} />
      <Tile value={board[1][2]} onClick={() => onClick(1, 2)} />
    </div>
    <div>
      <Tile value={board[2][0]} onClick={() => onClick(2, 0)} />
      <Tile value={board[2][1]} onClick={() => onClick(2, 1)} />
      <Tile value={board[2][2]} onClick={() => onClick(2, 2)} />
    </div>
  </div>
)

export default Board
