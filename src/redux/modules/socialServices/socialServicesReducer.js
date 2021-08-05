import {
  SEND_MESSAGE,

  GET_ORGANIZATION_LIST_REQUEST,
  GET_ORGANIZATION_LIST_SUCCESS,
  GET_ORGANIZATION_LIST_FAILURE
} from "./socialServicesActionTypes"

// initial state
const initialState = {
  messageToOperationRoom: '',

  organizationListLoading: false,
  organizationList: null,

}

// Message Reducer
const socialServicesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state,
        messageToOperationRoom: action.payload
      }
    case GET_ORGANIZATION_LIST_REQUEST:
      return {
        ...state,
        organizationListLoading: true
      }
    case GET_ORGANIZATION_LIST_SUCCESS:
      return {
        ...state,
        organizationListLoading: false,
        organizationListFailure: false,
        organizationList: action.payload
      }
    case GET_ORGANIZATION_LIST_FAILURE:
      return {
        ...state,
        organizationListLoading: false,
        organizationListFailure: action.payload
      }

    default:
      return state
  }
}

export default socialServicesReducer