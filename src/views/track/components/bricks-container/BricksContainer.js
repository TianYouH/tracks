import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import Circle from '../../class/bricks/circle';
import Curve from '../../class/bricks/curve';
import Square from '../../class/bricks/square';
import Triangle from '../../class/bricks/triangle';

class BricksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButton: null,
      SelectedBrickClass: null
    };
    this.onBrickClick = this.onBrickClick.bind(this);
    this.setBrick = this.setBrick.bind(this);
  }

  static propTypes = {
    setSelectedBrickClass: PropTypes.func.isRequired
  };

  onBrickClick(event) {
    // console.log('砖块被点击', event.target.id);
    const id = event.target.id;
    this.setState({
      currentButton: id
    });
    this.setBrick(id);
  }

  // 设置选中砖块类型
  setBrick(buttonID) {
    const { setSelectedBrickClass } = this.props;
    // console.log('选中的id', buttonID);

    switch (buttonID) {
      case 'square-brick':
        setSelectedBrickClass(Square);
        this.setState({
          SelectedBrickClass: Square
        });
        break;
      case 'triangle-brick':
        setSelectedBrickClass(Triangle);
        this.setState({
          SelectedBrickClass: Triangle
        });
        break;
      case 'circle-brick':
        setSelectedBrickClass(Circle);
        this.setState({
          SelectedBrickClass: Circle
        });
        break;
      case 'curve-brick':
        setSelectedBrickClass(Curve);
        this.setState({
          SelectedBrickClass: Curve
        });
        break;
    }
  }

  render() {
    const { currentButton } = this.state;
    return (
      <section id='bricks-container' style={{ width: '100px' }}>
        <Button disabled={ currentButton === 'square-brick' } onClick={this.onBrickClick} id='square-brick'>
          方形
        </Button>
        <Button disabled={ currentButton === 'triangle-brick' } onClick={this.onBrickClick} id='triangle-brick'>
          三角
        </Button>
        <Button disabled={ currentButton === 'circle-brick' } onClick={this.onBrickClick} id='circle-brick'>
          圆形
        </Button>
        <Button disabled={ currentButton === 'curve-brick' } onClick={this.onBrickClick} id='curve-brick'>
          扇形
        </Button>
      </section>
    );
  }
}

export default BricksContainer;
