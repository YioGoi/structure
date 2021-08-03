// Base URL
export const BASE_URL = process.env.REACT_APP_APM_API_URL

export const API = {
    // USER
    GET_USER_BY_USERID: '/api/v1/user/get-user-by-id',
    GET_CONNECTED_USERS: '/api/v1/user/get-connected-users',
    GET_CHECK_IS_GENERAL_MANAGER: '/api/v1/user/check-is-general-manager',
    GET_CEO_BY_COMPANY_ID: '/api/v1/user/get-ceo-by-companyId/',
    GET_CONNECTED_USER_BY_USER_ID: '/api/v1/manager-management/get-connected-user-by-user-id',

}