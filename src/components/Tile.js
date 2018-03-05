import React from 'react'

const styles = {
  button: {
    backgroundColor: '#fff',
    border: '1px solid #999',
    float: 'left',
    fontSize: '48px',
    fontWeight: 'bold',
    lineHeight: '56px',
    height: '100px',
    marginRight: '-1px',
    marginTop: '-1px',
    padding: 0,
    width: '100px'
  }
}

const Tile = ({ value, onClick }) => (
  <button style={styles.button} onClick={onClick}>
    {value}
  </button>
)

export default Tile
