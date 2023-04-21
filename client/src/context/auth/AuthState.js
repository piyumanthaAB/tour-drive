/* eslint-disable no-unused-vars */
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from './../types.js';

import axios from 'axios';
import AuthContext from './authContext.js';
import { useReducer } from 'react';
import authReducer from './authReducer.js';
import toast, { Toaster } from 'react-hot-toast';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // for users login
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    dispatch({ type: SET_LOADING });

    const { email, password } = formData;

    console.log({ email, password });

    try {
      const res = await axios.post(
        '/api/v1/auth/login',
        { email, password },
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data.user,
      });

      console.log({ res });
      toast.success('Login Success', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
      //load currently loggedin user after login
      loadUser();
    } catch (err) {
      console.log({ '💥error💥': err });
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message,
      });
      toast.error(`${err.response.data.message}`, {
        icon: '😥',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
      throw err;
    }
  };
  // for users registration
  const signup = async (formData) => {
    dispatch({ type: SET_LOADING });

    const { email, password, confirmPassword: passwordConfirm } = formData;

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        '/api/v1/auth/signup',
        { email, password, passwordConfirm },
        config
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.data.user,
      });
      toast.success('Signup Success', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });

      // console.log({ res });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.data.message,
      });
      toast.error(`${err.response.data.message}`, {
        icon: '😥',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    }
  };

  // for google login/register
  const continueWithGoogle = async ({ googleAccessToken }) => {
    // console.log({ googleAccessToken });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        '/api/v1/auth/google',
        { googleAccessToken },
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data.user,
      });
      console.log({ res });

      toast.success(' Success', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
      // load user
      loadUser();
    } catch (err) {
      console.log(`login error: ${err}`);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
      toast.error(' Error', {
        icon: '😥',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    }
  };
  // for facebook login/register
  const continueWithFacebook = () => {};

  // load currently logged in user
  const loadUser = async () => {
    try {
      dispatch({
        type: SET_LOADING,
      });
      const res = await axios.get('/api/v1/auth/get-current-user');
      dispatch({
        type: USER_LOADED,
        payload: res.data.data.currentUser,
      });
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // user logout
  const logout = async () => {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const res = await axios.get('/api/v1/auth/logout', config);
      dispatch({
        type: LOGOUT,
      });
      toast.success('Logout Success', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    } catch (err) {
      dispatch({
        type: LOGOUT,
      });
      toast.error(' Error', {
        icon: '😥',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
        },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        login,
        signup,
        continueWithGoogle,
        continueWithFacebook,
        loadUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
