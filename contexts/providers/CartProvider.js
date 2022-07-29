import React, {useReducer, createContext, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from "../providers/AuthProvider";
import CartReducer from '../reducers/CartReducer'
import{ACTIONS,
    loadCartAction,
    loadCartByUserIdAction
}
from '../actions/CartAction'

export const CartContext = createContext();

const initState={
    isLoading: true,
    message: '',
    success: false,
    error:null,
    carts:[],
    cartByUserId:null,

}
const CartProvider = (props) =>{

    const [cartState,dispatch] = useReducer(CartReducer,initState)

    // useEffect(()=>{
    //     loadData()
    // },[cartState])   
    // const loadData = async () =>{
    //     await loadCart()
    // }

    const loadCart = async (cartid)=>{
        await loadCartAction(cartid)(dispatch)
    }
    const loadCartByUserId = async (userId)=>{
        await loadCartByUserIdAction(userId)(dispatch)
    }
    const value = {
        cartState,
        loadCart,
        loadCartByUserId
    }
    return(
        <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    )
}
export default CartProvider
    