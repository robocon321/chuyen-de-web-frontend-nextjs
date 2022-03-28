import React from 'react';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <a href='#'>1</a>
        <a href='#'>2</a>
        <a href='#'><i className="fa-solid fa-angle-right"></i></a>
        <a href='#'><i className="fa-solid fa-forward-step"></i></a>
      </div>
      <div className={styles.info}>Showing 1 to 9 of 15 (2 Pages)</div>
    </div>
  )
}

export default Pagination