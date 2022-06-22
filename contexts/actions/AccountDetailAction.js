import axios from "axios";
import { handleError } from '../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER',
  SET_USER_ACCOUNT: 'SET_USER_ACCOUNT',
  SET_ERROR: 'SET_ERROR'
}

const updateUserAction = (user) => async (dispatch) => {
  await axios({
    method: 'PUT',
    url: `${backendUrl}/users`,
    data: user
  }).then((response) => {
    console.log(response);
    dispatch({
      type: ACTIONS.SET_USER,
      payload: response.data.data
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const updateUserAccountAction = (userAccount) => async (dispatch) => {
  await axios({
    method: 'PUT',
    url: `${backendUrl}/userAccounts`,
    data: userAccount
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_USER_ACCOUNT,
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

const changeUserAction = (user) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_USER,
    payload: user
  });
}

const changeUserAccountAction = (userAccount) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_USER_ACCOUNT,
    payload: userAccount
  });
}

const changeLoading = (isLoading) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

export {
  ACTIONS,
  updateUserAction,
  updateUserAccountAction,
  changeUserAction,
  changeUserAccountAction,
  changeLoading,
  setErrorAction
}