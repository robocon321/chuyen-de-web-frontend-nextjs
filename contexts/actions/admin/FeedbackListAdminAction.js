import axios from "axios";
import { handleError } from '../../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_CONDITIONS: 'SET_CONDITIONS',
  SET_FEEDBACKS: 'SET_FEEDBACKS',
  SET_SELECTED: 'SET_SELECTED',
  DELETE_POSTS: 'DELETE_USERS',
  SET_ACTION: 'SET_ACTION',
  SET_REPLY: 'SET_REPLY'
}

const deleteFeedbacksAction = (selected) => async (dispatch) => {
  await axios({
    method: 'DELETE',
    url: `${backendUrl}/feedbacks`,
    data: selected
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const loadFeedbacksAction = (conditions) => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/feedbacks`,
    params: {
      search: conditions.search,
      page: conditions.page, 
      size: conditions.size, 
      sort: conditions.sort,
      ...conditions.filters
    }
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_FEEDBACKS,
      payload: {
        data: response.data.data,
        message: response.data.message,
        success: response.data.success
      }
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const setLoadingAction = (isLoading) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

const setErrorAction = (error) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error
  })
}

const setConditionsAction = (conditions) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_CONDITIONS,
    payload: conditions
  })
};

const setSelectedAction = (selected) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_SELECTED,
    payload: selected
  });
}

const setActionAction = (action) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ACTION,
    payload: action
  });
}

const setReplyAction = (reply) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_REPLY,
    payload: reply
  })
}

const sendEmailAction = (reply) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${backendUrl}/feedbacks/reply`,
    data: reply
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });

} 

export {
  ACTIONS,
  setLoadingAction,
  loadFeedbacksAction,
  deleteFeedbacksAction,
  setErrorAction,
  setConditionsAction,
  setSelectedAction,
  setActionAction,
  setReplyAction,
  sendEmailAction
}