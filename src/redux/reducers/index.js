import { combineReducers } from 'redux';
import artists from './artists';
import search from './search';
import burger from './burger';

const rootReducer = combineReducers({
  hasNotifications: true,
  search: search,
  artists: artists,
  burger: burger
});

export default rootReducer;