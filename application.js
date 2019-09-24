// 常量
var NUMBER_OF_COLUMNS = 10; // 网格列数
var NUMBER_OF_ROWS = 15; // 网格行数
var BRICK_SIZE = 30; // 格子大小

// 网格 宽高 变量
var gridWidth = NUMBER_OF_COLUMNS * BRICK_SIZE;
var gridHeight = NUMBER_OF_ROWS * BRICK_SIZE;

// Canvas 变量
var canvas; // canvas DOM 元素
var context; // 画布
var canvasWidth = gridWidth + 1;
var canvasHeight = gridHeight + 1;
 
// 应用 变量
var store = null; // store类实例
var grid = null; // 网格类实例
var selectedBrickClass = null;
var currentButton = null;

$(document).ready(function () {
  canvas = document.getElementById('grid');
  context = canvas.getContext('2d');

  grid = new Grid(gridHeight, gridHeight, BRICK_SIZE);

  initUI();
  draw();
});

// 初始化单击事件
function initUI() {
  $(canvas).click(onGridClicked);

  $('#bricks-container button').click(function (event) {
    event.preventDefault();
    
    let id = $(this).attr('id');
    setBrick(id);
  });
};

// 重置画布
function clearCanvas() {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
};

// 绘制
function draw() {
  clearCanvas();

  // 注意：会将绘制内容向右下移动半个像素，因为需要绘制1像素的线条，而计算机显示1像素线条时，会比2个像素的线条要模糊。
  context.translate(0.5, 0.5);
  
  grid.draw(context);
};

// 网格点击事件
function onGridClicked(event) {
  let mouseX = event.offsetX || event.layerX;
  let mouseY = event.offsetY || event.layerY;

  let column = Math.floor(mouseX / BRICK_SIZE);
  let row = Math.floor(mouseY / BRICK_SIZE);
  createBrickAt(column, row);
};

// 创建砖块
function createBrickAt(column, row) {
  if (!selectedBrickClass) return;
  let brick = new selectedBrickClass();
  brick.column = column;
  brick.row = row;

  grid.addBrick(brick, context);
}

// 设置选中砖块类型
function setBrick (buttonID) {
  if (currentButton) {
    currentButton.removeAttr('disabled');
  }
  currentButton = $('#' + buttonID);
  currentButton.attr('disabled', 'disabled');

  switch (buttonID) {
    case 'square-brick':
      selectedBrickClass = Square;
      break;
    case 'triangle-brick':
      selectedBrickClass = Triangle;
      break;
    case 'circle-brick':
      selectedBrickClass = Circle;
      break;
    case 'curve-brick':
      selectedBrickClass = Curve;
      break;
  }
};
