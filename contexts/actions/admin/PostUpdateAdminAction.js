import axios from "axios";
import { handleError } from '../../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_POST: 'SET_POST',
  SET_CATEGORIES: 'SET_CATEGORIES'
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

const setPostAction = (post) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_POST,
    payload: post
  });
}

const loadCategoriesAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/taxomonies?OR_type=post`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_CATEGORIES,
      payload: response.data.data
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const loadPostAction = (slug) => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/posts/${slug}`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_POST,
      payload: response.data.data
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const updatePostAction = (post) => async (dispatch) => {
    post.type = 'post';
    await axios({
      method: 'PUT',
      url: `${backendUrl}/posts`,
      data: [post]  
    }).then((response) => {
      setPostAction(response.data[0])(dispatch);
    }).catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    })
}

export {
  ACTIONS,
  setLoadingAction,
  setErrorAction,
  setPostAction,
  loadCategoriesAction,
  updatePostAction,
  loadPostAction
}