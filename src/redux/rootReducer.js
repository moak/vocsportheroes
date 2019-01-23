import { combineReducers } from 'redux';

import challenges from './challenges/reducer';
import user from './user/reducer';

export default combineReducers({
  challenges,
  user,
})