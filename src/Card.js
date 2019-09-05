import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    const content = this.props.content || 'Empty Card';

    this.state = {content: content};
  }

  moveCard = () => {
    this.props.removeCard(0)
  }

  render() {
    const {content} = this.state;
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
