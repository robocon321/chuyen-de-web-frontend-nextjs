import {ACTIONS} from '../actions/CartAction'

const initState={
    isLoading: true,
    message: '',
    success: false,
    error:null,
    carts:[],
    cartByUserId:null,
    address:[],
    cartItemUpdate:null,

}
const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case ACTIONS.SET_LOADING:
            state={
                ...state,
                isLoading:payload,
            }
            break;
        case ACTIONS.SET_LOADCART:
            state={
                ...state,
                success:payload.success,
                message:payload.message,
                carts:payload.data
            }
            break;
        case ACTIONS.SET_LOADCARTBYUSERID:
            state={
                ...state,
                success:payload.success,
                message:payload.message,
                cartByUserId:payload.data
            }
            break;
        case ACTIONS.SET_ADDRESSES:
            state = {
              ...state,
              address: payload
            };
            break;
        default:
            break;
    }
    return state;
}
export default reducer