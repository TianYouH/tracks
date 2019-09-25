const STE_CANVAS = 'STE_CANVAS';
const STE_CONTEXT = 'STE_CONTEXT';

// tracks actions
export const setCanvas = canvas => ({
  type: STE_CANVAS,
  canvas
});

export const setContext = context => ({
  type: STE_CONTEXT,
  context
});
