import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_ERROR,
} from './constants';

export const fetchUser = text => ({
  type: USER_FETCH,
})

export const fetchUserSuccess = (data) => ({
  type: USER_FETCH_SUCCESS,
  payload: data,
})

export const fetchUserError = (error) => ({
  type: USER_FETCH_ERROR,
  error,
})