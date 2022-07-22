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
import UserNewAdminReducer from "../../reducers/admin/UserNewAdminReducer";
import {
  setLoadingAction,
  setErrorAction,
  setUserAction,
  loadRolesAction,
  resetAction,
  saveUserAction
} from "../../actions/admin/UserNewAdminAction";


const storage = getStorage(app);

const initState = {
  roles: [],
  user: {
    userAccount: {},
  },
  isLoading: true,
  error: null,
};

export const UserNewAdminContext = createContext();

const UserNewAdminProvider = (props) => {
  const router = useRouter();
  const [userNewAdminState, dispatch] = useReducer(
    UserNewAdminReducer,
    initState
  );

  useEffect(() => {
    loadData();
  }, [router.query]);

  useEffect(() => {
    console.log(userNewAdminState);
  }, [userNewAdminState]);

  const loadData = async () => {
    if (!router.isReady) return;

    setLoading(true);
    await loadRoles();
    setLoading(false);
  };

  const loadRoles = async () => {
    await loadRolesAction()(dispatch);
  };

  const onChangeFieldUser = (e) => {    
    setUser({
      ...userNewAdminState.user,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeFieldUserAccount = (e) => {
    setUser({
      ...userNewAdminState.user,
      userAccount: {
        ...userNewAdminState.user.userAccount,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onChangeRole = (e) => {
    setUser({
      ...userNewAdminState.user,
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
            ...userNewAdminState.user,
            avatar: downloadURL
          })
        });
      }
    );
  };

  const submit = async () => {
    if(validate()) {
      setLoading(true);
      await saveUser();
      setLoading(false);
    }
  };

  const saveUser = async () => {
    await saveUserAction(userNewAdminState.user)(dispatch);
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

    if(!userNewAdminState.user.email || userNewAdminState.user.email == '') {
      emailEle.reportValidity();
      return false;
    }

    if(!userNewAdminState.user.userAccount.username || userNewAdminState.user.userAccount.username == '') {
      usernameEle.reportValidity();
      return false
    }

    if(!userNewAdminState.user.userAccount.password || userNewAdminState.user.userAccount.password == '') {
      passwordEle.reportValidity();
      return false;
    }

    if(!userNewAdminState.user.userAccount.re_password || userNewAdminState.user.userAccount.re_password == '') {
      re_passwordEle.reportValidity();
      return false;
    }

    if(!userNewAdminState.user.fullname || userNewAdminState.user.fullname == '') {
      fullnameEle.reportValidity();
      return false;
    }

    if(!userNewAdminState.user.phone || userNewAdminState.user.phone == '') {
      phoneEle.reportValidity();
      return false;
    }

    if(!userNewAdminState.user.roles) {
      roleEle.reportValidity();
      return false;
    }

    if(!validateEmail(userNewAdminState.user.email)) {
      emailEle.setCustomValidity("Format email incorrect");
      emailEle.reportValidity();
      return false;
    }

    if(!validatePhone(userNewAdminState.user.phone)) {
      phoneEle.setCustomValidity("Format phone incorrect");
      phoneEle.reportValidity();
      return false;
    }

    if(userNewAdminState.user.userAccount.password != userNewAdminState.user.userAccount.re_password) {
      passwordEle.setCustomValidity("Password and Re-password not match");
      passwordEle.reportValidity();
      return false;

    }

    return true;
  }

  const value = {
    router,
    userNewAdminState,
    submit,
    setError,
    onChangeFieldUser,
    onChangeFieldUserAccount,
    onChangeRole,
    reset,
    uploadFile
  };

  return (
    <UserNewAdminContext.Provider value={value}>
      {props.children}
    </UserNewAdminContext.Provider>
  );
};

export default UserNewAdminProvider;
