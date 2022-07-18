import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import PostListAdminReducer from "../../reducers/admin/PostListAdminReducer";
import {
  setLoadingAction,
  setErrorAction,
  setConditionsAction,
  loadPostsAction,
  setSelectedAction,
  deletePostsAction,
  setActionAction
} from "../../actions/admin/PostListAdminAction";

const initState = {
  conditions: {
    search: "",
    filters: {},
    page: 0,
    size: 10,
    sort: "",
  },
  selects: [],
  action: 'nothing',
  posts: null,
  isLoading: true,
  error: null
};

export const PostListAdminContext = createContext();

const PostListAdminProvider = (props) => {
  const router = useRouter();
  const [postListAdminState, dispatch] = useReducer(
    PostListAdminReducer,
    initState
  );

  useEffect(() => {
    loadData();
  }, [router.query]);

  useEffect(() => {
    console.log(postListAdminState);
  }, [postListAdminState]);

  const loadData = async () => {
    if (!router.isReady) return;
    const query = {
      ...router.query,
    };
    let search = "";
    let page = 0;
    let size = 10;
    let sort = "id__ASC";
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
    const conditions = {
      search,
      page,
      size,
      sort,
      filters,
    };
    setConditions(conditions);

    setLoading(true);
    await loadPosts(conditions);
    setLoading(false);
  };

  const loadPosts = async (conditions) => {
    await loadPostsAction(conditions)(dispatch);
  };

  const setConditions = (conditions) => {
    setConditionsAction(conditions)(dispatch);
  };

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  };

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  };

  const setPage = (newPage) => {
    router.push({
      pathname: "/admin/posts",
      query: {
        ...router.query,
        page: newPage + 1,
      },
    });
  };

  const setSort = (sortModel) => {
    let sort = "id__ASC";
    if (sortModel.length > 0)
      sort = `${sortModel[0].field}__${sortModel[0].sort.toUpperCase()}`;
    router.push({
      pathname: "/admin/posts",
      query: {
        ...router.query,
        sort,
      },
    });
  };

  const setSelected = (newSelected) => {
    setSelectedAction(newSelected)(dispatch);
  };

  const submit = () => {
    const { conditions } = postListAdminState;
    router.push({
      pathname: "/admin/posts",
      query: {
        search: conditions.search,
        page: 1,
        size: conditions.size,
        sort: conditions.sort,
        ...conditions.filters,
      },
    });
  };

  const setAction = (e) => {
    setActionAction(e.target.value)(dispatch);
  }

  const deletePosts = async (selected) => {
    await deletePostsAction(selected)(dispatch);
    router.reload();
  };

  const onAction = () => {
    switch(postListAdminState.action){
      case 'delete':
        deletePosts(postListAdminState.selects);
        break;
      default: break;
    }
  };

  const value = {
    router,
    postListAdminState,
    setConditions,
    setError,
    submit,
    setPage,
    setSort,
    setSelected,
    deletePosts,
    onAction,
    setAction
  };

  return (
    <PostListAdminContext.Provider value={value}>
      {props.children}
    </PostListAdminContext.Provider>
  );
};

export default PostListAdminProvider;
