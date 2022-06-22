import { ACTIONS } from "../actions/AccountDetailAction";

const initState = {
  isLoading: true,
  user: null,
  userAccount: null,
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
        error: payload
      }
      break;
    case (ACTIONS.SET_USER_ACCOUNT):
      state = {
        ...state,
        error: null,
        userAccount: payload
      }
      break;
    default:
      break;
  }
  return state;
}

export default reducer;