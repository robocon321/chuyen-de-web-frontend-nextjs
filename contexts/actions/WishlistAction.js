import axios from "axios";
import { handleError } from "../../utils/fn";

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_FAVORITES: "SET_FAVORITES",
  DELETE_FAVORITE: "DELETE_FAVORITE"
};

const loadFavoriteProductAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/favorites?AND_post.type=product`
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

const setLoadingAction = (isLoading) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading,
  });
};

const setErrorAction = (error) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error
  })
}

export {
  ACTIONS,
  setLoadingAction,
  setErrorAction,
  loadFavoriteProductAction,
  deleteFavoriteAction
};
