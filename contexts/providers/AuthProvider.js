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
  setLoadingAction,
  setForgotPassAction,
  setMessageAction,
  resetPassAction,
  setErrorAction
} from "../actions/AuthAction";

const initState = {
  isLoading: true,
  user: null,
  error: null,
  forgotPass: {
    isShow: false,
    username: null
  },
  message: null
};

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const router = useRouter();
  const [authState, dispatch] = useReducer(AuthReducer, initState);

  useEffect(() => {
    setLoading(false);
  }, []);

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

  const setMessage = (message) => {
    setMessageAction(message)(dispatch);
  }

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  }

  const resetPass = () => {
    resetPassAction(authState.forgotPass.username)(dispatch);
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

  const setForgotPass = (forgotPass) => {
    setForgotPassAction(forgotPass)(dispatch);
  }

  const submitForgotPass = async () => {
    const usernameEle = document.getElementById("username");
    if(!authState.forgotPass.username || authState.forgotPass.username == '') {
      usernameEle.reportValidity();
      return ;
    }

    setForgotPass({
      ...authState.forgotPass,
      isShow: false
    });
    resetPass();
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
    setForgotPass,
    changeLang,
    submitForgotPass,
    setMessage,
    resetPass,
    setError,
    t: props.t,
    lang: i18n.language    
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default withNamespaces()(AuthProvider);
