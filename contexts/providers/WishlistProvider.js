import React, { useReducer, createContext, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import {
  loadFavoriteProductAction,
  setLoadingAction,
  setErrorAction,
  deleteFavoriteAction
} from "../actions/WishlistAction";
import WishlistReducer from "../reducers/WishlistReducer";
import { AuthContext } from "./AuthProvider";

const initState = {
  favorites: null,
  isLoading: true,
  message: "",
  success: false,
  error: "",
};

export const WishlistContext = createContext();

const WishlistProvider = (props) => {
  const router = useRouter();
  const [favoriteProductState, dispatch] = useReducer(
    WishlistReducer,
    initState
  );
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if(authState.user) {
      loadData();        
    }
  }, [authState]);

  useEffect(() => {
    console.log(favoriteProductState);
  }, [favoriteProductState]);

  const loadData = async () => {
    setLoading(true);
    await loadFavoriteProduct();
    setLoading(false);
  }

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  }

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  }

  const loadFavoriteProduct = async () => {
    await loadFavoriteProductAction()(dispatch);
  }

  const deleteFavorite = async (id) => {
    setLoading(true);
    await deleteFavoriteAction(id)(dispatch);
    setLoading(false);
  }

  const value = {
    router,
    favoriteProductState,
    setLoading,
    setError,
    deleteFavorite
  };

  return (
    <WishlistContext.Provider value={value}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
