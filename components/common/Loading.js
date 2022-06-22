import { Modal } from "@mui/material";
import React from "react";
import styles from "./Loading.module.css";

const Loading = ({isLoading}) => {
  return (
    <Modal
      open={isLoading}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <div className={styles.wrap}>
        <div className={styles.loading}>
          <div className={styles.bounceball}></div>
          <div className={styles.text}>NOW LOADING</div>
        </div>
      </div>
    </Modal>
  );
};

export default Loading;
