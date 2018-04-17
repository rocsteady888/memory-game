import React, { Component } from 'react';
import './App.css';
import Card from "./components/card.js";
import Cards from "./components/cards.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors
    };
  }
  render() {
    return (
      <div className="App">
        <Cards 
          colors={this.state.colors}
        />
      </div>
    );
  }
}

App.defaultProps = {
  colors: ['red', 'blue', 'yellow', 'green', 'purple']
}

export default App;
