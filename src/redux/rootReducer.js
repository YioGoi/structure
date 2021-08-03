import { combineReducers } from 'redux'
import socialServicesReducer from './modules/socialServices/socialServicesReducer'

const rootReducer = combineReducers(
  {
    socialServices: socialServicesReducer,
  }
)

export default rootReducer