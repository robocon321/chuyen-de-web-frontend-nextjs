import { ACTIONS } from '../actions/WishlistAction';

const initState = {
  favorites: null,
  isLoading: true,
  message: '',
  success: false,
  error: ''
}

const reducer = (state = initState, {type, payload}) => {
  switch(type) {
    case ACTIONS.SET_LOADING: 
      state = {
        ...state, 
        isLoading: payload
      }
      break;
    case ACTIONS.SET_ERROR:
      state = {
        ...state,
        error: payload
      }
      break;
    case ACTIONS.SET_FAVORITES:
      state = {
        ...state,
        success: payload.success,
        favorites: payload.data,
        message: payload.message
      }
      break;
    case ACTIONS.DELETE_FAVORITE:
      state = {
        ...state,
        favorites: state.favorites.filter(item => item.id != payload)
      }
      break;
    default: break;
  }

  return state;
}

export default reducer;