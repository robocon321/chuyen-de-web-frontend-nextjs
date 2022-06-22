import React, { useContext, useEffect } from "react";
import { Grid, Modal } from "@mui/material";
import Image from "next/image";
import { app } from "../../../../utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import styles from "./AccountDetail.module.css";
import Input from "../../../common/Input";
import { AccountDetailContext } from "../../../../contexts/providers/AccountDetailProvider";
import Loading from "../../../common/Loading";
import Notification from "../../../common/Notification";

const storage = getStorage(app);

const AccountDetail = (props) => {
  const {
    accountDetailState,
    router,
    onChangeUserField,
    onChangeUserImage,
    onChangeUserAccountField,
    submitForm,
    setError
  } = useContext(AccountDetailContext);
  const { user } = accountDetailState;

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
          onChangeUserImage(downloadURL);
        });
      }
    );
  };

  if (accountDetailState.isLoading) {
    return (
      <Modal
        open={true}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Loading />
      </Modal>
    );
  }

  if (!user && !accountDetailState.isLoading) {
    router.push("/auth");
    return <div></div>;
  }

  return (
    <div className={styles["account-detail"]}>
      <Notification
        title="Error"
        content={accountDetailState.error}
        open={accountDetailState.error != null}
        onClose={() => setError(null)}
      />
      <h3>Account Details</h3>
      <br />
      <br />
      <Grid container columnSpacing={5} columns={2}>
        <Grid item xs={1}>
          <Image
            src={
              user.avatar
                ? user.avatar
                : "https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp"
            }
            alt="Not found"
            width={150}
            height={150}
          />
          <input
            type="file"
            name="avatar"
            onChange={uploadFile}
            accept="image/*"
          />
        </Grid>
        <Grid item xs={1}>
          <span>Giới tính: </span> {" "}
          <input
            type="radio"
            id="1"
            name="sex"
            value="true"
            checked={user.sex + "" == "true"}
            onChange={onChangeUserField}
          />
            <label htmlFor="1">Nam</label> {" "}
          <input
            type="radio"
            id="0"
            name="sex"
            value="false"
            checked={user.sex + "" != "true"}
            onChange={onChangeUserField}
          />
            <label htmlFor="0">Nữ</label>
          <Input
            placeholder="Full name"
            defaultValue={user.fullname}
            name="fullname"
            onChange={onChangeUserField}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Input
            placeholder="Email Address"
            defaultValue={user.email}
            name="email"
            onChange={onChangeUserField}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Input
            placeholder="Phone Number"
            defaultValue={user.phone}
            name="phone"
            onChange={onChangeUserField}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            placeholder="Birthday"
            type="date"
            name="birthday"
            defaultValue={user.birthday}
            onChange={onChangeUserField}
          />
        </Grid>
      </Grid>

      <h3>Password change</h3>
      <Grid container columnSpacing={5} columns={2}>
        <Grid item xs={2}>
          <Input
            name="password"
            type="password"
            placeholder="New Password"
            defaultValue={
              accountDetailState.userAccount
                ? accountDetailState.userAccount.password
                : ""
            }
            onChange={onChangeUserAccountField}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            name="re_password"
            type="password"
            placeholder="ReType New Password"
            defaultValue={
              accountDetailState.userAccount
                ? accountDetailState.userAccount.re_password
                : ""
            }
            onChange={onChangeUserAccountField}
          />
        </Grid>
      </Grid>
      <button onClick={submitForm}>SAVE CHANGES</button>
    </div>
  );
};

export default AccountDetail;
