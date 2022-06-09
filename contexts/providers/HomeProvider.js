import React, {useReducer, createContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import HomeReducer from '../reducers/HomeReducer';
import {
  ACTIONS,
  loadNewProductsAction,
  loadBestSellerProductsAction,
  loadTodayProductsAction,
  loadLastestBlogsAction
} from '../actions/HomeAction';

const initState = {
  newProducts: [],
  todayProducts: [],
  bestSellerProducts: [],
  lastestBlogs: [],
  isLoading: false,
  message: '',
  success: false
}

export const HomeContext = createContext();

const HomeProvider = (props) => {
  const router = useRouter();
  const [homeState, dispatch] = useReducer(HomeReducer, initState);

  useEffect(() => {
    loadNewProducts();
    loadBestSellerProducts();
    loadTodayProducts();
    loadLastestBlogs();
  }, []);
  
  const loadNewProducts = () => {
    loadNewProductsAction()(dispatch);
  }

  const loadBestSellerProducts = () => {
    loadBestSellerProductsAction()(dispatch);
  }

  const loadTodayProducts = () => {
    loadTodayProductsAction()(dispatch);
  }

  const loadLastestBlogs = () => {
    loadLastestBlogsAction()(dispatch);
  }

  const value  = {
    homeState
  };

  return (
    <HomeContext.Provider value={value}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeProvider;