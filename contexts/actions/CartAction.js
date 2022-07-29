import axios from "axios";
import { handleError } from '../../utils/fn';

const backendUrl = process.env.BACKEND_URL;

const ACTIONS = {
    SET_LOADING: 'SET_LOADING',
    SET_MESSAGE: 'SET_MESSAGE',
    SET_ERROR: 'SET_ERROR',
    SET_LOADCART:'SET_LOADCART',
    SET_LOADCARTBYUSERID:'SET_LOADCARTBYUSERID',
    SET_DELETECARTITEM:'SET_DELETECARTITEM',
    SET_UPDATEQUANTITY:'SET_UPDATEQUANTITY'
}
const loadCartAction = (cartid) => async(dispatch) =>{
    await axios({
        method:'GET',
        url:`${backendUrl}/cartitems/cartid/${cartid}`,
    }).then((response)=>{
        dispatch({
            type:ACTIONS.SET_LOADCART,
            payload:{
                data:response.data.data,
                message:response.data.message,
                success:response.data.success
            }
        })
    }).catch((error)=>{
        handleError(error,dispatch,ACTIONS.SET_ERROR)
    })
}
const loadCartByUserIdAction = (userId) => async(dispatch)=>{
    await axios({
        method:'GET',
        url:`${backendUrl}/carts/${userId}`
    }).then((response)=>{
        dispatch({
            type:ACTIONS.SET_LOADCARTBYUSERID,
            payload:{
                data:response.data.data,
                message:response.data.message,
                success:response.data.message
            }
        })
    })
}
export {
    ACTIONS,
    loadCartAction,
    loadCartByUserIdAction
}