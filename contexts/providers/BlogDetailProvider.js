import React, {useReducer, createContext, useEffect, useContext} from 'react';
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
  setErrorAction,
  loadPostRecommandAction
} from '../actions/BlogDetailAction';
import { AuthContext } from './AuthProvider';

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
  error: null,
  recommendPost: null
}

export const BlogDetailContext = createContext();

const BlogDetailProvider = (props) => {
  const router = useRouter();
  const {query} = router;
  const [blogState, dispatch] = useReducer(BlogDetailReducer, initState);
  const { authState, t } = useContext(AuthContext);
  
  useEffect(() => {
    if(!router.isReady) return;    
    loadData();
  }, [query]);

  useEffect(() => {
    console.log(blogState);
  }, [blogState]);

  const loadData = async () => {
    setLoading(true);
    await loadCategories();
    await loadPopularBlogs();
    await loadDetailBlogs(query.slug);
    await loadPostRecommand();
    await loadCommentsBlog(query.slug);
    if(!authState.isLoading && authState.user) {
      await loadFavoriteBlog();
    }
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

  const loadPostRecommand = async () => {
    await loadPostRecommandAction(authState.user ? authState.user.id : null)(dispatch);
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