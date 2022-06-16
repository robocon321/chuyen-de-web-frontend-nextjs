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
  SET_CONDITIONS: 'SET_CONDITIONS'
}

const loadCategoriesAction = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: true
  });

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

  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false
  })
}

const loadLastestBlogsAction = (search, page, size, sort, filters) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: true
  });
  
  dispatch({
    type: ACTIONS.SET_CONDITIONS,
    payload: {
      search, 
      page, 
      size, 
      sort, 
      filters: {...filters}
    }
  });
  
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

  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false
  })

}

const loadPopularBlogsAction = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: true
  });

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

  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false
  })
  
}

export {
  ACTIONS,
  loadCategoriesAction,
  loadLastestBlogsAction,
  loadPopularBlogsAction
}