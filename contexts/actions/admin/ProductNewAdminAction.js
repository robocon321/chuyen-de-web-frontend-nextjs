import axios from "axios";
import { handleError } from '../../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
    SET_ERROR: 'SET_ERROR',
    SET_LOADING: 'SET_LOADING',
    SET_PRODUCT: 'SET_PRODUCT',
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
const setProductAction = (product)=>(dispatch)=>{
    dispatch({
        type:ACTIONS.SET_PRODUCT,
        payload:product
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
      url: `${backendUrl}/taxomonies?OR_type=product`
    }).then((response) => {
        console.log("categories",response)
      dispatch({
        type: ACTIONS.SET_CATEGORIES,
        payload: response.data.data
      });
    }).catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
  }
  const saveProductAction = (product) => async (dispatch) => {
    product.post.type='product'
    await axios({
      method: 'POST',
      url: `${backendUrl}/products`,
      data: [product]
    }).then((response) => {
        setProductAction(response.data[0])(dispatch);
    }).catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    })
}
const savePostAction = (post) => async (dispatch) => {
    post.type = 'product';
    await axios({
      method: 'POST',
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
    setProductAction,
    loadCategoriesAction,
    saveProductAction,
    savePostAction
}