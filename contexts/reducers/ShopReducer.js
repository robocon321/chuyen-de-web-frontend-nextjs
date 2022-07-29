import {ACTIONS} from '../actions/ShopAction';

const initState = {
    data:[],
    numPage:[],
    productDetail:{},
    postDetail:{},
    categories:null,
    isLoading: false,
    message: '',
    success: false,
    infoPages:[],
    favorites: null,
    cart:[]
  }
  const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case ACTIONS.SET_LOADING:
            state={
                ...state,
                isLoading:payload
            }
            break;
        // case ACTIONS.SET_PRODUCTS3:
        //     state ={
        //         ...state,
        //         success:payload.success,
        //         message:payload.message,
        //         data:payload.data,
        //         infoPages:payload.infoPages
        //     }
        //     break;
        case ACTIONS.SET_PRODUCTS4:
            state ={
                ...state,
                success:payload.success,
                message:payload.message,
                data:payload.data,
                infoPages:payload.infoPages
            }
            break;
        case ACTIONS.SET_PRODUCTDETAIL:
            state={
                ...state,
                productDetail: payload.data
            }
            break;
        case ACTIONS.SET_POSTDETAIL:
            state={
                ...state,
                postDetail: payload.data
            }
            break;
        case ACTIONS.SET_CATEGORIES:
            state={
                ...state,
                success:payload.success,
                message:payload.message,
                categories: payload.data,
            }
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
          case ACTIONS.ADD_CART:
            state={
              ...state,
              cart:[...state.cart,...payload]
            }
      
        default:break;
    }
    return state;
  }
  export default reducer;