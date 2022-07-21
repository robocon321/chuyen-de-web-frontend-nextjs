import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import UserListAdminReducer from "../../reducers/admin/UserListAdminReducer";
import {
  setLoadingAction,
  setErrorAction,
  setConditionsAction,
  loadUsersAction,
  loadRolesAction,
  setSelectedAction,
  deleteUsersAction,
  setActionAction
} from "../../actions/admin/UserListAdminAction";

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
  users: null,
  roles: [],
  isLoading: true,
  error: null
};

export const UserListAdminContext = createContext();

const UserListAdminProvider = (props) => {
  const router = useRouter();
  const [userListAdminState, dispatch] = useReducer(
    UserListAdminReducer,
    initState
  );

  useEffect(() => {
    loadData();
  }, [router.query]);

  useEffect(() => {
    console.log(userListAdminState);
  }, [userListAdminState]);

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
    await loadRoles();
    await loadUsers(conditions);
    setLoading(false);
  };

  const loadUsers = async (conditions) => {
    await loadUsersAction(conditions)(dispatch);
  };

  const loadRoles = async () => {
    await loadRolesAction()(dispatch);
  }

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
      pathname: "/admin/users",
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
      pathname: "/admin/users",
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
    const { conditions } = userListAdminState;
    router.push({
      pathname: "/admin/users",
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

  const deleteUsers = async (selected) => {
    await deleteUsersAction(selected)(dispatch);
    router.reload();
  };

  const onAction = () => {
    switch(userListAdminState.action){
      case 'delete':
        deleteUsers(userListAdminState.selects);
        break;
      default: break;
    }
  };

  const value = {
    router,
    userListAdminState,
    setConditions,
    setError,
    submit,
    setPage,
    setSort,
    setSelected,
    deleteUsers,
    onAction,
    setAction
  };

  return (
    <UserListAdminContext.Provider value={value}>
      {props.children}
    </UserListAdminContext.Provider>
  );
};

export default UserListAdminProvider;
