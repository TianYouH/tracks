/* eslint-disable no-unused-vars */
import Circle from '../../components/bricks-container/bricks/circle';
import Curve from '../../components/bricks-container/bricks/curve';
import Square from '../../components/bricks-container/bricks/square';
import Triangle from '../../components/bricks-container/bricks/triangle';

export default class Store {
  constructor() {
    this.tracks = [];
  }
  // 保存当前路径
  saveTrack(brickArray) {
    brickArray.map(this.getDataForBrick);
    const trackJSON = JSON.stringify(brickArray);

    this.tracks.push(trackJSON);

    return this.tracks.length - 1;
  }

  // 处理brick类内容 节省空间，降低复杂度
  getDataForBrick(brick) {
    const values = {};

    values.column = brick.column;
    values.row = brick.row;
    values.type = brick.type;
    values.rotation = brick.rotation;

    return values;
  }

  // 获取指定路径
  getTrack(id) {
    const trackJSON = this.tracks[id];
    const bricksValues = JSON.parse(trackJSON);

    return bricksValues.map(this.getBrickForData);
  }

  // 将数据转换成包含实际砖块对象的数组
  getBrickForData(brickData) {
    let brick = null;
    switch (brickData.type) {
      case 'Circle':
        brick = new Circle();
        break;
      case 'Curve':
        brick = new Curve();
        break;
      case 'Square':
        brick = new Square();
        break;
      default:
        brick = new Triangle();
        break;
    }

    brick.column = brickData.column;
    brick.row = brickData.row;
    brick.rotation = brickData.rotation;

    return brick;
  }
}
