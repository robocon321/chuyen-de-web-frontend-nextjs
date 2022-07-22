import React from 'react';
import AddNew from '../../../../components/Admin/users/add-new/index';
import UserNewAdminProvider from '../../../../contexts/providers/admin/UserNewAdminProvider';


const AddNewUserPage = () => {
  return (
    <UserNewAdminProvider>
      <AddNew />
    </UserNewAdminProvider>
  )
}

export default AddNewUserPage;