/**
 * Sagas
 */

import { all } from 'redux-saga/effects';

import userSagas from './user/sagas';
import challengeSagas from './challenges/sagas';

export default function* sagas() {
  yield all([
    userSagas,
    challengeSagas,
  ]);
}
