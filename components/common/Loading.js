import React from 'react';
import styles from './Loading.module.css';

const Loading = props => {
  return (
<div className={styles.wrap}>
  <div className={styles.loading}>
    <div className={styles.bounceball}></div>
    <div className={styles.text}>NOW LOADING</div>
  </div>
</div>
  );
}

export default Loading;