import axios from "axios";
import { handleError } from '../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_NEWPRODUCTS: 'SET_NEWPRODUCTS',
  SET_TODAYPRODUCTS: 'SET_TODAYPRODUCTS',
  SET_BESTSELLERPRODUCTS: 'SET_BESTSELLERPRODUCTS',
  SET_LASTESTBLOGS: 'SET_LASTESTBLOGS',
  SET_LOADING: 'SET_LOADING',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_ERROR: 'SET_ERROR'
}

const loadNewProductsAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/products?size=16&page=0&sort=post.modifiedTime__DESC`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_NEWPRODUCTS,
      payload: {
        data: response.data.data.content,
        message: response.data.message,
        success: response.data.success
      }
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const loadBestSellerProductsAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/products?size=16&page=0&sort=totalSales__DESC`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_BESTSELLERPRODUCTS,
      payload: {
        data: response.data.data.content,
        message: response.data.message,
        success: response.data.success
      }
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const loadTodayProductsAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/products?size=16&page=0`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_TODAYPRODUCTS,
      payload: {
        data: response.data.data.content,
        message: response.data.message,
        success: response.data.success
      }
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const loadLastestBlogsAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/posts?size=16&page=0&sort=modifiedTime__DESC`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_LASTESTBLOGS,
      payload: {
        data: response.data.data.content,
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
  loadNewProductsAction,
  loadBestSellerProductsAction,
  loadTodayProductsAction,
  loadLastestBlogsAction,
  setLoading
}