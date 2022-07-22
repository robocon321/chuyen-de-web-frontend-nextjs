import axios from "axios";
import { handleError } from '../../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_ROLES: 'SET_ROLES',
  SET_USER: 'SET_USER',
  SET_ACCOUNT: 'SET_ACCOUNT',
  RESET: 'RESET'
}
const setLoadingAction = (isLoading) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

const loadRolesAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/roles`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_ROLES,
      payload: response.data.data
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const setErrorAction = (error) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error
  })
}

const setUserAction = (user) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_USER,
    payload: user
  })
}

const resetAction = () => (dispatch) => {
  dispatch({
    type: ACTIONS.RESET
  })
}

const saveUserAction = (user) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${backendUrl}/users`,
    data: [user]
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

export {
  ACTIONS,
  setLoadingAction,
  setErrorAction,
  loadRolesAction,
  setUserAction,
  resetAction,
  saveUserAction
}