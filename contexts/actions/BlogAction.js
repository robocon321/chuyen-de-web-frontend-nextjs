import axios from "axios";
import { handleError } from '../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_POPULARBLOGS: 'SET_POPULARBLOGS',
  SET_LASTESTBLOGS: 'SET_LASTESTBLOGS',
  SET_LASTESTCOMMENTS: 'SET_LASTESTCOMMENTS',
  SET_FAVORITES: "SET_FAVORITES",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  ADD_FAVORITE: "ADD_FAVORITE"
}

const loadFavoriteBlogAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/favorites?AND_post.type=post`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_FAVORITES,
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

const deleteFavoriteAction = (id) => async (dispatch) => {
  await axios({
    method: 'DELETE',
    url: `${backendUrl}/favorites`,
    data: [id]
  }).then((response) => {
    dispatch({
      type: ACTIONS.DELETE_FAVORITE,
      payload: id
    }); 
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const addFavoriteAction = (id) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${backendUrl}/favorites`,
    data: [id]
  }).then((response) => {
    dispatch({
      type: ACTIONS.ADD_FAVORITE,
      payload: response.data.data
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
};

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
    url: `${backendUrl}/posts?AND_type=post`,
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
    url: `${backendUrl}/posts?size=4&page=0&sort=totalComment__DESC&AND_type=post`
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

export {
  ACTIONS,
  setLoadingAction,
  loadCategoriesAction,
  loadLastestBlogsAction,
  loadPopularBlogsAction,
  loadFavoriteBlogAction,
  deleteFavoriteAction,
  addFavoriteAction,
  setErrorAction
}