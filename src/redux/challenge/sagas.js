import { fork, put, takeLatest, all } from 'redux-saga/effects';
import { fetchChallengeSuccess, fetchChallengeError } from './actions';
import { CHALLENGE_FETCH } from './constants';

function* fetchChallenge() {

  // const result = yield fetch('https://randomuser.me/api/').then(response => response.json());
  const result = {
    _id: 1,
    name: 'super challenge 1',
    description: 'blablablablabla'
  };
  try {
    yield put(fetchChallengeSuccess(result));
  }
  catch(error) {
    yield put(fetchChallengeError(error));
  }
}


function* watchFetchChallenge() {
  yield takeLatest(CHALLENGE_FETCH, fetchChallenge);
}

export const challengeSagas = [
  fork(watchFetchChallenge),
];


// function* actionWatcher() {
//   yield takeLatest(CHALLENGE_FETCH, fetchChallenge)
// }

// export const challengesSaga = [
//   // fork(fetchChallenge),
//   yield all([
//     actionWatcher(),
//   ]);
// ];

// export default actionWatcher;

// export function* challengesSaga() {
//   yield all([
//     actionWatcher(),
//   ]);
// }


// export default function* root() {
//   yield all([
//     fork(actionWatcher),
//   ])
// }

