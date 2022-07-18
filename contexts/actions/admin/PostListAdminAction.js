import axios from "axios";
import { handleError } from '../../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_CONDITIONS: 'SET_CONDITIONS',
  SET_POSTS: 'SET_POSTS',
  SET_SELECTED: 'SET_SELECTED',
  DELETE_POSTS: 'DELETE_POSTS',
  SET_ACTION: 'SET_ACTION'
}

const deletePostsAction = (selected) => async (dispatch) => {
  console.log(selected);
  await axios({
    method: 'DELETE',
    url: `${backendUrl}/posts`,
    data: selected
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const loadPostsAction = (conditions) => async (dispatch) => {
  conditions.filters.AND_type = 'post';
  await axios({
    method: 'GET',
    url: `${backendUrl}/posts`,
    params: {
      search: conditions.search,
      page: conditions.page, 
      size: conditions.size, 
      sort: conditions.sort,
      ...conditions.filters
    }
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_POSTS,
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

export {
  ACTIONS,
  setLoadingAction,
  loadPostsAction,
  deletePostsAction,
  setErrorAction,
  setConditionsAction,
  setSelectedAction,
  setActionAction
}