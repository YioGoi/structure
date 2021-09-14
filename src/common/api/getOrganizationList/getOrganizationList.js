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

    const bodyToSend = {
        _dc: 1628160784841,
        page: 1,
        start: 0,
        limit: 100,
        sort: [{"property":"id","direction":"ASC"}]
    }

    //let queryString = '?_dc=1628160784841&page=1&start=0&limit=100&sort=%5B%7B%22property%22%3A%22id%22%2C%22direction%22%3A%22ASC%22%7D%5D'

    let dc = encodeURIComponent(bodyToSend._dc)
    let page = encodeURIComponent(bodyToSend.page)
    let start = encodeURIComponent(bodyToSend.start)
    let limit = encodeURIComponent(bodyToSend.limit)
    let sort = encodeURIComponent(JSON.stringify(bodyToSend.sort))

    let queryString = '?_dc=' + dc + '&page=' + page + '&start=' + start + '&limit=' + limit + '&sort=' + sort 

    store.dispatch(getOrganizationListRequest())

    fetch(BASE_URL + API.GET_ORGANIZATION_LIST + queryString, { credentials: 'include', mode: 'cors' })
        .then(
            function (response) {
                if (response.status !== 200) {
                    store.dispatch(getOrganizationListFailure(''))
                    return
                }

                response.json().then(function (data) {
                    store.dispatch(getOrganizationListSuccess(data))
                })
            }
        )
        .catch(err => {
            store.dispatch(getOrganizationListFailure(err))
        })
}