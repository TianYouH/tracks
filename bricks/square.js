var Square = function () {
  this.row = 0;
  this.column = 0;
  this.type = 'Square';
  this.rotation = 0; // 该类用处不大，兼容使用
}

Square.prototype.draw = function (context) {
  console.log('绘制方形');
  context.save(); // 保存context当前状况，相当于一次入栈处理

  context.translate(this.column * BRICK_SIZE, this.row * BRICK_SIZE);
  context.fillColor = 0;
  context.fillRect(0, 0, BRICK_SIZE, BRICK_SIZE);

  context.restore(); // context回到初始状态，回到最后一次执行save方法之前的状态
}