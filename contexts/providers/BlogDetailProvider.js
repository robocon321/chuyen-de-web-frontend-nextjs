import React, {useReducer, createContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import BlogDetailReducer from '../reducers/BlogDetailReducer';
import {
  loadCategoriesAction,
  loadDetailBlogAction,
  loadPopularBlogsAction,
  loadCommentsBlogAction,
  setFormAction,
  setLoadingAction,
  submitFormAction,
  loadFavoriteBlogAction,
  deleteFavoriteAction,
  addFavoriteAction,
  setErrorAction
} from '../actions/BlogDetailAction';

const initState = {
  categories: null,
  detailBlog: null,
  popularBlogs: null,
  recentCommments: null,
  favorites: null,
  comments: null,
  form: null,
  isLoading: true,
  message: '',
  success: false,
  error: null
}

export const BlogDetailContext = createContext();

const BlogDetailProvider = (props) => {
  const router = useRouter();
  const {query} = router;
  const [blogState, dispatch] = useReducer(BlogDetailReducer, initState);
  
  useEffect(() => {
    if(!router.isReady) return;    
    loadData();
  }, [query]);

  const loadData = async () => {
    setLoading(true);
    await loadCategories();
    await loadPopularBlogs();
    await loadDetailBlogs(query.slug);
    await loadCommentsBlog(query.slug);
    await loadFavoriteBlog();
    setLoading(false);
  }

  const loadCategories = async () => {
    await loadCategoriesAction()(dispatch);
  }

  const loadPopularBlogs = async () => {
    await loadPopularBlogsAction()(dispatch);
  }

  const loadDetailBlogs = async (slug) => {
    await loadDetailBlogAction(slug)(dispatch);
  }

  const loadCommentsBlog = async (slug) => {
    await loadCommentsBlogAction(slug)(dispatch);
  }

  const setForm = (form) => {
    setFormAction(form)(dispatch);
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
      setError('Your favorite not found');
    }
  }

  const addFavorite = async (id) => {
    setLoading(true);
    await addFavoriteAction(id)(dispatch);
    setLoading(false);
  }


  const submitForm = (e) => {
    e.preventDefault();
    const {form} = blogState;
    if(!form) form = {};
    if(!form.post) form.post = {};
    form.post.id = blogState.detailBlog.id;

    const content = document.getElementById("content");

    if (!form.content || !form.content.length) {
      content.reportValidity();
      return;
    }

    submitFormAction(form)(dispatch);
  }

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  }

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  }
  
  const value  = {
    blogState,
    router,
    setForm,
    submitForm,
    addFavorite,
    deleteFavorite,
    setError
  };

  return (
    <BlogDetailContext.Provider value={value}>
      {props.children}
    </BlogDetailContext.Provider>
  )
}

export default BlogDetailProvider;