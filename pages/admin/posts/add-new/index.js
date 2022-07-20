import React from 'react';
import AddNew from '../../../../components/Admin/posts/add-new/index';
import PostNewAdminProvider from '../../../../contexts/providers/admin/PostNewAdminProvider';

const AddNewPostPage = () => {
  return (
    <PostNewAdminProvider>
      <AddNew />
    </PostNewAdminProvider>
  )
}

export default AddNewPostPage;