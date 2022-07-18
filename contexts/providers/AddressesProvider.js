import React, { useReducer, createContext, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import AddressesReducer from "../reducers/AddressesReducer";
import {
  loadAddressesAction,
  setLoadingAction,
  setVisibleModalAction,
  setAddressModalAction,
  updateAddressAction,
  addAddressAction,
  setErrorAction
} from "../actions/AddressesAction";
import { AuthContext } from "./AuthProvider";

const initState = {
  addresses: null,
  isLoading: true,
  error: null,
  addressModal: {},
  visibleModal: false,
};

export const AddressesContext = createContext();

const AddressesProvider = (props) => {
  const router = useRouter();
  const [addressesState, dispatch] = useReducer(AddressesReducer, initState);
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

  const setSelected = (index) => {
    if (index == -1) {
      setAddressModal({});
    }
    if (index < addressesState.addresses.length) {
      const addressIndex = { ...addressesState.addresses[index] };

      delete addressIndex.province_name;
      delete addressIndex.district_name;
      delete addressIndex.ward_name;
      delete addressIndex.modifiedUser;
      delete addressIndex.modifiedTime;

      setAddressModal(addressIndex);
    }
  };

  const submitForm = async (e) => {
    if(validateForm()) {
      await setLoading(true);
      if(addressesState.addressModal.id == null) {
        await addAdddress(addressesState.addressModal);
      } else {
        await updateAddress(addressesState.addressModal);
      }
      router.reload();      
      await setLoading(false);  
      setVisibleModal(false);
    }    
  };

  const validateForm = () => {
    const { fullname, province, district, ward, detailAddress, phone } = addressesState.addressModal;

    const fullNameEle = document.getElementById("fullname");
    const provinceEle = document.getElementById("province");
    const districtEle = document.getElementById("district");
    const wardEle = document.getElementById("ward");
    const detailAddressEle = document.getElementById("detailAddress");
    const phoneEle = document.getElementById("phone");

    if(fullname == null || fullname.length == 0) {
      fullNameEle.reportValidity();
      return false;
    }

    if(province == null || province.length == 0) {
      provinceEle.reportValidity();
      return false;
    }

    if(district == null || district.length == 0) {
      districtEle.reportValidity();
      return false;
    }

    if(ward == null || ward.length == 0) {
      wardEle.reportValidity();
      return false;
    }

    if(detailAddress == null || detailAddress.length == 0) {
      detailAddressEle.reportValidity();
      return false;
    }

    if(phone == null || phone.length == 0) {
      phoneEle.reportValidity();
      return false;
    }

    return true;
  }

  const setAddressModal = (addressModal) => {
    setAddressModalAction(addressModal)(dispatch);
  };

  const addAdddress = async (address) => {
    await addAddressAction(address)(dispatch);
  }

  const updateAddress = async (address) => {
    await updateAddressAction(address)(dispatch);
  }

  const setLoading = async (isLoading) => {
    await setLoadingAction(isLoading)(dispatch);
  };

  const loadAddresses = async () => {
    await loadAddressesAction()(dispatch);
  };

  const setVisibleModal = (visible) => {
    setVisibleModalAction(visible)(dispatch);
  };

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  }

  const value = {
    addressesState,
    router,
    user: authState.user,
    setVisibleModal,
    setSelected,
    setAddressModal,
    submitForm,
    setError
  };

  return (
    <AddressesContext.Provider value={value}>
      {props.children}
    </AddressesContext.Provider>
  );
};

export default AddressesProvider;
