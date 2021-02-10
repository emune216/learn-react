import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: 'name',
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
  }

  /* constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
  } */

  state = {
    number: 0,
  }

  render() {
    return (
      <div>
        <p>hello, my name is {this.props.name}.</p>
        <p>i'm {this.props.age} years old.</p>
        <p>number: {this.state.number}</p>
        <button onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
        }}>plus</button>
      </div>
    )
  }
}

export default MyComponent;
