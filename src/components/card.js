import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      //reveals the color
      showColor: false,
      bgColor: props.bgColor,
      count: props.count,
      //array to store selected cards
      selectedColor: props.selectedColor
    }
  }
  handlePick() {
    if ( this.state.count === 0 ) {
      console.log('keep playing');
    } else if ( this.state.count > 0 ) {
      console.log('you lose ');
    }
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div>
        <div 
        className='card' 
        style={{backgroundColor:this.state.bgColor}}
        onClick={this.handlePick}
        >
          <h2 className='clickCounter'>Click Counter: {this.state.count}</h2>
          <h2 className='clickCounter'>{this.state.bgColor}</h2>
        </div>
        <br />
      </div>
    );
  }
}


export default Card;