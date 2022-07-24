import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";

import styles from "./index.module.css";

import Breadcrumb from "../../../common/Breadcrumb";
import Loading from "../../../common/Loading";
import Notification from "../../../common/Notification";
import Input from "../../../common/Input";

import { UserUpdateAdminContext } from "../../../../contexts/providers/admin/UserUpdateAdminProvider";
import { AuthContext } from "../../../../contexts/providers/AuthProvider";

const Index = (props) => {
  const {
    onChangeFieldUser,
    onChangeFieldUserAccount,
    userUpdateAdminState,
    onChangeRole,
    reset,
    submit,
    setError,
    router,
    uploadFile,
  } = useContext(UserUpdateAdminContext);
  const { authState, t } = useContext(AuthContext);

  if (userUpdateAdminState.isLoading || authState.isLoading) {
    return <Loading isLoading={true} />;
  }

  if (!userUpdateAdminState.isLoading && !authState.user) {
    router.push("/auth");
    return;
  }

  return (
    <div className={styles["add-new"]}>
      <Notification
        title={t('error')}
        content={userUpdateAdminState.error}
        open={userUpdateAdminState.error != null}
        onClose={() => setError(null)}
      />
      <div className={styles.head}>
        <Breadcrumb
          links={[
            t("home_brum_admin"),
            t("user_brum_admin"),
            t("update_brum_admin"),
          ]}
        />
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6}>
            <Image
              src={
                userUpdateAdminState.user.avatar
                  ? userUpdateAdminState.user.avatar
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
        </Grid>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6}>
            <Input
              id="email"
              title={t("email_admin")}
              placeholder={t("email_placeholder_admin")}
              isRequire="true"
              type="email"
              name="email"
              defaultValue={userUpdateAdminState.user.email}
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="username"
              title={t("username_admin")}
              placeholder={t("username_placehoder_admin")}
              isRequire="true"
              name="username"
              defaultValue={userUpdateAdminState.user.userAccount.username}
              onChange={onChangeFieldUserAccount}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="password"
              title={t("password_admin")}
              placeholder={t("password_placeholder_admin")}
              isRequire="true"
              type="password"
              name="password"
              defaultValue={userUpdateAdminState.user.userAccount.password}
              onChange={onChangeFieldUserAccount}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="re_password"
              title={t("re_password_admin")}
              placeholder={t("re_password_placeholder_admin")}
              isRequire="true"
              type="password"
              name="re_password"
              defaultValue={userUpdateAdminState.user.userAccount.re_password}
              onChange={onChangeFieldUserAccount}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="fullname"
              title={t("birthday_admin")}
              placeholder="2000/12/01"
              isRequire="true"
              name="fullname"
              defaultValue={userUpdateAdminState.user.fullname}
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="birthday"
              title={t("birthday_admin")}
              placeholder="2000/12/01"
              name="birthday"
              type="date"
              defaultValue={userUpdateAdminState.user.birthday}
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="phone"
              title={t("phone_admin")}
              placeholder="0983242211"
              name="phone"
              defaultValue={userUpdateAdminState.user.phone}
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="role"
              title={t("role_admin")}
              placeholder={t("role_placeholder_admin")}
              isRequire="true"
              arrayObj={userUpdateAdminState.roles}
              valueObj="id"
              textInnerObj="name"
              type="select"
              onChange={onChangeRole}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="sex"
              title={t("sex_admin")}
              placeholder={t("sex_placeholder_admin")}
              name="sex"
              arrayObj={[
                {
                  id: true,
                  name: t("male_admin"),
                },
                {
                  id: false,
                  name: t("female_admin"),
                },
              ]}
              valueObj="id"
              textInnerObj="name"
              type="select"
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "64px" }}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={6}>
                <button className={styles.success} onClick={submit}>
                  {t("active_user_admin")}
                </button>
              </Grid>
              <Grid item xs={6}>
                <button className={styles.danger} onClick={reset}>
                  {t("clear_admin")}
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Index;
