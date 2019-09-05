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
      <div>
        <div className="left-arrow" onClick={this.moveCard}>
        {"<"}
        </div>
        {content}
        <div className="right-arrow" onClick={this.moveCard}>
        {">"}
        </div>
      </div>
    )
  }
}

export default Card;
