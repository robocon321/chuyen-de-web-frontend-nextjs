import axios from "axios";
import { LOCAL_STORAGE_USER } from "../../utils/contant";
import { setAuthToken, handleError } from "../../utils/fn";

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
  RESET: "RESET",
  SET_LOADING: "SET_LOADING",
  SET_USER: "SET_USER",
  SET_ERROR: "SET_ERROR",
  SET_FORGOT_PASS: "SET_FORGOT_PASS",
  SET_MESSAGE: "SET_MESSAGE"
};

const loginAccountAction =({ username, password }) => async (dispatch) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: true,
    });

    await axios({
      method: "post",
      url: `${backendUrl}/auth/loginAccount`,
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        if (response.data.success) {
          localStorage[LOCAL_STORAGE_USER] = response.data.data;
          loadAccountAction()(dispatch);
        } else {
          dispatch({
            type: ACTIONS.SET_ERROR,
            payload: "Not found your user",
          });
        }
      })
      .catch((error) => {
        handleError(error, dispatch, ACTIONS.SET_ERROR);
      });

    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: false,
    });
  };

const loginSocialAction = ({ key, type, uid }) => async (dispatch) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: true,
    });

    await axios({
      method: "post",
      url: `${backendUrl}/auth/loginSocial`,
      data: {
        key,
        type,
        uid,
      },
    })
      .then((response) => {
        if (response.data.success) {
          localStorage[LOCAL_STORAGE_USER] = response.data.data;
          loadAccountAction()(dispatch);
        } else {
          dispatch({
            type: ACTIONS.SET_ERROR,
            payload: "Not found your user",
          });
        }
      })
      .catch((error) => {
        handleError(error, dispatch, ACTIONS.SET_ERROR);
      });

    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: false,
    });
  };

const loadAccountAction = () => async (dispatch) => {
  const userLocalStorage = localStorage[LOCAL_STORAGE_USER];
  if (userLocalStorage) {
    setAuthToken(userLocalStorage);
    await axios({
      method: "post",
      url: `${backendUrl}/auth/loadUser`,
    })
      .then((response) => {
        dispatch({
          type: ACTIONS.SET_USER,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        handleError(error, dispatch, ACTIONS.SET_ERROR);
      });
  } else {
    setAuthToken(null);
  }
};

const logoutAction = () => async (dispatch) => {
  localStorage.removeItem(LOCAL_STORAGE_USER);
  setAuthToken(null);
  dispatch({
    type: ACTIONS.RESET    
  })
}

const logoutAccountAction = () => async (dispatch) => {
  localStorage.removeItem(LOCAL_STORAGE_USER);
  dispatch({
    type: ACTIONS.RESET,
  });
};

const registerAccountAction = ({ email, username, password }) => async (dispatch) => {
    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: true,
    });

    await axios({
      method: "post",
      url: `${backendUrl}/auth/registerByAccount`,
      data: {
        username,
        password,
        user: {
          email,
        },
      },
    })
      .then((response) => {
        const { data } = response;
        if (data.success) {
          localStorage[LOCAL_STORAGE_USER] = data.data;
          loadAccountAction()(dispatch);
        } else {
          dispatch({
            type: ACTIONS.SET_ERROR,
            payload: data.message,
          });
        }
      })
      .catch((error) => {
        handleError(error, dispatch, ACTIONS.SET_ERROR);
      });

    dispatch({
      type: ACTIONS.SET_LOADING,
      payload: false,
    });
  };

const registerSocialAction = (data) => async (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: true,
  });

  await axios({
    method: "POST",
    url: `${backendUrl}/auth/registerBySocial`,
    data,
  })
    .then((response) => {
      localStorage[LOCAL_STORAGE_USER] = response.data.data;
      loadAccountAction()(dispatch);
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });

  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: false,
  });
};

const setLoadingAction = (isLoading) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  });
}

const setForgotPassAction = (forgotPass) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_FORGOT_PASS,
    payload: forgotPass
  });
}

const resetPassAction = (username) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${backendUrl}/auth/reset`,
    data: {
      username
    }
  })
    .then((response) => {
      setMessageAction(response.data.message)(dispatch);
    })
    .catch((error) => {
      handleError(error, dispatch, ACTIONS.SET_ERROR);
    });  
}

const setMessageAction = (message) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_MESSAGE,
    payload: message
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
  loginSocialAction,
  loginAccountAction,
  loadAccountAction,
  logoutAccountAction,
  registerAccountAction,
  registerSocialAction,
  logoutAction,
  setLoadingAction,
  setForgotPassAction,
  resetPassAction,
  setMessageAction,
  setErrorAction
};
