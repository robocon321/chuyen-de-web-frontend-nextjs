import React, {useReducer, createContext, useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import ShopReducer from '../reducers/ShopReducer'
import {
    ACTIONS,
    loadPRODUCTS4Action,
    loadProductDetailAction,
    loadPostDetailAction,
    loadCategoriesAction
   
} from '../actions/ShopAction'

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
export const ShopContext = createContext();

const ShopProvider = (props)=>{
    const router = useRouter();
    const [shopState,dispatch] = useReducer(ShopReducer,initState);


    const loadProduct4=(num,size)=>{
        loadPRODUCTS4Action(num,size)(dispatch)
    }
    const loadProductDetail=(slug)=>{
        loadProductDetailAction(slug)(dispatch)
    }
    const loadPostDetail=(slug)=>{
        loadPostDetailAction(slug)(dispatch)
    }
    const loadCategories=()=>{
        loadCategoriesAction()(dispatch)
    }
   
    const value = {
        shopState,
        loadProduct4,
        loadProductDetail,
        loadPostDetail,
        loadCategories
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopProvider;