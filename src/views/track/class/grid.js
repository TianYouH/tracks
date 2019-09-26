import { gridWidth, gridHeight } from '@/redux/reducers/tracks';

export default class Grid {
  constructor(width, height, cellSize) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.bricks = []; // 砖块管理
  }

  draw(context) {
    this.drawGrid(context);
    // console.log('你好世界：', context);
    for (let i = 0; i < this.bricks.length; i++) {
      this.bricks[i].draw(context);
    }
  }

  drawGrid(context) {
    context.strokeRect(0, 0, this.width, this.height);

    const numberOfColumns = this.width / this.cellSize;
    const numberOfRows = this.height / this.cellSize;

    context.beginPath();

    // 绘制列
    for (let column = 0; column < numberOfColumns; column++) {
      context.moveTo(column * this.cellSize, 0);
      context.lineTo(column * this.cellSize, gridHeight);
    }

    // 绘制行
    for (let row = 0; row < numberOfRows; row++) {
      context.moveTo(0, row * this.cellSize);
      context.lineTo(gridWidth, row * this.cellSize);
    }

    context.stroke();
  }

  // 添加砖块到网格
  addBrick(brick, context) {
    this.bricks.push(brick);

    brick.draw(context);
  }

  // 获取指定坐标砖块
  getBrickAt(column, row) {
    for (let i = 0; i < this.bricks.length; i++) {
      if (this.bricks[i].column === column && this.bricks[i].row === row) {
        return this.bricks[i];
      }
    }
    return null;
  }

  // 清除砖块
  clear() {
    this.bricks = [];
  }
}
