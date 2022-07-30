import { ACTIONS } from "../actions/BlogDetailAction";

const initState = {
  categories: null,
  detailBlog: null,
  popularBlogs: null,
  recentCommments: null,
  comments: null,
  favorites: null,
  form: null,
  isLoading: true,
  message: "",
  success: false,
  error: null,
  recommendPost: null
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
    case ACTIONS.SET_POPULARBLOGS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        popularBlogs: payload.data,
      };
      break;
    case ACTIONS.SET_DETAILBLOGS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        detailBlog: payload.data,
      };
      break;
    case ACTIONS.SET_COMMENTS:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        comments: payload.data,
      };
      break;
    case ACTIONS.SET_FORM:
      state = {
        ...state,
        form: payload.form
      }
      break;
    case ACTIONS.ADD_COMMENT:
      state = {
        ...state,
        success: payload.success,
        message: payload.message,
        comments: [...state.comments, payload.data]
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
      case ACTIONS.SET_RECOMMEND_POST:
        state = {
          ...state,
          recommendPost: payload
        }
        break;
    default:
      break;
  }

  return state;
};

export default reducer;
