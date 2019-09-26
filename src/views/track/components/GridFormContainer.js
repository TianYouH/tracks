import React, { Component } from 'react';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';

class GridFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackName: ''
    };
    this.onClearClick = this.onClearClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  static propTypes = {
    onClearClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired
  }

  onClearClick() {
    console.log('清除被点击', this);
  }

  onSaveClick() {
    console.log('保存被点击');
  }

  render() {
    const { onClearClick, onSaveClick } = this.props;
    return (
      <div>
        <Button onClick={onClearClick} id='clear-track' >清除</Button>
        <Button onClick={() => onSaveClick(this.trackName)} id='save-track' >保存</Button>
        <Input id='track-name' onChange={(e) => {
          this.trackName = e.target.value;
        }} placeholder='路径名称' />
      </div>
    );
  }
}

export default GridFormContainer;
