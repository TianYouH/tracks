var Circle = function () {
  this.row = 0;
  this.column = 0;
  this.type = 'Circle';
  this.rotation = 0; // 该类用处不大，兼容使用
}

Circle.prototype.draw = function (context) {
  let radius = BRICK_SIZE / 2;

  context.save(); // 保存context当前状况，相当于一次入栈处理

  context.translate(this.column * BRICK_SIZE, this.row * BRICK_SIZE);
  context.fillColor = 0;

  context.beginPath();
  context.arc(radius, radius, radius, 0, Math.PI * 2);
  context.closePath();
  context.fill();

  context.restore(); // context回到初始状态，回到最后一次执行save方法之前的状态
}
