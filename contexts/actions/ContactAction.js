import axios from "axios";
import { handleError } from "../../utils/fn";

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  SET_FEEDBACK: "SET_FEEDBACK"
};

const sendFeedbackAction = (feedback) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${backendUrl}/feedbacks`,
    data: [feedback]
  }).then((response) => {
    setFeedbackAction(response.data.data[0]);
  }).catch((error) => {
    handleError(error, dispatch, ACTIONS.SET_ERROR);
  });  
}

const setLoadingAction = (isLoading) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  });
}

const setErrorAction = (error) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error
  })
}

const setFeedbackAction = (feedback) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_FEEDBACK,
    payload: feedback
  })
}

export {
  ACTIONS,
  setLoadingAction,
  setErrorAction,
  sendFeedbackAction,
  setFeedbackAction
};
