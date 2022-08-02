import React, { useReducer, createContext, useEffect ,useContext} from "react";
import { useRouter } from "next/router";
import CheckoutReducer from '../reducers/CheckoutReducer'
import { setLoadingAction,
    setErrorAction,
    loadCartAction,
    addCheckoutAction,
    loadAddressesAction,
    loadCartByUserIdAction,
    addNewCartAction} from '../actions/CheckoutAction'
import { AuthContext } from "./AuthProvider";

const initState={
    checkout:{},
    carts:[],
    isLoading: true,
    error: null,
    address:[],
    cartByUserId:null,
    newCart:null,
}

export const CheckoutContext = createContext()
const CheckoutProvider = (props)=>{
    const router = useRouter();
    const [checkoutState,dispatch] = useReducer(CheckoutReducer,initState)
    const { authState } = useContext(AuthContext);
    useEffect(() => {
        // if (!authState.isLoading) {
        //   setLoading(false);
        // }
    
        // if (authState.user) {
          loadData();
        // }
      }, []);
    const loadData = async () => {
        // await setLoading(true);
        await loadAddresses();
        await loadCartByUserId(authState.user?.id)
        // await setLoading(false);
    };
    const setLoading = (isLoading) => {
        setLoadingAction(isLoading)(dispatch);
    };
    
    const setError = (error) => {
        setErrorAction(error)(dispatch);
    };
    const loadCart = async (cartid)=>{
        await loadCartAction(cartid)(dispatch)
    }
    const addCheckout = async (checkout)=>{
        setLoading(true)
        await addCheckoutAction(checkout)(dispatch)
        setLoading(false)
    }
    const loadAddresses = async () => {
        await loadAddressesAction()(dispatch);
      };
      const loadCartByUserId = async (userId)=>{
        await loadCartByUserIdAction(userId)(dispatch)
    }
    const addNewCart = async(cart)=>{
        addNewCartAction(cart)(dispatch)
    }
    const value = {
        checkoutState,
        setLoading,
        setError,
        loadCart,
        addCheckout,
        addNewCart
    }
    return(
        <CheckoutContext.Provider value={value}>
            {props.children}
        </CheckoutContext.Provider>
    )
}
export default CheckoutProvider