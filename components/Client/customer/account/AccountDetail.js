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
import Notification from "../../../common/Notification";
import { AuthContext } from "../../../../contexts/providers/AuthProvider";

const storage = getStorage(app);

const AccountDetail = (props) => {
  const {
    accountDetailState,
    onChangeUserField,
    onChangeUserImage,
    onChangeUserAccountField,
    submitForm,
    setError
  } = useContext(AccountDetailContext);
  const { user } = accountDetailState;
  const { t } = useContext(AuthContext);

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

  return (
    <div className={styles["account-detail"]}>
      <Notification
        title={t('error')}
        content={accountDetailState.error}
        open={accountDetailState.error != null}
        onClose={() => setError(null)}
      />
      <h3>{t('account_details')}</h3>
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
          <span>{t('sex')} </span> {" "}
          <input
            type="radio"
            id="1"
            name="sex"
            value="true"
            checked={user.sex + "" == "true"}
            onChange={onChangeUserField}
          />
            <label htmlFor="1">{t('male')}</label> {" "}
          <input
            type="radio"
            id="0"
            name="sex"
            value="false"
            checked={user.sex + "" != "true"}
            onChange={onChangeUserField}
          />
            <label htmlFor="0">{t('female')}</label>
          <Input
            placeholder={t('fullname')}
            defaultValue={user.fullname}
            name="fullname"
            onChange={onChangeUserField}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Input
            placeholder={t('email_address')}
            defaultValue={user.email}
            name="email"
            onChange={onChangeUserField}
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Input
            placeholder={t('phone_number')}
            defaultValue={user.phone}
            name="phone"
            onChange={onChangeUserField}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            placeholder={t('birthday')}
            type="date"
            name="birthday"
            defaultValue={user.birthday}
            onChange={onChangeUserField}
          />
        </Grid>
      </Grid>

      <h3>{t('pass_change')}</h3>
      <Grid container columnSpacing={5} columns={2}>
        <Grid item xs={2}>
          <Input
            name="password"
            type="password"
            placeholder={t('new_pass')}
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
            placeholder={t('retype_pass')}
            defaultValue={
              accountDetailState.userAccount
                ? accountDetailState.userAccount.re_password
                : ""
            }
            onChange={onChangeUserAccountField}
          />
        </Grid>
      </Grid>
      <button onClick={submitForm}>{t('save_change')}</button>
    </div>
  );
};

export default AccountDetail;
