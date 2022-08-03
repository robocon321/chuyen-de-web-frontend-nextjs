import React, {useReducer, createContext, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import BlogReducer from '../reducers/BlogReducer';
import {
  setLoadingAction,
  loadCategoriesAction,
  loadLastestBlogsAction,
  loadPopularBlogsAction,
  loadFavoriteBlogAction,
  deleteFavoriteAction,
  addFavoriteAction,
  setErrorAction
} from '../actions/BlogAction';
import { AuthContext } from './AuthProvider';

const initState = {
  favorites: null,
  categories: null,
  lastestBlogs: null,
  popularBlogs: null,
  recentCommments: null,
  isLoading: true,
  message: '',
  success: false
}

export const BlogContext = createContext();

const BlogProvider = (props) => {
  const router = useRouter();
  const query = {...router.query};
  const [blogState, dispatch] = useReducer(BlogReducer, initState);
  const { authState, t } = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, [router.query]);

  const loadData = async () => {        
    if(!router.isReady) return;
        let search = '';
        let page = 0;
        let size = 10;
        let sort = 'modifiedTime__DESC';
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
        setLoading(true);
        await loadCategories();
        await loadPopularBlogs();
        await loadLastestBlogs(search, page, size, sort, filters);
        setLoading(false);
  }

  useEffect(() => {
    if(!authState.isLoading && authState.user) {
      loadFavoriteBlog();
    }
  }, [authState])

  const loadCategories = async () => {
    await loadCategoriesAction()(dispatch);
  }

  const loadPopularBlogs = async () => {
    await loadPopularBlogsAction()(dispatch);
  }

  const loadLastestBlogs = async (search, page, size, sort, filters) => {
    await loadLastestBlogsAction(search, page, size, sort, filters)(dispatch);
  }

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  }

  const loadFavoriteBlog = async () => {
    await loadFavoriteBlogAction()(dispatch);
  }

  const deleteFavorite = async (id) => {
    if(id) {
      setLoading(true);
      await deleteFavoriteAction(id)(dispatch);
      setLoading(false);  
    } else {
      setError(t('favorite_not_found'));
    }
  }

  const addFavorite = async (id) => {
    if(authState.user == null) {
      setError(t('need_login'));
      return;
    }
    setLoading(true);
    await addFavoriteAction(id)(dispatch);
    setLoading(false);
  }

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  }
  
  const value  = {
    blogState,
    router,
    deleteFavorite,
    addFavorite,
    setError
  };

  return (
    <BlogContext.Provider value={value}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogProvider;