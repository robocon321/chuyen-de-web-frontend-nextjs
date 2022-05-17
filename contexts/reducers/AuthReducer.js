import { ACTIONS } from "../actions/AuthAction";

const initState = {
  isLoading: false,
  user: null,
  error: null
}

const reducer = (state, {type, payload}) => {
  switch(type) {
    case (ACTIONS.SET_LOADING):
      state = {
        ...state,
        isLoading: payload
      }
      break;
    case (ACTIONS.SET_USER):
      state = {
        ...state,
        user: payload,
        error: null
      }
      break;
    case (ACTIONS.SET_ERROR):
      state = {
        ...state,
        error: payload,
        user: null
      }
      break;
    case (ACTIONS.RESET):
      state = {...initState};
      break;
    default:
      break;
  }
  return state;
}

export default reducer;