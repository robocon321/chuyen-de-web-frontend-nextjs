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
    infoPages:[]
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
        // case ACTIONS.SET_PREVPAGE:
        //     state={
        //         ...state,
        //         success:payload.success,
        //         message:payload.message,
        //         products4:payload.data
        //     }
        //     break;
        // case ACTIONS.SET_NUMPAGE:
        //     state={
        //         ...state,
        //         success:payload.success,
        //         message:payload.message,
        //         products4:payload.data
        //     }
        //     break;
        // case ACTIONS.SET_PAGEASC:
        //     state={
        //         ...state,
        //         success:payload.success,
        //         message:payload.message,
        //         products4:payload.data
        //     }
        //     break;
        default:break;
    }
    return state;
  }
  export default reducer;