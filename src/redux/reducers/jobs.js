import { START_MAIN_SEARCH, START_FETCH, TURN_OFF_SPINNER } from '../action'
const initialState = {
  finded: [],
  loading: true,
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_MAIN_SEARCH:
      return {
        ...state,
        finded: action.payload,
      }
    case START_FETCH:
      return {
        ...state,
        finded: action.payload,
      }

    case TURN_OFF_SPINNER:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default jobsReducer
