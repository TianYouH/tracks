import React, { Component } from 'react';
import { Button } from 'antd';
import Circle from './bricks/circle';
import Curve from './bricks/curve';
import Square from './bricks/square';
import Triangle from './bricks/triangle';

class BricksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButton: null,
      SelectedBrickClass: null
    };
  }

  onBrickClick(event) {
    console.log('砖块被点击', event.target.id);
    const id = event.target.id;
    this.setBrick(id);
  }

  // 设置选中砖块类型
  setBrick(buttonID) {
    const { currentButton } = this.state;
    // console.log('选中的id', buttonID);
    if (currentButton) {
      currentButton.disabled = false;
    }
    this.setState(
      {
        currentButton: document.getElementById(buttonID)
      },
      () => {
        currentButton.disabled = true;
      }
    );

    switch (buttonID) {
      case 'square-brick':
        this.setState({
          SelectedBrickClass: Square
        });
        break;
      case 'triangle-brick':
        this.setState({
          SelectedBrickClass: Triangle
        });
        break;
      case 'circle-brick':
        this.setState({
          SelectedBrickClass: Circle
        });
        break;
      case 'curve-brick':
        this.setState({
          SelectedBrickClass: Curve
        });
        break;
    }
  }

  render() {
    return (
      <section id='bricks-container' style={{ width: '100px' }}>
        <Button onClick={this.onBrickClick} id='square-brick'>
          方形
        </Button>
        <Button onClick={this.onBrickClick} id='triangle-brick'>
          三角
        </Button>
        <Button onClick={this.onBrickClick} id='circle-brick'>
          圆形
        </Button>
        <Button onClick={this.onBrickClick} id='curve-brick'>
          扇形
        </Button>
      </section>
    );
  }
}

export default BricksContainer;
