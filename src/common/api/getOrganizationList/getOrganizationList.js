// Redux imports
import store from '../../../redux/store'
// Redux actions
import {
    getOrganizationListRequest,
    getOrganizationListSuccess,
    getOrganizationListFailure
} from '../../../redux'

// Config Files
import { BASE_URL, API } from '../../Config'

export default function getOrganizationList() {

    let queryString = '?_dc=1628160784841&page=1&start=0&limit=100&sort=%5B%7B%22property%22%3A%22id%22%2C%22direction%22%3A%22ASC%22%7D%5D'  
    store.dispatch(getOrganizationListRequest())

    debugger
    
    fetch(BASE_URL + API.GET_ORGANIZATION_LIST + queryString, { credentials: 'include', mode: 'cors' })
        .then(
            function (response) {
                debugger
                if (response.status !== 200) {
                    store.dispatch(getOrganizationListFailure(''))
                    return
                }

                response.json().then(function (data) {
                    debugger
                    store.dispatch(getOrganizationListSuccess(data))
                })
            }
        )
        .catch(err => {
            store.dispatch(getOrganizationListFailure(err))
        })
}