import React, { Component } from 'react';

class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  moveCard = () => {
    this.props.removeCard(this.props.id)
  }

  render() {
    const {content} = this.props;
    return (
      <div className='card'>
        <div className='left-arrow' onClick={this.moveCard}>
        {'<'}
        </div>
        <div className='card-content'>
        {content}
        </div>
        <div className='right-arrow' onClick={this.moveCard}>
        {'>'}
        </div>
      </div>
    )
  }
}

export default Card;
