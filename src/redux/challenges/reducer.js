import {
  CHALLENGES_FETCH,
  CHALLENGES_FETCH_SUCCESS,
  CHALLENGES_FETCH_ERROR,
} from './constants';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
}

const challengesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHALLENGES_FETCH:
      return {
        ...state,
        isLoading: true,
      }
    case CHALLENGES_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case CHALLENGES_FETCH_ERROR:
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    default:
      return state
  }
}

export default challengesReducer