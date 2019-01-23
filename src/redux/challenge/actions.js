import {
  CHALLENGE_FETCH,
  CHALLENGE_FETCH_SUCCESS,
  CHALLENGE_FETCH_ERROR,
} from './constants';

export const fetchChallenge = () => ({
  type: CHALLENGE_FETCH,
})

export const fetchChallengeSuccess = (payload) => ({
  type: CHALLENGE_FETCH_SUCCESS,
  payload,
})

export const fetchChallengeError = (error) => ({
  type: CHALLENGE_FETCH_ERROR,
  error,
})