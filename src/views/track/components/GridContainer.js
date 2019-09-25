import React, { Component } from 'react';

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onGridClicked() {
    console.log('网格被点击');
  }

  render() {
    return (
      <canvas id='grid' onClick={this.onGridClicked} ></canvas>
    );
  }
}

export default GridContainer;
