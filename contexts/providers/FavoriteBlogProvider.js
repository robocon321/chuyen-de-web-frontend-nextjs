import React, { useReducer, createContext, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import {
  loadFavoriteBlogAction,
  setLoadingAction,
  setErrorAction,
  deleteFavoriteAction,
} from "../actions/FavoriteBlogAction";
import FavoriteBlogReducer from "../reducers/FavoriteBlogReducer";
import { AuthContext } from "./AuthProvider";

const initState = {
  favorites: null,
  isLoading: true,
  message: "",
  success: false,
  error: "",
};

export const FavoriteBlogContext = createContext();

const FavoriteBlogProvider = (props) => {
  const router = useRouter();
  const [favoriteBlogState, dispatch] = useReducer(
    FavoriteBlogReducer,
    initState
  );
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (authState.user) {
      loadData();
    }
  }, [authState]);

  const loadData = async () => {
    setLoading(true);
    if (!authState.isLoading && authState.user) {
      await loadFavoriteBlog();
    }
    setLoading(false);
  };

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  };

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  };

  const loadFavoriteBlog = async () => {
    await loadFavoriteBlogAction()(dispatch);
  };

  const deleteFavorite = async (id) => {
    setLoading(true);
    await deleteFavoriteAction(id)(dispatch);
    setLoading(false);
  };

  const value = {
    router,
    favoriteBlogState,
    setLoading,
    setError,
    loadFavoriteBlog,
    deleteFavorite,
  };

  return (
    <FavoriteBlogContext.Provider value={value}>
      {props.children}
    </FavoriteBlogContext.Provider>
  );
};

export default FavoriteBlogProvider;
