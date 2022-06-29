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
  SET_FAVORITES: "SET_FAVORITES",
  ADD_COMMENT: 'ADD_COMMENT',
  DELETE_FAVORITE: "DELETE_FAVORITE",
  ADD_FAVORITE: "ADD_FAVORITE"
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

const setLoadingAction = (isLoading) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  })
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

const setErrorAction = (error) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error
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
  setLoadingAction,
  deleteFavoriteAction,
  addFavoriteAction,
  loadFavoriteBlogAction,
  setErrorAction
}