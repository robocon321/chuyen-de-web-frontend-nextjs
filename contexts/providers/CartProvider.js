import React, {useReducer, createContext, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from "../providers/AuthProvider";
import CartReducer from '../reducers/CartReducer'
import{ACTIONS,
    loadCartAction,
    loadCartByUserIdAction,
    loadAddressesAction,
    deleteCartItemAction,
    updateCartItemAction
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
    address:[],

}
const CartProvider = (props) =>{
    const router = useRouter()
    const [cartState,dispatch] = useReducer(CartReducer,initState)
    const { authState } = useContext(AuthContext);
   
    useEffect(() => {
        // if (!authState.isLoading) {
        //   setLoading(false);
        // }
    
        if (authState.user) {
          loadData();
        }
      }, [authState]);
      useEffect(()=>{
        if(cartState.cartByUserId?.id!==null)
        loadCart(cartState.cartByUserId?.id)
      },[cartState.cartByUserId])

      const loadData = async () => {
        // await setLoading(true);
        await loadAddresses();
        await loadCartByUserId(authState.user.id)
        // authState.cartByUserId && await loadCart(cartState.cartByUserId.id)
        // await setLoading(false);
      };

    const onChangeQuantity = (e,cartitem,id)=>{
      if(cartitem!==undefined){
      console.log(e.target.value+" id "+id)
      console.log('provider',cartitem)
      cartitem.quantity = parseInt(e.target.value)
      
      updateCartItem(cartitem,id)
      loadData();
    }
    }

    const loadCart = async (cartid)=>{
        await loadCartAction(cartid)(dispatch)
    }
    const loadCartByUserId = async (userId)=>{
        await loadCartByUserIdAction(userId)(dispatch)
    }
    const loadAddresses = async () => {
        await loadAddressesAction()(dispatch);
      };
    const deleteCartItem = async (selected) =>{
      await deleteCartItemAction(selected)(dispatch);
      router.reload();
    }
    const updateCartItem = async (cartItemid,id)=>{
      updateCartItemAction(cartItemid,id)(dispatch)
    }
    
    const value = {
        cartState,
        // loadCart,
        // loadCartByUserId,
        deleteCartItem,
        onChangeQuantity
    }
    return(
        <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    )
}
export default CartProvider
    