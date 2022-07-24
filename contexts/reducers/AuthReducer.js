import { ACTIONS } from "../actions/AuthAction";

const initState = {
  isLoading: true,
  user: null,
  error: null,
  forgotPass: {
    isShow: false,
    username: null,
  },
  message: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_LOADING:
      state = {
        ...state,
        isLoading: payload,
      };
      break;
    case ACTIONS.SET_USER:
      state = {
        ...state,
        user: payload,
        error: null,
      };
      break;
    case ACTIONS.SET_ERROR:
      state = {
        ...state,
        error: payload,
        // user: null,
      };
      break;
    case ACTIONS.SET_FORGOT_PASS:
      state = {
        ...state,
        forgotPass: payload,
      };
      break;
    case ACTIONS.SET_MESSAGE:
      state = {
        ...state,
        message: payload,
      };
      break;
    case ACTIONS.RESET:
      state = { ...initState };
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
