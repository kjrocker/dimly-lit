import React, { Component } from 'react';
import { DIMLY, LIT, COMMITTEE } from './constants';
import './App.css';

Array.prototype.sample = function() {
  const length = this.length;
  const index = Math.floor(Math.random() * length);
  return this[index];
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 'dimly',
      second: 'lit',
      third: 'committee'
    };
  }

  rollDice = e => {
    this.setState({
      first: DIMLY.sample(),
      second: LIT.sample(),
      third: COMMITTEE.sample()
    });
  };

  render() {
    const { first, second, third } = this.state;
    return (
      <div className="app">
        <div className="title">
          <h1 className="header">{`${first} ${second} ${third}`}</h1>
        </div>
        <button className="roll-button" onClick={this.rollDice}>
          Roll the Dice
        </button>
      </div>
    );
  }
}

export default App;
