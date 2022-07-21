import React from "react";
import UserList from "../../../components/Admin/users/index";
import UserListAdminProvider from "../../../contexts/providers/admin/UserListAdminProvider";

const ListUserPage = (props) => {
  return (
    <UserListAdminProvider>
      <UserList />
    </UserListAdminProvider>
  )
}

export default ListUserPage;