import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      count: 0,
      colors: props.colors,
      selectedColor: []
    };
  }
  handlePick(){
    console.log(this.state.selectedColor)
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
        <ul>
          {
            this.state.selectedColor.map((selectedColor) => (
              <li>{selectedColor}</li>
            ))
          }
        </ul>
          {
            this.state.colors.map((color) => (
              <div>
                <button onClick={this.handlePick}>+1 {this.state.count}</button>
                <Card
                  key={(color) => (color + '1')}
                  colorText={color}
                  bgColor={color}
                  count={this.state.count}
                  selectedColor={this.state.selectedColor}
                  handlePick={this.handlePick}
                />
                <Card
                  key={(color) => (color + '2')}
                  colorText={color}
                  bgColor={color}
                  count={this.state.count}
                  selectedColor={this.state.selectedColor}
                  handlePick={this.handlePick}
                />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  colors: ['red', 'blue', 'purple']
}

export default App;
