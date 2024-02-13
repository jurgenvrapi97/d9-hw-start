export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
export const REMOVE_TO_FAVORITE = 'REMOVE_TO_FAVORITE'
export const START_FETCH = 'START_FETCH'
export const TURN_OFF_SPINNER = 'TURN_OFF_SPINNER'
export const START_MAIN_SEARCH = 'START_MAIN_SEARCH'

export const addToFavorite = (data) => {
  return {
    type: 'ADD_TO_FAVORITE',
    payload: data,
  }
}

export const removeToFavorite = (i) => {
  return {
    type: 'REMOVE_TO_FAVORITE',
    payload: i,
  }
}

export const mainFetch = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: START_MAIN_SEARCH,
          payload: data,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      })
    }
  }
}

export const startFetch = (company) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: START_FETCH,
          payload: data,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      })
    }
  }
}
