import { combineReducers } from 'redux';
import todos from './todos'; // todo reducers
import visibilityFilter from './visibilityFilter'; // todo reducers

export default combineReducers({
  todos,
  visibilityFilter
});
