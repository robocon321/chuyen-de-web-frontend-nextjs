import { ACTIONS } from "../../actions/admin/ProductNewAdminAction";

const initState = {
  product: {},
  post:{},
  categories: [],  
  isLoading: true,
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
      case (ACTIONS.SET_ERROR):
        state = {
          ...state,
          error: payload
        }
        break;
      case (ACTIONS.SET_CATEGORIES): 
        state = {
          ...state,
          categories: payload
        }
        break;
      case (ACTIONS.SET_PRODUCT):
        state = {
          ...state,
          product: payload
        }
        break;
    case (ACTIONS.SET_POST):
        state = {
          ...state,
          post: payload
        }
        break;
      default:
        break;
    }
    return state;
  }
  
  export default reducer;