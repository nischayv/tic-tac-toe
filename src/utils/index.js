const hasWonRow = (board, row) => {
  for (let i = 1; i < board[row].length; i++) {
    if (board[row][i] !== board[row][0]) {
      return false
    }
  }
  return true
}

const hasWonCol = (board, col) => {
  for (let i = 1; i < board.length; i++) {
    if (board[i][col] !== board[0][col]) {
      return false
    }
  }
  return true
}

const hasWonDiagonal = (board, direction) => {
  let row = 0
  let col = direction === 1 ? 0 : board.length - 1
  let first = board[0][col]
  for (let i = 0; i < board.length; i++) {
    if (board[row][col] !== first) {
      return false
    }
    row++
    col += direction
  }
  return true
}

export const hasWon = (board, i, j) => {
  if (hasWonRow(board, i) || hasWonCol(board, j)) {
    return true
  }

  if (i === j && hasWonDiagonal(board, 1)) {
    return true
  }

  if (i === (board.length - j - 1) && hasWonDiagonal(board, -1)) {
    return true
  }

  return false
}
