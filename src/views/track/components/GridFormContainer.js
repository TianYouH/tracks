import React, { Component } from 'react';

class GridFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClearClick() {
    console.log('清除被点击');
  }

  onSaveClick() {
    console.log('保存被点击');
  }

  render() {
    return (
      <form>
        <button onClick={this.onClearClick} type='button' id='clear-track' >清除</button>
        <button onClick={this.onSaveClick} type='button' id='save-track' >保存</button>
        <input type='text' id='track-name' placeholder='路径名称' />
      </form>
    );
  }
}

export default GridFormContainer;
