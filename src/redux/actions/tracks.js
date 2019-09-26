const STE_CANVAS = 'STE_CANVAS';
const STE_CONTEXT = 'STE_CONTEXT';
const STE_GRID = 'STE_GRID';
const STE_SELECTED_BRICK_CLASS = 'STE_SELECTED_BRICK_CLASS';
const STE_STORE = 'STE_STORE';
const UPDATE_TRACKLIST = 'UPDATE_TRACKLIST';

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

export const setStore = store => ({
  type: STE_STORE,
  store
});

export const updateTrackList = track => ({
  type: UPDATE_TRACKLIST,
  track
});
