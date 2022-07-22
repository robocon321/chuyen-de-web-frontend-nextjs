import React from 'react';
import Update from '../../../../components/Admin/users/update/index';
import UserUpdateAdminProvider from '../../../../contexts/providers/admin/UserUpdateAdminProvider';


const AddUpdateUserPage = () => {
  return (
    <UserUpdateAdminProvider>
      <Update />
    </UserUpdateAdminProvider>
  )
}

export default AddUpdateUserPage;