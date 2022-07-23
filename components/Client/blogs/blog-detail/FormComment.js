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
  const { authState, router, t } = useContext(AuthContext);
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
      <h2>{t('leave_reply')} {
        blogState.form && blogState.form.parent ? <span className={styles["form-reply"]} onClick={removeReply}>{t('to')} {blogState.form.parent.modifiedUser ? blogState.form.parent.modifiedUser.fullname : 'Anonymous'} <i className="fa-regular fa-circle-xmark"></i></span> : ''
      }</h2>
      <p>
      {t('email_address_not_publish')}
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
        title={t('comment')}
        isRequire='true'
        type="textarea"
        name="content"
      />
      <button type="submit" onClick={submitForm}>{t('post_comment')}</button>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h1 id="parent-modal-title mb-3">{t('alert')}</h1>
          <br />
          <p id="parent-modal-description">{t('login_before_comment')}</p>
          <br />
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary" onClick={redirectLogin}>{t('login')}</Button>
            <Button variant="contained" color="error" onClick={handleClose}>{t('cancel')}</Button>
          </Stack>
        </Box>
      </Modal>
    </form>
  );
};

export default FormComment;
