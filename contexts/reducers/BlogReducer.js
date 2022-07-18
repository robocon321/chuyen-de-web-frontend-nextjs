import { ACTIONS } from "../actions/BlogAction";

const initState = {
  categories: null,
  lastestBlogs: null,
  popularBlogs: null,
  recentCommments: null,
  isLoading: true,
  message: "",
  success: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_LOADING:
      state = {
        ...state,
        isLoading: payload,
      };
      break;
    case ACTIONS.SET_CATEGORIES:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        categories: payload.data,
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
    case ACTIONS.SET_POPULARBLOGS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        popularBlogs: payload.data,
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
    case ACTIONS.SET_ERROR:
      state = {
        ...state,
        error: payload,
      };
      break;

    default:
      break;
  }

  return state;
};

export default reducer;
