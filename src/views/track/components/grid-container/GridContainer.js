import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from './grid';
import Store from './store';
import { gridWidth, gridHeight, canvasWidth, canvasHeight, BRICK_SIZE } from '@/redux/reducers/tracks';

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: null,
      context: null,
      grid: null,
      store: null
    };
    this.onGridClicked = this.onGridClicked.bind(this);
  }

  static propTypes = {
    onRef: PropTypes.func,
    SelectedBrickClass: PropTypes.any, // 选中的类
    setContext: PropTypes.func.isRequired,
    setGrid: PropTypes.func.isRequired,
    setStore: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { setContext, setGrid, setStore, onRef } = this.props;
    onRef(this);

    const { canvas } = this.refs;
    canvas.addEventListener('click', this.onGridClicked);

    const context = canvas.getContext('2d');
    setContext(context);

    const grid = new Grid(gridWidth, gridHeight, BRICK_SIZE);
    setGrid(grid);

    const store = new Store();
    setStore(store);

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

  // 网格点击事件
  onGridClicked (event) {
    const { grid } = this.state;
    // console.log('事件：', event);
    const mouseX = event.offsetX || event.layerX;
    const mouseY = event.offsetY || event.layerY;

    const column = Math.floor(mouseX / BRICK_SIZE);
    const row = Math.floor(mouseY / BRICK_SIZE);

    const selectedBrick = grid.getBrickAt(column, row);
    if (selectedBrick) {
      selectedBrick.rotation += 90;
      this.draw();
    } else {
      this.createBrickAt(column, row);
    }
  }

  // 创建砖块
  createBrickAt(column, row) {
    const { grid, context } = this.state;
    const { SelectedBrickClass } = this.props;
    if (!SelectedBrickClass) return;
    const brick = new SelectedBrickClass();
    brick.column = column;
    brick.row = row;

    grid.addBrick(brick, context);
  }

  render() {
    return <canvas ref='canvas' id='grid' ></canvas>;
  }
}

export default GridContainer;
