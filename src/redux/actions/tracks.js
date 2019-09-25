const STE_CANVAS = 'STE_CANVAS';
const STE_CONTEXT = 'STE_CONTEXT';
const STE_GRID = 'STE_GRID';

// tracks actions
export const setCanvas = canvas => ({
  type: STE_CANVAS,
  canvas
});

export const setContext = context => ({
  type: STE_CONTEXT,
  context
});

export const setGrid = context => ({
  type: STE_GRID,
  context
});
