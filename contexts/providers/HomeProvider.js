import React, {useReducer, createContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import HomeReducer from '../reducers/HomeReducer';
import {
  ACTIONS,
  setLoading,
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
  isLoading: true,
  message: '',
  success: false
}

export const HomeContext = createContext();

const HomeProvider = (props) => {
  const router = useRouter();
  const [homeState, dispatch] = useReducer(HomeReducer, initState);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(homeState);
  }, [homeState]);

  const loadData = async () => {
    await setLoading(true)(dispatch);
    await loadNewProducts();
    await loadBestSellerProducts();
    await loadTodayProducts();
    await loadLastestBlogs();
    await setLoading(false)(dispatch);
  }
  
  const loadNewProducts = async () => {
    await loadNewProductsAction()(dispatch);
  }

  const loadBestSellerProducts = async () => {
    await loadBestSellerProductsAction()(dispatch);
  }

  const loadTodayProducts = async () => {
    await loadTodayProductsAction()(dispatch);
  }

  const loadLastestBlogs = async () => {
    await loadLastestBlogsAction()(dispatch);
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