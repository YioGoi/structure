import {
  SEND_MESSAGE
} from "./socialServicesActionTypes"

// initial state
const initialState = {
  messageToOperationRoom: ''
}

// Message Reducer
const socialServicesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state,
        messageToOperationRoom: action.payload
      }

    default:
      return state
  }
}

export default socialServicesReducer