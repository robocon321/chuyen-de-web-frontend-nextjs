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
  SET_ERROR: 'SET_ERROR',
  SET_FAVORITES: "SET_FAVORITES",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  ADD_FAVORITE: "ADD_FAVORITE",
  ADD_CART: "ADD_CART",
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

const loadFavoriteProductAction = () => async (dispatch) => {
  await axios({
    method: "GET",
    url: `${backendUrl}/favorites?AND_post.type=product`,
  })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_FAVORITES,
        payload: {
          data: response.data.data,
          message: response.data.message,
          success: response.data.success,
        },
      });
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
};

const deleteFavoriteAction = (id) => async (dispatch) => {
  await axios({
    method: "DELETE",
    url: `${backendUrl}/favorites`,
    data: [id],
  })
    .then((response) => {
      dispatch({
        type: ACTIONS.DELETE_FAVORITE,
        payload: id,
      });
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
};

const addFavoriteAction = (id) => async (dispatch) => {
  await axios({
    method: "POST",
    url: `${backendUrl}/favorites`,
    data: [id],
  })
    .then((response) => {
      dispatch({
        type: ACTIONS.ADD_FAVORITE,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
};
const addCartAction = (id) => async (dispatch)=>{
  await axios({
    method:"POST",
    url:`${backendUrl}/cartitems`,
    data:[id],
  })
  .then((response)=>{
    console.log("Data Cart",response.data.data)
    dispatch({
      type:ACTIONS.ADD_CART,
      payload:response.data.data
    })
  }).catch(error=>{
    handleError(error,dispatch,ACTIONS.SET_ERROR);
  })
}

export {
  ACTIONS,
  loadNewProductsAction,
  loadBestSellerProductsAction,
  loadTodayProductsAction,
  loadLastestBlogsAction,
  setLoadingAction,
  setErrorAction,
  loadFavoriteProductAction,
  deleteFavoriteAction,
  addFavoriteAction ,
  addCartAction
}