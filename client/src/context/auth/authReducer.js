import {
    CLEAR_ERRORS,
    SET_LOADING,
    LOGOUT,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    USER_LOADED,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from './../types.js'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    
    switch (action.type) {
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case SIGNUP_FAIL:
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