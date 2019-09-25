import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    count: PropTypes.number.isRequired,
    hello: PropTypes.string.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecrementClick: PropTypes.func.isRequired,
    onSayHello: PropTypes.func.isRequired
  }

  render() {
    const { count, hello, onIncreaseClick, onDecrementClick, onSayHello } = this.props;
    return (
      <div>
        <button type='button' onClick={onIncreaseClick}>加</button>
        <button type='button' onClick={onDecrementClick}>减</button>
        <button type='button' onClick={onSayHello} >说 你好</button>
        <div>
          <p>次数：{count}</p>
          <p>说：{hello}</p>
        </div>
      </div>
    );
  }
}

export default Counter;
