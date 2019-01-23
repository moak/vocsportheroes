import { fork, put, takeLatest, all } from 'redux-saga/effects';
import { fetchChallengesSuccess, fetchChallengesError } from './actions';
import { CHALLENGES_FETCH } from './constants';

function* fetchChallenges() {

  // const result = yield fetch('https://randomuser.me/api/').then(response => response.json());
  const result = [
    {
      _id: 1,
      name: 'super challenge 1',
      description: 'blablablablabla'
    },
    {
      _id: 2,
      name: 'super challenge 2',
      description: 'blablablablabla'
    },
    {
      _id: 3,
      name: 'super challenge 3',
      description: 'blablablablabla'
    },
  ]
  try {
    yield put(fetchChallengesSuccess(result));
  }
  catch(error) {
    yield put(fetchChallengesError(error));
  }
}


function* watchFetchChallenges() {
  yield takeLatest(CHALLENGES_FETCH, fetchChallenges);
}

export const challengesSagas = [
  fork(watchFetchChallenges),
];


// function* actionWatcher() {
//   yield takeLatest(CHALLENGES_FETCH, fetchChallenges)
// }

// export const challengesSagas = [
//   // fork(fetchChallenges),
//   yield all([
//     actionWatcher(),
//   ]);
// ];

// export default actionWatcher;

// export function* challengesSagas() {
//   yield all([
//     actionWatcher(),
//   ]);
// }


// export default function* root() {
//   yield all([
//     fork(actionWatcher),
//   ])
// }

