import React from "react";
import UserList from "../../../components/Admin/users/index";
import AdminCommon from "../../../components/Admin/AdminCommon";

const ListUserPage = (props) => {
  return (
    <AdminCommon>
      <UserList />
    </AdminCommon>
  )
}

export default ListUserPage;