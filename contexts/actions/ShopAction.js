import axios from "axios";
import { handleError } from "../../utils/fn";

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  // SET_PRODUCTS3: 'SET_PRODUCTS3',
  SET_PRODUCTS4: "SET_PRODUCTS4",
  SET_PRODUCTDETAIL: "SET_PRODUCTDETAIL",
  SET_POSTDETAIL: "SET_POSTDETAIL",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_LOADING: "SET_LOADING",
  SET_MESSAGE: "SET_MESSAGE",
  SET_ERROR: "SET_ERROR",
  SET_FAVORITES: "SET_FAVORITES",
  DELETE_FAVORITE: "DELETE_FAVORITE",
  ADD_FAVORITE: "ADD_FAVORITE",
};

const loadPRODUCTS4Action = (search, page, size, sort, filters) => async (dispatch) => {
    await axios({
      method: "GET",
      url: `${backendUrl}/products`,
      params: {
        search,
        page,
        size,
        sort,
        ...filters,
      },
    })
      .then((response) => {
        dispatch({
          type: ACTIONS.SET_PRODUCTS4,
          payload: {
            data: response.data.data.content,
            message: response.data.message,
            success: response.data.success,
            infoPages: response.data.data,
          },
        });
      })
      .catch((error) => {
        handleError(error, dispatch, ACTIONS.SET_ERROR);
      });
};

const loadProductDetailAction = (slug) => async (dispatch) => {
  await axios({
    method: "GET",
    url: `${backendUrl}/products/${slug}`,
  })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_PRODUCTDETAIL,
        payload: {
          data: response.data,
        },
      });
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
};

const loadPostDetailAction = (slug) => async (dispatch) => {
  await axios({
    method: "GET",
    url: `${backendUrl}/posts/${slug}`,
  })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_POSTDETAIL,
        payload: {
          data: response.data.data,
        },
      });
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });
};

const loadCategoriesAction = () => async (dispatch) => {
  await axios({
    method: "GET",
    url: `${backendUrl}/taxomonies?OR_type=product`,
  })
    .then((response) => {
      dispatch({
        type: ACTIONS.SET_CATEGORIES,
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

const setLoadingAction = (isLoading) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading,
  });
};

const setErrorAction = (error) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error,
  });
};

const loadFavoriteBlogAction = () => async (dispatch) => {
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

export {
  ACTIONS,
  // loadPRODUCTS3Action,
  loadPRODUCTS4Action,
  loadProductDetailAction,
  loadPostDetailAction,
  loadCategoriesAction,
  loadFavoriteBlogAction,
  setErrorAction,
  setLoadingAction,
  addFavoriteAction,
  deleteFavoriteAction,
};
