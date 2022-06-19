import React, {useReducer, createContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import AuthReducer from '../reducers/AuthReducer';
import { loadAccountAction, loginAccountAction, loginSocialAction, registerAccountAction, registerSocialAction } from '../actions/AuthAction';

const initState = {
  isLoading: false,
  user: null,
  error: null
}

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const router = useRouter();
  const [authState, dispatch] = useReducer(AuthReducer, initState);
  
  const loginAccount = (data) => {
    loginAccountAction(data)(dispatch);
  }

  const loginSocial = (data) => {
    loginSocialAction(data)(dispatch);
  }

  const registerAccount = (data) => {
    registerAccountAction(data)(dispatch);
  }

  const registerSocial = (data) => {
    registerSocialAction(data)(dispatch);
  }

  const loadAccount = () => {
    loadAccountAction()(dispatch);
  }

  const value  = {
    authState,
    router,
    loginAccount,
    loginSocial,
    registerAccount,
    registerSocial,
    loadAccount
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;