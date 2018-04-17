import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.state = {
      count: props.count
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div>
        <div className='card' onClick={this.handleAddOne}>
          <h1 className='clickCounter'>Click Counter: {this.state.count}</h1>
        </div>
        <br />
      </div>
    );
  }
}

Card.defaultProps = {
  count: 0
};

export default Card;