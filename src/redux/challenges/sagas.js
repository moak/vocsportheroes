import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchChallengesSuccess, fetchChallengesError } from './actions';
import { CHALLENGES_FETCH } from './constants';

function* fetchChallenges() {

  console.log('YOOOO', fetchChallenges);

  const result = yield fetch('https://randomuser.me/api/').then(response => response.json());
  try {
    yield put(fetchChallengesSuccess(result.results));
  }
  catch(error) {
    yield put(fetchChallengesError(error));
  }
}

function* actionWatcher() {
  yield takeLatest(CHALLENGES_FETCH, fetchChallenges)
}

export default function* challengesSagas() {
   yield all([
    actionWatcher(),
   ]);
}