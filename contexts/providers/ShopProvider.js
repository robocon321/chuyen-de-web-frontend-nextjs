import React, { useReducer, createContext, useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import ShopReducer from "../reducers/ShopReducer";
import {
  ACTIONS,
  loadPRODUCTS4Action,
  loadProductDetailAction,
  loadPostDetailAction,
  loadCategoriesAction,
  loadFavoriteBlogAction,
  deleteFavoriteAction,
  addFavoriteAction,
  setErrorAction,
  setLoadingAction,
  addCartAction,
} from "../actions/ShopAction";
import { AuthContext } from "../providers/AuthProvider";

const initState = {
  data: [],
  numPage: [],
  productDetail: {},
  postDetail: {},
  categories: null,
  isLoading: false,
  message: "",
  success: false,
  infoPages: [],
  favorites: [],
  cart:[],
};
export const ShopContext = createContext();

const ShopProvider = (props) => {
  const router = useRouter();
  const query = { ...router.query };
  const [shopState, dispatch] = useReducer(ShopReducer, initState);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    // if (!router.isReady) return;
    // let search = "";
    // let page = 0;
    // let size = 10;
    // let sort = "post.modifiedTime__DESC";
    // let filters = {};

    // if (query.search != null) search = query.search;
    // delete query.search;
    // if (query.page != null) page = query.page;
    // delete query.page;
    // if (query.size != null) size = query.size;
    // delete query.size;
    // if (query.sort != null) sort = query.sort;
    // delete query.sort;

    // filters = { ...query };
    // console.log(router);

    loadData();
  }, [router.query]);

  useEffect(() => {
    console.log(shopState);
  }, [shopState]);

  const loadData = async () => {
    if (!router.isReady) return;
    let search = "";
    let page = 0;
    let size = 10;
    let sort = "post.modifiedTime__DESC";
    let filters = {};

    if (query.search != null) search = query.search;
    delete query.search;
    if (query.page != null) page = query.page;
    delete query.page;
    if (query.size != null) size = query.size;
    delete query.size;
    if (query.sort != null) sort = query.sort;
    delete query.sort;

    filters = { ...query };
    console.log(router);

    setLoading(true);
    await loadCategories();
    // loadPopularBlogs();
    await loadProduct4(search, page, size, sort, filters);
    if (!authState.isLoading && authState.user) {
      await loadFavoriteBlog();
    }
    setLoading(false);
  };

  const loadProduct4 = async (search, page, size, sort, filters) => {
    await loadPRODUCTS4Action(search, page, size, sort, filters)(dispatch);
  };
  const loadProductDetail = (slug) => {
    loadProductDetailAction(slug)(dispatch);
  };
  const loadPostDetail = (slug) => {
    loadPostDetailAction(slug)(dispatch);
  };
  const loadCategories = async () => {
    await loadCategoriesAction()(dispatch);
  };

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  };

  const loadFavoriteBlog = async () => {
    await loadFavoriteBlogAction()(dispatch);
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

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  };

  const includeFavoritePost = (id) => {
    if (shopState.favorites) {
      return (
        shopState.favorites.filter((item) => item.post.id == id).length > 0
      );
    } else {
      return false;
    }
  };

  const findFavoriteIdByPostId = (post_id) => {
    const favorite = shopState.favorites.find(
      (item) => item.post.id == post_id
    );
    if (favorite) {
      return shopState.favorites.find((item) => item.post.id == post_id).id;
    } else {
      return null;
    }
  };
  const addCart = async (id)=>{
    setLoading(true)
    await addCartAction(id)(dispatch)
    setLoading(false)
  }

  const value = {
    shopState,
    router,
    // loadProduct4,
    loadProductDetail,
    loadPostDetail,
    // loadCategories
    addFavorite,
    deleteFavorite,
    includeFavoritePost,
    findFavoriteIdByPostId,
    addCart
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopProvider;
