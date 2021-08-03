import { combineReducers } from 'redux'
import messageReducer from './message/messageReducer'

const rootReducer = combineReducers(
  {
    message: messageReducer,
  }
)

export default rootReducer