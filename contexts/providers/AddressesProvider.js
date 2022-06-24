import React, { useReducer, createContext, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import AddressesReducer from "../reducers/AddressesReducer";
import { loadAddressesAction, setLoadingAction, setVisibleModalAction, setSelectedAction } from "../actions/AddressesAction";
import { AuthContext } from "./AuthProvider";

const initState = {
  addresses: null,
  isLoading: true,
  error: null,
  selected: -1,
  visibleModal: false
};

export const AddressesContext = createContext();

const AddressesProvider = (props) => {
  const router = useRouter();
  const [addressesState, dispatch] = useReducer(
    AddressesReducer,
    initState
  );
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (!authState.isLoading) {
      setLoading(false);
    }

    if (authState.user) {
      loadData();
    }
  }, [authState]);

  const loadData = async () => {
    await setLoading(true);
    await loadAddresses();
    await setLoading(false);
  };

  const setLoading = async (isLoading) => {
    await setLoadingAction(isLoading)(dispatch);
  }

  const loadAddresses = async () => {
    await loadAddressesAction()(dispatch);
  }

  const setVisibleModal = (visible) => {
    setVisibleModalAction(visible);
  }

  const setSelected = (index) => {
    setSelectedAction(index)(dispatch);
  }

  const value = {
    addressesState,
    router,
    setVisibleModal,
    setSelected,
    user: authState.user
  };

  return (
    <AddressesContext.Provider value={value}>
      {props.children}
    </AddressesContext.Provider>
  );
};

export default AddressesProvider;
