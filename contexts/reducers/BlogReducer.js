import { ACTIONS } from '../actions/BlogAction';

const initState = {
  categories: null,
  lastestBlogs: null,
  popularBlogs: null,
  recentCommments: null,
  isLoading: true,
  message: '',
  success: false
}

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case ACTIONS.SET_LOADING: 
      state = {
        ...state, 
        isLoading: payload
      }
      break;
    case ACTIONS.SET_CATEGORIES:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        categories: payload.data
      }
      break;
    case ACTIONS.SET_LASTESTBLOGS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        lastestBlogs: payload.data
      }
      break;
    case ACTIONS.SET_POPULARBLOGS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        popularBlogs: payload.data
      }
    break;
  default: break;
  }

  return state;
}

export default reducer;