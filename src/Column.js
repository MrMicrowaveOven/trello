import React, { Component } from 'react';
import Card from './Card.js'

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {cards: []};
  }

  addCard = () => {
    let {cards} = this.state;
    const id = this.getId();

    let newCard = {
      id: id,
      content: "Empty Card " + id
    }
    cards.push(newCard);
    this.setState({cards: cards})
  }


  getId = () => {
    const {cards} = this.state;
    let potId = cards.length === 0
      ? 1
      : Math.max.apply(null, cards.map((card) => card.id)) + 1;
    while (cards.filter((card) => card.id === potId).length > 0) {
      potId = potId + 1;
    }
    return potId
  }


  deleteCard = (cardIndex) => {
    let {cards} = this.state;
    const cardToBeDeleted = cards.filter((el) => {
      return el.id === cardIndex;
    })[0]

    const indexOfCardToBeDeleted = cards.indexOf(cardToBeDeleted)
    cards.splice(indexOfCardToBeDeleted, 1)

    this.setState({cards: cards})
  }

  render() {
    const {cards} = this.state;
    return (
      <div className='column'>
        <div className='column-name'>
          Title
        </div>
        {cards.map((value) => {
          return <Card content={value.content} id={value.id} removeCard={this.deleteCard}/>
        })}
        <div className='add-card-button' onClick={this.addCard}>
          Add a card!
        </div>
      </div>
    )
  }
}

export default Column;
