import React, { useReducer } from 'react';
import axios from 'axios';
import AdnatContext from './adnatContext';
import AdnatReducer from './adnatReducer';
import {
  AUTH_SIGNUP,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  ORGS_GET,
  ORGS_CREATE_JOIN,
  ORGS_JOIN,
  ORGS_UPDATE,
  ORGS_LEAVE,
  SHIFTS_GET,
  SHIFTS_CREATE,
  SHIFTS_UPDATE,
  SHIFTS_DELETE,
  USERS_GET,
  USERS_GET_INFO,
  USERS_UPDATE_INFO,
  USERS_CHANGE_PASSWORD
} from '../types';

const AdnatState = props => {
  const initialState = {
    sessionId: '',
    loading: false,
    user: {}
  };

  const [state, dispatch] = useReducer(AdnatReducer, initialState);

  const signUp = async (name, email, password, passwordConfirmation) => {
    const request = {
      method: 'post',
      url: `${process.env.REACT_APP_API_HOST}/auth/signup`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name,
        email,
        password,
        passwordConfirmation
      }
    };

    const response = await axios(request);

    dispatch({
      type: AUTH_SIGNUP,
      payload: response.data
    });
  };

  const getUserInfo = async sessionId => {
    const request = {
      method: 'get',
      url: `${process.env.REACT_APP_API_HOST}/users/me`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${sessionId}`
      }
    };

    const response = await axios(request);
    dispatch({
      type: USERS_GET_INFO,
      payload: response.data
    });
  };

  return (
    <AdnatContext.Provider
      value={{
        sessionId: state.sessionId,
        user: state.user,
        signUp,
        getUserInfo
      }}
    >
      {props.children}
    </AdnatContext.Provider>
  );
};

export default AdnatState;
