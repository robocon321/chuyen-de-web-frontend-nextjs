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
    const query = {...router.query};
    const [shopState,dispatch] = useReducer(ShopReducer,initState);

    useEffect(() => {
        if(!router.isReady) return;
            let search = '';
            let page = 0;
            let size = 10;
            let sort = 'post.modifiedTime__DESC';
            let filters = {};
        
            if(query.search != null) search = query.search;
            delete query.search;
            if(query.page != null) page = query.page;
            delete query.page;
            if(query.size != null) size = query.size;
            delete query.size;
            if(query.sort != null) sort = query.sort;
            delete query.sort;
    
            filters = {...query};
            console.log(router);
            
            loadCategories();
            // loadPopularBlogs();
            loadProduct4(search, page, size, sort, filters);
      }, [router.query]);

    const loadProduct4=(search, page, size, sort, filters)=>{
        loadPRODUCTS4Action(search, page, size, sort, filters)(dispatch)
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
        router,
        // loadProduct4,
        loadProductDetail,
        loadPostDetail,
        // loadCategories
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopProvider;