import React from 'react';
import Update from '../../../../components/Admin/posts/update/index';
import PostUpdateAdminProvider from '../../../../contexts/providers/admin/PostUpdateAdminProvider';

const UpdatePostPage = () => {
  return (
    <PostUpdateAdminProvider>
      <Update />
    </PostUpdateAdminProvider>
  )
}

export default UpdatePostPage;