import React, { Component } from 'react';
import { Button } from 'antd';
class BricksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBrickClick(event) {
    console.log('砖块被点击', event);
  }

  render() {
    return (
      <section id='bricks-container' style={{ width: '100px' }} >
        <Button onClick={this.onBrickClick} id='square-brick' >方形</Button>
        <Button onClick={this.onBrickClick} id='triangle-brick' >三角</Button>
        <Button onClick={this.onBrickClick} id='circle-brick' >圆形</Button>
        <Button onClick={this.onBrickClick} id='curve-brick' >扇形</Button>
      </section>
    );
  }
}

export default BricksContainer;
