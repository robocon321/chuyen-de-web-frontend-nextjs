import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = props => {
  return (
    <div className={styles.breadcrumb}>
      {
        props.links.map((item, index) => {
          return index === 0 ? (
            <a key={index} href='#'>{item}</a>
          ) : (
            <a key={index} href='#'><i className="fa-solid fa-angle-right"></i><span>{item}</span></a>
          )
        })
      }
    </div>
  );
}

export default Breadcrumb;