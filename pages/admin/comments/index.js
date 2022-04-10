import React from "react";
import Comment from "../../../components/Admin/comments/index";
import AdminCommon from "../../../components/Admin/AdminCommon";

const CommentPage = (props) => {
  return (
    <AdminCommon>
      <Comment />
    </AdminCommon>
  )
}

export default CommentPage;