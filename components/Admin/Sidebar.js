import React from 'react';
import Image from 'next/image';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Image 
        src={'https://www.ecommerce-admin.com/demo/images/logo.svg'}
        alt='Not found'
        width={150}
        height={50}
      />
      <ul className={styles.menu}>
        <li><a href='#'><span><i className="fa-solid fa-house-chimney"></i></span><span>Dashboard</span></a></li>
        <li>
          <a href='#'>
            <span><i className="fa-solid fa-newspaper"></i></span><span>Post
              <ul className={styles['child-menu']}>
                <li><a href='#'><span></span><span>All Posts</span></a></li>
                <li><a href='#'><span></span><span>Add New</span></a></li>
                <li><a href='#'><span></span><span>Category</span></a></li>
                <li><a href='#'><span></span><span>Tag</span></a></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li>
          <a href='#'>
            <span><i className="fa-brands fa-product-hunt"></i></span><span>Product
              <ul className={styles['child-menu']}>
                <li><a href='#'><span></span><span>All Products</span></a></li>
                <li><a href='#'><span></span><span>Add New</span></a></li>
                <li><a href='#'><span></span><span>Category</span></a></li>
                <li><a href='#'><span></span><span>Tag</span></a></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li>
          <a href='#'>
            <span><i className="fa-solid fa-circle-user"></i></span><span>User
              <ul className={styles['child-menu']}>
                <li><a href='#'><span></span><span>All Users</span></a></li>
                <li><a href='#'><span></span><span>Add New</span></a></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li><a href='#'><span><i className="fa-solid fa-cart-shopping"></i></span><span>Transaction</span></a></li>
        <li><a href='#'><span><i className="fa-solid fa-star"></i></span><span>Review</span></a></li>
        <li>
          <a href='#'>
            <span><i className="fa-solid fa-bullhorn"></i></span><span>Marketing
              <ul className={styles['child-menu']}>
                <li><a href='#'><span></span><span>All Coupons</span></a></li>
                <li><a href='#'><span></span><span>Add Coupon</span></a></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li><a href='#'><span><i className="fa-solid fa-chart-line"></i></span><span>Analysic</span></a></li>
        <li><a href='#'><span><i className="fa-solid fa-gear"></i></span><span>Settings</span></a></li>
      </ul>
    </div>
  )
}

export default Sidebar;