import {
    CLEAR_ERRORS,
    SET_LOADING,
    LOGOUT,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    USER_LOADED
} from './../types.js'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            
    
        default:
            return state;
    }
}