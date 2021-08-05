import {
    SEND_MESSAGE,

    GET_ORGANIZATION_LIST_REQUEST,
    GET_ORGANIZATION_LIST_SUCCESS,
    GET_ORGANIZATION_LIST_FAILURE
} from './socialServicesActionTypes'

export const sendMessage = message => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}
export const getOrganizationListRequest = () => {
    return {
        type: GET_ORGANIZATION_LIST_REQUEST
    }
}
export const getOrganizationListSuccess = data => {
    return {
        type: GET_ORGANIZATION_LIST_SUCCESS,
        payload: data
    }
}
export const getOrganizationListFailure = err => {
    return {
        type: GET_ORGANIZATION_LIST_FAILURE,
        payload: err
    }
}