import { combineReducers } from 'redux';
import counter from './counter'; // counter reducers
import todos from './todos'; // todo reducers
import visibilityFilter from './visibilityFilter'; // todo reducers

export default combineReducers({
  todos,
  visibilityFilter,
  counter
});
