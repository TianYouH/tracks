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
var grid = null; // grid类实例
var selectedBrickClass = null;
var currentButton = null;

$(document).ready(function () {
  canvas = document.getElementById('grid');
  context = canvas.getContext('2d');

  // 清空画布，确保没有内容
  clearCanvas();
});

// 重置画布
function clearCanvas() {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}