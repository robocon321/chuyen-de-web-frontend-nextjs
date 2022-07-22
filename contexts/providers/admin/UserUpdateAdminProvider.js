import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { app } from "../../../utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { validateEmail, validatePhone } from '../../../utils/validate'
import UserUpdateAdminReducer from "../../reducers/admin/UserUpdateAdminReducer";
import {
  setLoadingAction,
  setErrorAction,
  setUserAction,
  loadRolesAction,
  resetAction,
  updateUserAction,
  loadUserAction
} from "../../actions/admin/UserUpdateAdminAction";


const storage = getStorage(app);

const initState = {
  roles: [],
  user: {
    userAccount: {},
  },
  isLoading: true,
  error: null,
};

export const UserUpdateAdminContext = createContext();

const UserUpdateAdminProvider = (props) => {
  const router = useRouter();
  const [userUpdateAdminState, dispatch] = useReducer(
    UserUpdateAdminReducer,
    initState
  );

  useEffect(() => {
    loadData();
  }, [router.query]);

  useEffect(() => {
    console.log(userUpdateAdminState);
  }, [userUpdateAdminState]);

  const loadData = async () => {
    if (!router.isReady) return;

    setLoading(true);
    await loadUser(router.query.id);
    await loadRoles();
    setLoading(false);
  };

  const loadRoles = async () => {
    await loadRolesAction()(dispatch);
  };

  const onChangeFieldUser = (e) => {    
    setUser({
      ...userUpdateAdminState.user,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeFieldUserAccount = (e) => {
    setUser({
      ...userUpdateAdminState.user,
      userAccount: {
        ...userUpdateAdminState.user.userAccount,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onChangeRole = (e) => {
    setUser({
      ...userUpdateAdminState.user,
      roles: [{
        id: e.target.value
      }],
    });
  };

  const uploadFile = (e) => {
    const image = e.target.files[0];
    if (image == null) return;
    const path = "users/" + new Date().getTime() + "-" + e.target.files[0].name;

    const storageRef = ref(storage, path);

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log("Upload image fail", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUser({
            ...userUpdateAdminState.user,
            avatar: downloadURL
          })
        });
      }
    );
  };

  const submit = async () => {
    if(validate()) {
      setLoading(true);
      await updateUser();
      setLoading(false);
    }
  };

  const updateUser = async () => {
    await updateUserAction(userUpdateAdminState.user)(dispatch);
  }

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  };

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  };

  const setUser = (user) => {
    setUserAction(user)(dispatch);
  };

  const loadUser = async (id) => {
    await loadUserAction(id)(dispatch);
  }

  const reset = () => {
    resetAction()(dispatch);
  }

  const validate = () => {
    const emailEle = document.getElementById("email");
    const phoneEle = document.getElementById("phone");
    const usernameEle = document.getElementById("username");
    const passwordEle = document.getElementById("password");
    const re_passwordEle = document.getElementById("re_password");
    const fullnameEle = document.getElementById("fullname");
    const roleEle = document.getElementById("role");

    if(!userUpdateAdminState.user.email || userUpdateAdminState.user.email == '') {
      emailEle.reportValidity();
      return false;
    }

    if(!userUpdateAdminState.user.userAccount.username || userUpdateAdminState.user.userAccount.username == '') {
      usernameEle.reportValidity();
      return false
    }

    if(!userUpdateAdminState.user.userAccount.password || userUpdateAdminState.user.userAccount.password == '') {
      passwordEle.reportValidity();
      return false;
    }

    if(!userUpdateAdminState.user.userAccount.re_password || userUpdateAdminState.user.userAccount.re_password == '') {
      re_passwordEle.reportValidity();
      return false;
    }

    if(!userUpdateAdminState.user.fullname || userUpdateAdminState.user.fullname == '') {
      fullnameEle.reportValidity();
      return false;
    }

    if(!userUpdateAdminState.user.roles) {
      roleEle.reportValidity();
      return false;
    }

    if(!validateEmail(userUpdateAdminState.user.email)) {
      emailEle.setCustomValidity("Format email incorrect");
      emailEle.reportValidity();
      return false;
    }

    if(userUpdateAdminState.user.phone && !validatePhone(userUpdateAdminState.user.phone)) {
      phoneEle.setCustomValidity("Format phone incorrect");
      phoneEle.reportValidity();
      return false;
    }

    if(userUpdateAdminState.user.phone != '' && !validatePhone(userUpdateAdminState.user.phone)) {
      phoneEle.setCustomValidity("Format phone incorrect");
      phoneEle.reportValidity();
      return false;
    }

    if(userUpdateAdminState.user.userAccount.password != userUpdateAdminState.user.userAccount.re_password) {
      passwordEle.setCustomValidity("Password and Re-password not match");
      passwordEle.reportValidity();
      return false;

    }

    return true;
  }

  const value = {
    router,
    userUpdateAdminState,
    submit,
    setError,
    onChangeFieldUser,
    onChangeFieldUserAccount,
    onChangeRole,
    reset,
    uploadFile
  };

  return (
    <UserUpdateAdminContext.Provider value={value}>
      {props.children}
    </UserUpdateAdminContext.Provider>
  );
};

export default UserUpdateAdminProvider;
