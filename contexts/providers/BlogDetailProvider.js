import React, {useReducer, createContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import BlogDetailReducer from '../reducers/BlogDetailReducer';
import {
  loadCategoriesAction,
  loadDetailBlogAction,
  loadPopularBlogsAction,
  loadCommentsBlogAction
} from '../actions/BlogDetailAction';

const initState = {
  categories: null,
  detailBlog: null,
  popularBlogs: null,
  recentCommments: null,
  comments: null,
  isLoading: false,
  message: '',
  success: false
}

export const BlogDetailContext = createContext();

const BlogDetailProvider = (props) => {
  const router = useRouter();
  const {query} = router;
  const [blogState, dispatch] = useReducer(BlogDetailReducer, initState);
  
  useEffect(() => {
    if(!router.isReady) return;    
      loadCategories();
      loadPopularBlogs();
      loadDetailBlogs(query.slug);
      loadCommentsBlog(query.slug);
  }, [query]);

  const loadCategories = () => {
    loadCategoriesAction()(dispatch);
  }

  const loadPopularBlogs = () => {
    loadPopularBlogsAction()(dispatch);
  }

  const loadDetailBlogs = (slug) => {
    loadDetailBlogAction(slug)(dispatch);
  }

  const loadCommentsBlog = (slug) => {
    loadCommentsBlogAction(slug)(dispatch);
  }
  
  const value  = {
    blogState,
    router
  };

  return (
    <BlogDetailContext.Provider value={value}>
      {props.children}
    </BlogDetailContext.Provider>
  )
}

export default BlogDetailProvider;