import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const favorite = configureStore({
  reducer: mainReducer,
})

export default favorite
