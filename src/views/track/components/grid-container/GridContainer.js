import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from './grid';
import { gridWidth, gridHeight, canvasWidth, canvasHeight, BRICK_SIZE } from '@/redux/reducers/tracks';

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      context: null,
      grid: null
    };
    this.onGridClicked = this.onGridClicked.bind(this);
  }

  static propTypes = {
    setContext: PropTypes.func.isRequired,
    setGrid: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { setContext, setGrid } = this.props;
    const { canvas } = this.refs;
    const context = canvas.getContext('2d');
    setContext(context);
    const grid = new Grid(gridWidth, gridHeight, BRICK_SIZE);
    setGrid(grid);
    // store = new Store();
    this.setState({
      canvas,
      context,
      grid
    }, () => {
      this.draw();
    });
  }

  // 绘制
  draw() {
    const { context, grid } = this.state;
    this.clearCanvas();

    /*
    亚像素准确性
    注意：会将绘制内容向右下移动半个像素，因为需要绘制1像素的线条，而计算机显示1像素线条时，会比2个像素的线条要模糊。
  */
    context.translate(0.5, 0.5);

    grid.draw(context);
  }

  // 重置画布
  clearCanvas() {
    const { canvas } = this.state;
    // document.
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  }

  onGridClicked(event) {
    console.log('事件：', { a: event.target });
    console.log('事件：', { a: event.offsetX });
    console.log('事件：', { a: event.layerX });
  }

  render() {
    return <canvas ref='canvas' id='grid' onClick={this.onGridClicked}></canvas>;
  }
}

export default GridContainer;
