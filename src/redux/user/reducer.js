import {
  USER_FETCH,
  USER_FETCH_SUCCESS,
  USER_FETCH_ERROR,
} from './constants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        isLoading: true,
      }
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case USER_FETCH_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    default:
      return state
  }
}

export default userReducer