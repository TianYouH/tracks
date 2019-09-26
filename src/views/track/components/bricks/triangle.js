import { BRICK_SIZE } from '@/redux/reducers/tracks';

export default class Triangle {
  constructor() {
    this.row = 0;
    this.column = 0;
    this.type = 'Triangle';
    this.rotation = 0; // 该类用处不大，兼容使用
  }
  draw(context) {
    context.save(); // 保存context当前状况，相当于一次入栈处理

    context.translate(this.column * BRICK_SIZE, this.row * BRICK_SIZE);

    context.translate(BRICK_SIZE / 2, BRICK_SIZE / 2);
    context.rotate((this.rotation * Math.PI) / 180);
    context.translate(-BRICK_SIZE / 2, -BRICK_SIZE / 2);

    context.beginPath();

    context.fillColor = 0;
    context.moveTo(0, 0);
    context.lineTo(BRICK_SIZE, BRICK_SIZE);
    context.lineTo(0, BRICK_SIZE);

    context.closePath();

    context.fill();

    context.restore(); // context回到初始状态，回到最后一次执行save方法之前的状态
  }
}
