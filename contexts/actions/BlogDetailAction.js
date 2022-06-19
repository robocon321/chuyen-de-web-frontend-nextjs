import { FormControlLabel } from "@mui/material";
import axios from "axios";
import { handleError } from '../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_POPULARBLOGS: 'SET_POPULARBLOGS',
  SET_LASTESTCOMMENTS: 'SET_LASTESTCOMMENTS',
  SET_DETAILBLOGS: 'SET_DETAILBLOGS',
  SET_COMMENTS: 'SET_COMMENTS',
  SET_FORM: 'SET_FORM',
  ADD_COMMENT: 'ADD_COMMENT'
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

const loadDetailBlogAction = (slug) => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/posts/${slug}`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_DETAILBLOGS,
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

const loadCommentsBlogAction = (slug) =>  async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/comments?OR_post.slug=${slug}`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_COMMENTS,
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

const setFormAction = (form) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_FORM,
    payload: {
      form
    }
  })
}

const submitFormAction = (form) => async (dispatch) => {  
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: true
  });

  await axios({
    method: 'POST',
    data: form,
    url: `${backendUrl}/comments`
  }).then((response) => {
    dispatch({
      type: ACTIONS.ADD_COMMENT,
      payload: {
        data: response.data.data,
        message: response.data.message,
        success: response.data.success
      }
    })
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });

  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false
  })
  
}

const setLoading = (isLoading) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
}

export {
  ACTIONS,
  loadCategoriesAction,
  loadPopularBlogsAction,
  loadDetailBlogAction,
  loadCommentsBlogAction,
  setFormAction,
  submitFormAction,
  setLoading
}