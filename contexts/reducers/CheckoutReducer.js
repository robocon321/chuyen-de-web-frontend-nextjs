import { ACTIONS } from "../actions/CheckoutAction";

const initState={
    checkout:{},
    isLoading: true,
    error: null,
    address:[],
    cartByUserId:null,
    newCart:null,
}
const reducer = (state = initState,{type,payload}) =>{
    switch(type){
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
        case ACTIONS.SET_LOADCART:
            state={
                ...state,
                // success:payload.success,
                // message:payload.message,
                carts:payload.data
            }
            break;
        case (ACTIONS.SET_ADDCHECKOUT):
            state = {
                ...state,
                checkout:payload.data
            }
            break;
        case ACTIONS.SET_ADDRESSES:
            state = {
              ...state,
              address: payload
            };
            break;
        case ACTIONS.SET_LOADCARTBYUSERID:
            state={
                ...state,
                success:payload.success,
                message:payload.message,
                cartByUserId:payload.data
            }
            break;
        case ACTIONS.SET_ADDNEWCART:
            state={
                ...state,
                // newCart:payload.data

            }
            break;
        default:
            break;
    }
    return state;
}
export default reducer;