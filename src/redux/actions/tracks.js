const STE_CANVAS = 'STE_CANVAS';
const STE_CONTEXT = 'STE_CONTEXT';
const STE_GRID = 'STE_GRID';
const STE_SELECTED_BRICK_CLASS = 'STE_SELECTED_BRICK_CLASS';

// tracks actions
export const setCanvas = canvas => ({
  type: STE_CANVAS,
  canvas
});

export const setContext = context => ({
  type: STE_CONTEXT,
  context
});

export const setGrid = grid => ({
  type: STE_GRID,
  grid
});

export const setSelectedBrickClass = SelectedBrickClass => ({
  type: STE_SELECTED_BRICK_CLASS,
  SelectedBrickClass
});
