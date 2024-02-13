import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE } from '../action'

const initialState = {
  list: {
    content: [],
  },
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        list: {
          ...state.list,
          content: [...state.list.content, action.payload],
        },
      }

    case REMOVE_TO_FAVORITE:
      return {
        ...state,
        list: {
          ...state.list,
          content: state.list.content.filter((job, i) => i !== action.payload),
        },
      }

    default:
      return state
  }
}

export default favoriteReducer
