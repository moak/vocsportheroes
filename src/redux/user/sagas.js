import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserError } from './actions';
import { USER_FETCH } from './constants';

function* fetchUser() {
  const result = yield fetch('https://randomuser.me/api/').then(response => response.json());
  try {
    yield put(fetchUserSuccess(result.results[0]));
  }
  catch(error) {
    yield put(fetchUserError(error));
  }
}

function* actionWatcher() {
  yield takeLatest(USER_FETCH, fetchUser)
}

export default function* userSagas() {
  yield all([
    actionWatcher(),
  ]);
}