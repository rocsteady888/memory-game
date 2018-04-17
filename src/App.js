import React, { Component } from 'react';
import './App.css';
import Cards from "./components/cards.js"
import Card from "./components/card.js";

class App extends Component {
  constructor(props) {
    super(props);
    const colors = ['red', 'blue', 'yellow', 'green', 'purple'];
  }
  render() {
    return (
      <div className="App">
        <Cards />
        <Card />
        <Card />
        <Card />
        <Card />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
