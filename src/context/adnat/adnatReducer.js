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
  USERS_CHANGE_PASSWORD,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case AUTH_SIGNUP:
      return {
        ...state,
        sessionId: action.payload.sessionId,
        loading: false
      };
    case AUTH_LOGIN:
      return {
        ...state,
        sessionId: action.payload.sessionId,
        loading: false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        sessionId: '',
        loading: false
      };
    case ORGS_GET:
    case ORGS_CREATE_JOIN:
    case ORGS_JOIN:
    case ORGS_UPDATE:
    case ORGS_LEAVE:
    case SHIFTS_GET:
    case SHIFTS_CREATE:
    case SHIFTS_UPDATE:
    case SHIFTS_DELETE:
    case USERS_GET:
    case USERS_GET_INFO:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case USERS_UPDATE_INFO:
    case USERS_CHANGE_PASSWORD:
    default:
      return state;
  }
};
