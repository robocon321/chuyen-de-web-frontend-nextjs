import React from 'react';

import styles from './Sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li><a href='#'>
          <span><i className="fa-solid fa-gauge"></i></span>
          <span>DASHBOARD</span>
        </a></li>
        <li><a href='#'>
          <span><i className="fa-solid fa-user"></i></span>
          <span>ACCOUNT</span>
        </a></li>
        <li><a href='#'>
          <span><i className="fa-solid fa-location-dot"></i></span>
          <span>ADDRESSES</span>
        </a></li>
        <li><a href='#'>
          <span><i className="fa-solid fa-cart-arrow-down"></i></span>
          <span>ORDERS</span>
        </a></li>
        <li><a href='#'>
          <span><i className="fa-solid fa-right-from-bracket"></i></span>
          <span>LOGOUT</span>
        </a></li>
      </ul>
    </div>
  )
}

export default Sidebar;