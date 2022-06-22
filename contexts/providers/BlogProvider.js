import React, {useReducer, createContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import BlogReducer from '../reducers/BlogReducer';
import {
  setLoading,
  loadCategoriesAction,
  loadLastestBlogsAction,
  loadPopularBlogsAction
} from '../actions/BlogAction';

const initState = {
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
        console.log(router);
        await setLoading(true)(dispatch);
        await loadCategories();
        await loadPopularBlogs();
        await loadLastestBlogs(search, page, size, sort, filters);
        await setLoading(false)(dispatch);
  }

  const loadCategories = async () => {
    await loadCategoriesAction()(dispatch);
  }

  const loadPopularBlogs = async () => {
    await loadPopularBlogsAction()(dispatch);
  }

  const loadLastestBlogs = async (search, page, size, sort, filters) => {
    await loadLastestBlogsAction(search, page, size, sort, filters)(dispatch);
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