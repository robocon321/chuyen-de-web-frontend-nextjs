import React from "react";
import Product from "../../../components/Admin/posts/index";
import PostListAdminProvider from "../../../contexts/providers/admin/PostListAdminProvider";

const PostPage = (props) => {
  return (
    <PostListAdminProvider>
      <Product />
    </PostListAdminProvider>
  )
}

export default PostPage;