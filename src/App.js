import React, { Component } from 'react';
import './App.css';
import Card from "./components/card.js";

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
        {
          this.state.colors.map((color) => (
            <div>
              <Card
                key={(color) => (color + '1')}
                colorText={color}
                bgColor={color}
              />
              <Card
                key={(color) => (color + '2')}
                colorText={color}
                bgColor={color}
              />
            </div>
          ))
        }
      </div>
    );
  }
}

App.defaultProps = {
  colors: ['red', 'blue', 'yellow', 'green', 'purple', 'magenta', "orange", "salmon", "indigo", "lightblue", "pink"]
}

export default App;
