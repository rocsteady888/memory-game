import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      count: 0,
      showColor: false,
      bgColor: props.bgColor,
      colorText: props.colorText,
      key: props.colorText
    }
  }
  changeColor(props) {
    console.log(this.state.bgColor);
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        showColor: !this.state.showColor
      };
    });
  }
  render() {
    return (
      <div>
        <div 
        className='card' 
        style={{ backgroundColor: this.state.showColor ? this.state.bgColor : "gray" }} 
        onClick={this.changeColor}
        >
          <h2 className='clickCounter'>Click Counter: {this.state.count}</h2>
          <h2 className='clickCounter'>{this.state.colorText}</h2>
        </div>
        <br />
      </div>
    );
  }
}


export default Card;