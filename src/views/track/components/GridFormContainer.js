import React, { Component } from 'react';
import { Button, Input } from 'antd';

class GridFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClearClick = this.onClearClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onClearClick() {
    console.log('清除被点击', this);
  }

  onSaveClick() {
    console.log('保存被点击');
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClearClick} id='clear-track' >清除</Button>
        <Button onClick={this.onSaveClick} id='save-track' >保存</Button>
        <Input id='track-name' placeholder='路径名称' />
      </div>
    );
  }
}

export default GridFormContainer;
