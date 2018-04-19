import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.selectColor = this.selectColor.bind(this);
    // this.handlePick = this.handlePick.bind(this);
    this.state = {
      //reveals the color
      showColor: false,
      bgColor: props.bgColor,
      count: props.count,
      //array to store selected cards
      selectedColor: props.selectedColor
    }
  }
  //when a user clicks on a card that cards info is stored in array 
  selectColor(props) {
    console.log(this.state.bgColor);
    let colorSearch = this.state.selectedColor.indexOf(this.state.bgColor);
    let colorArrLen = this.state.selectedColor.length;
    console.log(colorSearch);
    console.log(colorArrLen);
    if ( colorArrLen < 1 & colorSearch < 0 ) {
      console.log('first guess, add to array');
      this.setState((prevState) => {
        return {
          showColor: !this.state.showColor,
          selectedColor: this.state.selectedColor.push(this.state.bgColor)
        };
      });
    } else if ( colorArrLen = 1 & colorSearch > -1 ) {
      console.log('matched!');
      this.setState((prevState) => {
        return {
          showColor: !this.state.showColor,
          selectedColor: []
        };
      });
    } else if ( colorArrLen = 1 & colorSearch < 0 ) {
      console.log('not a match');
      this.setState((prevState) => {
        return {
          showColor: !this.state.showColor,
          selectedColor: []
        };
      });
    } else {
      console.log('something else happened');
    }
  }
  render() {
    return (
      <div>
        <div 
        className='card' 
        style={{ backgroundColor: this.state.showColor ? this.state.bgColor : "gray" }} 
        onClick={this.selectColor}
        >
          <h2 className='clickCounter'>Click Counter: {this.props.count}</h2>
          <h2 className='clickCounter'>{this.state.bgColor}</h2>
        </div>
        <br />
      </div>
    );
  }
}


export default Card;