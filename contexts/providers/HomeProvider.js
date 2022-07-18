import React, {useReducer, createContext, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import HomeReducer from '../reducers/HomeReducer';
import {
  ACTIONS,
  setErrorAction,
  setLoadingAction,
  loadNewProductsAction,
  loadBestSellerProductsAction,
  loadTodayProductsAction,
  loadLastestBlogsAction,
  loadFavoriteProductAction,
  addFavoriteAction,
  deleteFavoriteAction
} from '../actions/HomeAction';

const initState = {
  newProducts: [],
  todayProducts: [],
  bestSellerProducts: [],
  lastestBlogs: [],
  isLoading: true,
  favorites: null,
  message: '',
  success: false,
  error:null
}

import { AuthContext } from "../providers/AuthProvider";

export const HomeContext = createContext();

const HomeProvider = (props) => {
  const router = useRouter();
  const [homeState, dispatch] = useReducer(HomeReducer, initState);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(homeState);
  }, [homeState]);

  const loadData = async () => {
    setLoading(true);
    await loadNewProducts();
    await loadBestSellerProducts();
    await loadTodayProducts();
    await loadLastestBlogs();
    if (!authState.isLoading && authState.user) {
      await loadFavoriteProduct();
    }
    setLoading(false);
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

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  }

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  }

  const loadFavoriteProduct = async () => {
    await loadFavoriteProductAction()(dispatch);
  };

  const deleteFavorite = async (id) => {
    if (id) {
      setLoading(true);
      await deleteFavoriteAction(id)(dispatch);
      setLoading(false);
    } else {
      setError("Your favorite not found");
    }
  };

  const addFavorite = async (id) => {
    setLoading(true);
    await addFavoriteAction(id)(dispatch);
    setLoading(false);
  };

  const includeFavoritePost = (id) => {
    if (homeState.favorites) {
      return (
        homeState.favorites.filter((item) => item.post.id == id).length > 0
      );
    } else {
      return false;
    }
  };

  const findFavoriteIdByPostId = (post_id) => {
    const favorite = homeState.favorites.find(
      (item) => item.post.id == post_id
    );
    if (favorite) {
      return homeState.favorites.find((item) => item.post.id == post_id).id;
    } else {
      return null;
    }
  };


  const value  = {
    homeState,
    setLoading,
    setError,
    addFavorite,
    deleteFavorite,
    includeFavoritePost,
    findFavoriteIdByPostId
  };

  return (
    <HomeContext.Provider value={value}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeProvider;