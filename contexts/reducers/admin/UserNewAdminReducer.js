import { ACTIONS } from "../../actions/admin/UserNewAdminAction";

const initState = {
  roles: [],
  user: {
    userAccount: {}
  },
  isLoading: true,
  error: null
};

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case (ACTIONS.SET_LOADING):
      state = {
        ...state,
        isLoading: payload
      }
      break;
    case (ACTIONS.SET_ERROR):
      state = {
        ...state,
        error: payload
      }
      break;
    case (ACTIONS.SET_USER):
      state = {
        ...state,
        user: payload
      }
      break;
    case (ACTIONS.SET_ROLES):
      state = {
        ...state,
        roles: payload
      }
      break;
    case (ACTIONS.RESET):
      state = {
        ...initState,
        roles: state.roles,
        isLoading: state.isLoading
      };
      break;
    default:
      break;
  }
  return state;
}

export default reducer;