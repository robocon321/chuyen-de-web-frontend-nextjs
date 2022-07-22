import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Image from 'next/image';

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
    uploadFile
  } = useContext(UserUpdateAdminContext);
  const { authState } = useContext(AuthContext);

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
        title="Error"
        content={userUpdateAdminState.error}
        open={userUpdateAdminState.error != null}
        onClose={() => setError(null)}
      />    
      <div className={styles.head}>
        <Breadcrumb links={["Home", "Users", "Add New"]} />
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
              title="Email"
              placeholder="Example: robocon321n@gmail.com"
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
              title="Username"
              placeholder="Example: robocon321"
              isRequire="true"
              name="username"
              defaultValue={userUpdateAdminState.user.userAccount.username}
              onChange={onChangeFieldUserAccount}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="password"
              title="Password"
              placeholder="Enter your password"
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
              title="Re-password"
              placeholder="Validate your password"
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
              title="Full name"
              placeholder="Nguyễn Thanh Nhật"
              isRequire="true"
              name="fullname"
              defaultValue={userUpdateAdminState.user.fullname}
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="birthday"
              title="Birthday"
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
              title="Phone number"
              placeholder="0983242211"
              name="phone"
              defaultValue={userUpdateAdminState.user.phone}
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              id="role"
              title="Role"
              placeholder="Choose your role"
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
              title="Sex"
              placeholder="Choose your sex"
              name="sex"
              arrayObj={[{
                id: true,
                name: 'Male'
              }, {
                id: false,
                name: 'Female'
              }]}
              valueObj="id"
              textInnerObj="name"
              type="select"
              onChange={onChangeFieldUser}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{marginTop: '64px'}}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={6}>
                <button className={styles.success} onClick={submit}>Kích hoạt tài khoản</button>
              </Grid>
              <Grid item xs={6}>
                <button className={styles.danger} onClick={reset}>Xóa thông tin</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Index;
