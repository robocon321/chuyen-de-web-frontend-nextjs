import React from "react";
import Feedback from "../../../components/Admin/feedbacks/index";
import FeedbackListAdminProvider from "../../../contexts/providers/admin/FeedbackListAdminProvider";

const FeedbackPage = (props) => {
  return (
    <FeedbackListAdminProvider>
      <Feedback />
    </FeedbackListAdminProvider>
  )
}

export default FeedbackPage;

