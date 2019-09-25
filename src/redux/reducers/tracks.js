
// 常量
export const NUMBER_OF_COLUMNS = 10; // 网格列数
export const NUMBER_OF_ROWS = 15; // 网格行数
export const BRICK_SIZE = 30; // 格子大小

// 网格 宽高 变量
export const gridWidth = NUMBER_OF_COLUMNS * BRICK_SIZE;
export const gridHeight = NUMBER_OF_ROWS * BRICK_SIZE;

// // Canvas 变量
// export let canvas; // canvas DOM 元素
// export let context; // 画布
export const canvasWidth = gridWidth + 1;
export const canvasHeight = gridHeight + 1;

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'STE_CANVAS':
      return Object.assign({}, state, {
        canvas: action.canvas
      });
    case 'STE_CONTEXT':
      return Object.assign({}, state, {
        context: action.context
      });
    case 'STE_GRID':
      return Object.assign({}, state, {
        grid: action.grid
      });
    default:
      return state;
  }
};

const initialState = {
  // canvas 变量
  canvas: null, // canvas DOM 元素
  context: null, // 画布
  grid: null // 网格类实例
};

export default todos;
