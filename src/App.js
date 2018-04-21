import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.shuffle = this.shuffle.bind(this)
    this.state = {
      count: 0,
      colors: props.colors,
      selectedColor: []
    };
  }
  componentDidUpdate(){
    console.log('updated');
  }
  shuffle(props) {
    for (let i = this.state.colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.colors[i], this.state.colors[j]] = [this.state.colors[j], this.state.colors[i]];
    }
    console.log(props.colors);
    return props.colors;
  }
  render() {
    return (
      <div className="App container" onClick={this.shuffle}>
        <div className="row">
          {
            this.state.colors.map((color) => (
              <div>
                <Card
                  key={color}
                  colorText={color}
                  bgColor={color}
                  count={this.state.count}
                  selectedColor={this.state.selectedColor}
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
  colors: ['red', 'blue', 'purple', 'pink', 'yellow', 'green', 'magenta', 'turquoise', 'orange', 'indigo', 'aqua', 'firebrick']
}

export default App;
