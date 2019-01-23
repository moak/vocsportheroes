/**
 * Sagas
 */

import { all } from 'redux-saga/effects';

import userSagas from './user/sagas';
// import challengesSagas from './challenges/sagas';
import { challengesSagas } from './challenges/sagas';
import { challengeSagas } from './challenge/sagas';

export default function* sagas() {
  yield all([
    userSagas,
    challengesSagas,
    challengeSagas,
  ]);
}
