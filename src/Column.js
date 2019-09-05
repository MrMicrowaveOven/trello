import React, { Component } from 'react';
import Card from './Card.js'

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {cards: []};
  }

  addCard = () => {
    let {cards} = this.state;

    let cardContent = window.prompt("Enter Card content");
    cards.push(cardContent);
    this.setState({cards: cards})
  }

  deleteCard = (cardIndex) => {
    console.log(cardIndex)
    let {cards} = this.state;

    cards.splice(cardIndex, 1)
    this.setState({cards: cards})
  }

  render() {

    const {cards} = this.state;
    return (
      <div className='column'>
        <div className='column-name'>
          Title
        </div>
        <Card removeCard={this.deleteCard}/>
        <Card removeCard={this.deleteCard}/>
        {cards.map((value) => {
          return <Card content={value} removeCard={this.deleteCard}/>
        })}
        <div onClick={this.addCard}>
          Add a card!
        </div>
      </div>
    )
  }
}

export default Column;
