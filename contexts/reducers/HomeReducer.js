import { ACTIONS } from "../actions/HomeAction";

const initState = {
  newProducts: [],
  todayProducts: [],
  bestSellerProducts: [],
  lastestBlogs: [],
  favorites: null,
  isLoading: true,
  message: "",
  success: false,
  error: null,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_LOADING:
      state = {
        ...state,
        isLoading: payload,
      };
      break;
    case ACTIONS.SET_NEWPRODUCTS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        newProducts: payload.data,
      };
      break;
    case ACTIONS.SET_BESTSELLERPRODUCTS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        bestSellerProducts: payload.data,
      };
      break;
    case ACTIONS.SET_TODAYPRODUCTS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        todayProducts: payload.data,
      };
      break;
    case ACTIONS.SET_LASTESTBLOGS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        lastestBlogs: payload.data,
      };
      break;
    case ACTIONS.SET_ERROR:
      state = {
        ...state,
        error: payload,
      };
      break;
    case ACTIONS.SET_FAVORITES:
      state = {
        ...state,
        success: payload.success,
        favorites: payload.data,
        message: payload.message,
      };
      break;
    case ACTIONS.DELETE_FAVORITE:
      state = {
        ...state,
        favorites: state.favorites.filter((item) => item.id != payload),
      };
      break;
    case ACTIONS.ADD_FAVORITE:
      state = {
        ...state,
        favorites: [...state.favorites, ...payload],
      };
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
