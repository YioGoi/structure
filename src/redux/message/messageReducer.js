import {
  SEND_MESSAGE
} from "./messageActionTypes"

// initial state
const initialState = {
  messageToOperationRoom: ''
}

// Message Reducer
const messageReducer = (state = initialState, action) => {
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

export default messageReducer