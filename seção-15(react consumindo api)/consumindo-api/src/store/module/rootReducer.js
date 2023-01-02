import { combineReducers } from 'redux';

import exempleReducer from './exemple/reducer';

export default combineReducers({
  exemple: exempleReducer,
});
