import { Box, Button, Modal, Stack } from "@mui/material";
import React, { useContext, useState } from "react";

import { AuthContext } from "../../../../contexts/providers/AuthProvider";
import { BlogDetailContext } from '../../../../contexts/providers/BlogDetailProvider';
import Input from "../../../common/Input";
import styles from "./FormComment.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const FormComment = (props) => {
  const { authState, router } = useContext(AuthContext);
  const { blogState, setForm, submitForm } = useContext(BlogDetailContext)
  const [showModal, setShowModal] = useState(false);

  const onClickInput = () => {
    if (authState.user) {
    } else {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const redirectLogin = () => {
    router.push("/auth");
  }

  const removeReply = () => {
    setForm({
      ...blogState.form,
      parent: null
    })
  }

  return (
    <form onSubmit={submitForm} id="form" className={styles["form-comment"]}>
      <h2>LEAVE A REPLY {
        blogState.form && blogState.form.parent ? <span className={styles["form-reply"]} onClick={removeReply}>to {blogState.form.parent.modifiedUser.fullname} <i className="fa-regular fa-circle-xmark"></i></span> : ''
      }</h2>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <Input
        id="content"
        onChange={(e) => {
          setForm({
            ...blogState.form,
            content: e.target.value
          });
        }}
        onClick={onClickInput}
        title="Comment"
        isRequire='true'
        type="textarea"
        name="content"
      />
      <button type="submit" onClick={submitForm}>POST COMMENT</button>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h1 id="parent-modal-title mb-3">Alert</h1>
          <br />
          <p id="parent-modal-description">You must login before comment</p>
          <br />
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary" onClick={redirectLogin}>Login</Button>
            <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </form>
  );
};

export default FormComment;
