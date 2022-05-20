import React, {useReducer, createContext, useEffect} from 'react';
import AuthReducer from '../reducers/AuthReducer';
import { loginAccountAction, loginSocialAction, registerAccountAction, registerSocialAction } from '../actions/AuthAction';

const initState = {
  isLoading: false,
  user: null,
  error: null
}

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [authState, dispatch] = useReducer(AuthReducer, initState);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

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

  const value  = {
    authState,
    loginAccount,
    loginSocial,
    registerAccount,
    registerSocial
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;