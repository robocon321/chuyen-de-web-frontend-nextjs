import { ACTIONS } from "../actions/ContactAction";

const initState = {
  isLoading: false,
  feedback: {},
  error: null
}

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case (ACTIONS.SET_LOADING):
      state = {
        ...state,
        isLoading: payload
      }
      break;
    case (ACTIONS.SET_FEEDBACK):
      state = {
        ...state,
        feedback: payload,
      }
      break;
    case (ACTIONS.SET_ERROR):
      state = {
        ...state,
        error: payload,
      }
      break;
    default:
      break;
  }
  return state;
}

export default reducer;