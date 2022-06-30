import React, { useReducer, createContext } from "react";
import { useRouter } from "next/router";
import AuthReducer from "../reducers/AuthReducer";
import {
  loadAccountAction,
  loginAccountAction,
  loginSocialAction,
  registerAccountAction,
  registerSocialAction,
  logoutAction,
  setLoadingAction
} from "../actions/AuthAction";

const initState = {
  isLoading: true,
  user: null,
  error: null,
};

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const router = useRouter();
  const [authState, dispatch] = useReducer(AuthReducer, initState);

  const loginAccount = (data) => {
    loginAccountAction(data)(dispatch);
  };

  const loginSocial = (data) => {
    loginSocialAction(data)(dispatch);
  };

  const registerAccount = (data) => {
    registerAccountAction(data)(dispatch);
  };

  const registerSocial = (data) => {
    registerSocialAction(data)(dispatch);
  };

  const loadAccount = async () => {
    setLoading(true);
    await loadAccountAction()(dispatch);
    setLoading(false);
  };

  const logout = () => {
    logoutAction()(dispatch);
    router.reload();
  }

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  }

  const value = {
    authState,
    router,
    loginAccount,
    loginSocial,
    registerAccount,
    registerSocial,
    loadAccount,
    logout,
    setLoading
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
