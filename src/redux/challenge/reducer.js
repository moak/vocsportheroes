import {
  CHALLENGE_FETCH,
  CHALLENGE_FETCH_SUCCESS,
  CHALLENGE_FETCH_ERROR,
} from './constants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
}

const challengeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHALLENGE_FETCH:
      return {
        ...state,
        isLoading: true,
      }
    case CHALLENGE_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case CHALLENGE_FETCH_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    default:
      return state
  }
}

export default challengeReducer