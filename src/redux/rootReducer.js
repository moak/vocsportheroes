import { combineReducers } from 'redux';

import challenges from './challenges/reducer';
import challenge from './challenge/reducer';
import user from './user/reducer';

export default combineReducers({
  challenges,
  challenge,
  user,
})