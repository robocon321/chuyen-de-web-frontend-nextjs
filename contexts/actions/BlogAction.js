import axios from "axios";
import { handleError } from '../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_POPULARBLOGS: 'SET_POPULARBLOGS',
  SET_LASTESTBLOGS: 'SET_LASTESTBLOGS',
  SET_LASTESTCOMMENTS: 'SET_LASTESTCOMMENTS'
}

const loadCategoriesAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/taxomonies?OR_type=post`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_CATEGORIES,
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

const loadLastestBlogsAction = (search, page, size, sort, filters) => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/posts`,
    params: {
      search, page, size, sort, ...filters
    }
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_LASTESTBLOGS,
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

const loadPopularBlogsAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/posts?size=4&page=0&sort=totalComment__DESC`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_POPULARBLOGS,
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

const setLoading = (isLoading) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

export {
  ACTIONS,
  setLoading,
  loadCategoriesAction,
  loadLastestBlogsAction,
  loadPopularBlogsAction
}