import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthReducer from "../reducers/AuthReducer";
import i18n from '../../pages/i18n';
import { withNamespaces } from 'react-i18next';

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

  const changeLang = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang);
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
    setLoading,
    changeLang,
    t: props.t,
    lang: i18n.language    
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default withNamespaces()(AuthProvider);
