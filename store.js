var Store = function () {
  this.tracks = [];
}

// 保存当前路径
Store.prototype.saveTrack = function (brickArray) {
  let brickValues = brickArray.map(this.getDataForBrick);
  let trackJSON = JSON.stringify(brickArray);

  this.tracks.push(trackJSON);

  return this.tracks.length - 1;
}

// 处理brick类内容 节省空间，降低复杂度
Store.prototype.getDataForBrick = function (brick) {
  let values = {};

  values.column = brick.column;
  values.row = brick.row;
  values.type = brick.type;
  values.rotation = brick.rotation;

  return values;
}

// 获取指定路径
Store.prototype.getTrack = function (id) {
  let trackJSON = this.tracks[id];
  let bricksValues = JSON.parse(trackJSON);

  return bricksValues.map(this.getBrickForData);
}

// 将数据转换成包含实际砖块对象的数组
Store.prototype.getBrickForData = function (brickData) {
  let brick = new window[brickData.type]();

  brick.column = brickData.column;
  brick.row = brickData.row;
  brick.rotation = brickData.rotation;

  return brick;
}