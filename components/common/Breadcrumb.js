import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = props => {
  return (
    <div className={styles.breadcrumb}>
      {
        props.links.map((item, index) => {
          return index === 0 ? (
            <a href='#'>{item}</a>
          ) : (
            <a href='#'><i className="fa-solid fa-angle-right"></i><span>{item}</span></a>
          )
        })
      }
    </div>
  );
}

export default Breadcrumb;