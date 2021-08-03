import {
    SEND_MESSAGE
} from './messageActionTypes'

export const sendMessage = message => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}
