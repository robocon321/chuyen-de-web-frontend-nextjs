import React, { useReducer, createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import AccountDetailReducer from "../reducers/AccountDetailReducer";
import {
  updateUserAction,
  updateUserAccountAction,
  changeUserAction,
  changeUserAccountAction,
  setLoadingAction,
  setErrorAction
} from "../actions/AccountDetailAction";
import { AuthContext } from "./AuthProvider";

const initState = {
  isLoading: true,
  user: null,
  userAccount: null,
  error: null,
};

export const AccountDetailContext = createContext();

const AccountDetailProvider = (props) => {
  const router = useRouter();
  const [accountDetailState, dispatch] = useReducer(
    AccountDetailReducer,
    initState
  );
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    console.log(authState);
    if (!authState.isLoading) {
      setLoading(false);
    }

    if (authState.user) {
      loadData();
    }
  }, [authState]);


  const loadData = async () => {
    await changeUserAction(authState.user)(dispatch);
    await changeUserAccountAction({
      ...accountDetailState.userAccount,
      user: {
        id: authState.user.id
      }
    })(dispatch);
    setLoading(false);
  };

  const updateAccount = (user) => {
    updateAccountAction(user)(dispatch);
  };

  const onChangeUserField = (e) => {
    changeUserAction({
      ...accountDetailState.user,
      [e.target.name]: e.target.value,
    })(dispatch);
  };

  const onChangeUserImage = (url) => {
    changeUserAction({
      ...accountDetailState.user,
      avatar: url,
    })(dispatch);
  };

  const onChangeUserAccountField = (e) => {
    changeUserAccountAction({
      ...accountDetailState.userAccount,
      [e.target.name]: e.target.value,
    })(dispatch);
  };

  const submitForm = async (e) => {
    await setLoading(true);
    await updateUserAction(accountDetailState.user)(dispatch);
    if(accountDetailState.userAccount.password != accountDetailState.userAccount.re_password) {
      setError('Your password and re-password not match');
      setLoading(false);
      return;
    }    
    if(accountDetailState.userAccount.password == null || accountDetailState.userAccount.password.length == 0) {
      await setLoading(false);
      return;
    } else {
      await updateUserAccountAction(accountDetailState.userAccount)(dispatch);
      await setLoading(false);
    }
  };

  const setError = async (error) => {
    await setErrorAction(error)(dispatch);
  }

  const setLoading = async (isLoading) => {
    await setLoadingAction(isLoading)(dispatch);
  }

  const value = {
    accountDetailState,
    router,
    updateAccount,
    onChangeUserField,
    onChangeUserImage,
    onChangeUserAccountField,
    submitForm,
    setError   
  };

  return (
    <AccountDetailContext.Provider value={value}>
      {props.children}
    </AccountDetailContext.Provider>
  );
};

export default AccountDetailProvider;
