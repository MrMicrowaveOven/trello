import React, { Component } from 'react';
import Column from './Column.js';

class Board extends Component {
  // constructor(props) {
  //   super(props);
  // }

  addCardToColumn = (columnIndex) => {
  }

  render() {
    return (
      <div className='board'>
        <Column />
      </div>
    )
  }
}

export default Board;
