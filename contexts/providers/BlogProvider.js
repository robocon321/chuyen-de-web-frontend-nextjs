import React, {useReducer, createContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import BlogReducer from '../reducers/BlogReducer';
import {
  loadCategoriesAction,
  loadLastestBlogsAction,
  loadPopularBlogsAction
} from '../actions/BlogAction';

const initState = {
  categories: null,
  lastestBlogs: null,
  popularBlogs: null,
  recentCommments: null,
  isLoading: false,
  message: '',
  success: false
}

export const BlogContext = createContext();

const BlogProvider = (props) => {
  const router = useRouter();
  const query = {...router.query};
  const [blogState, dispatch] = useReducer(BlogReducer, initState);

  useEffect(() => {
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
        console.log(router);
        
        loadCategories();
        loadPopularBlogs();
        loadLastestBlogs(search, page, size, sort, filters);
  }, [router.query]);

  const loadCategories = () => {
    loadCategoriesAction()(dispatch);
  }

  const loadPopularBlogs = () => {
    loadPopularBlogsAction()(dispatch);
  }

  const loadLastestBlogs = (search, page, size, sort, filters) => {
    loadLastestBlogsAction(search, page, size, sort, filters)(dispatch);
  }
  
  const value  = {
    blogState,
    router
  };

  return (
    <BlogContext.Provider value={value}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogProvider;