import {
  CHALLENGES_FETCH,
  CHALLENGES_FETCH_SUCCESS,
  CHALLENGES_FETCH_ERROR,
} from './constants';

export const fetchChallenges = () => ({
  type: CHALLENGES_FETCH,
})

export const fetchChallengesSuccess = (data) => ({
  type: CHALLENGES_FETCH_SUCCESS,
  payload: data,
})

export const fetchChallengesError = (error) => ({
  type: CHALLENGES_FETCH_ERROR,
  error,
})