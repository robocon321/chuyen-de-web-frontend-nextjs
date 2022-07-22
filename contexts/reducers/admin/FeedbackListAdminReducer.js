import { ACTIONS } from "../../actions/admin/FeedbackListAdminAction";

const initState = {
  conditions: {
    search: '',
    filters: {},
    page: 0,
    size: 10,
    sort: 'id__ASC',
  },  
  selects: [],  
  action: 'nothing',
  feedbacks: null,
  isLoading: true,
  error: null,
  reply: null
}

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
    case (ACTIONS.SET_CONDITIONS):
      state = {
        ...state,
        conditions: payload
      }
      break;
    case (ACTIONS.SET_FEEDBACKS):
      state = {
        ...state,
        feedbacks: payload
      };
      break;
    case (ACTIONS.SET_SELECTED):
      state = {
        ...state,
        selects: payload
      }
      break;
    case (ACTIONS.SET_ACTION):
      state = {
        ...state,
        action: payload
      };
      break;
    case (ACTIONS.SET_REPLY):
      state = {
        ...state,
        reply: payload
      }
      break;
    default:
      break;
  }
  return state;
}

export default reducer;