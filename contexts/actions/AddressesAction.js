import axios from "axios";
import { handleError } from "../../utils/fn";

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_SELECTED: "SET_SELECTED",
  SET_ADDRESSES: "SET_ADDRESSES",
  SET_VISIBLE_MODAL: "SET_VISIBLE_MODAL"
};

const loadAddressesAction = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${backendUrl}/contacts`
  }).then((response) => {
    dispatch({
      type: ACTIONS.SET_ADDRESSES,
      payload: response.data.data
    });
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });
}

const setSelectedAction = (index) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_SELECTED,
    payload: index
  })
}

const setLoadingAction = (isLoading) => async (dispatch) => {
  await dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  });
}

const addAddressAction = (address) => async (dispatch) => {
  // Do something
}

const updateAddressAction = (address) => async (dispatch) => {
  // Do something
}

const setVisibleModalAction = (visible) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_VISIBLE_MODAL,
    payload: visible
  })
}

export {
  ACTIONS,
  loadAddressesAction,
  setSelectedAction,
  setLoadingAction,
  addAddressAction,
  updateAddressAction,
  setVisibleModalAction
};
