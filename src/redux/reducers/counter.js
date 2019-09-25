const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case 'SAY_HELLO':
      return Object.assign({}, state, {
        hello: state.hello + 'hello! '
      });
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  hello: 'I say'
};

export default counterReducer;
