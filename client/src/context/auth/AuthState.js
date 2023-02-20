/* eslint-disable no-unused-vars */
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    SET_LOADING
} from './../types.js';

import axios from "axios";
import AuthContext from './authContext.js';
import { useReducer } from 'react';
import authReducer from './authReducer.js';

const AuthState = props => {
    const initialState = {
        isAuthenticated: null,
        loading: false,
        user: null,
    }


    const [state, dispatch] = useReducer(authReducer, initialState);

    // for users login
    const login = async (formData) => {

        dispatch({ type: SET_LOADING })
        
        try {

            const res = await axios.post('/api/v1/auth/login', formData);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            //load currently loggedin user after login
            loadUser();
            
        } catch (err) {
            console.log({'💥error💥':err.response.data});
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.message
            })
        }

        
    }
    // for users registration
    const register = () => {
        
    }

    // for google login/register
    const continueWithGoogle = () => {
        
    }
    // for facebook login/register
    const continueWithFacebook = () => {
        
    }

    // load currently logged in user
    const loadUser = () => {
        
    }

    // user logout
    const logout = () => {
        
    }





    return (
        <AuthContext.Provider
            value={{
                loading: state.loading,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                login,
                register,
                continueWithGoogle,
                continueWithFacebook,
                loadUser,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;