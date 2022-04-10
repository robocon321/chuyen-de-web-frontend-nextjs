import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <li><Link href='/admin/dashboard'><a><span><i className="fa-solid fa-house-chimney"></i></span><span>Dashboard</span></a></Link></li>
        <li>
          <a href='#'>
            <span><i className="fa-solid fa-newspaper"></i></span><span>Post
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/posts'><a><span></span><span>All Posts</span></a></Link></li>
                <li><Link href='/admin/posts/add-new'><a><span></span><span>Add New</span></a></Link></li>
                <li><Link href='/admin/posts/category'><a><span></span><span>Category</span></a></Link></li>
                <li><Link href='/admin/posts/tag'><a><span></span><span>Tag</span></a></Link></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li>
          <a href='#'>
            <span><i className="fa-brands fa-product-hunt"></i></span><span>Product
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/products'><a><span></span><span>All Products</span></a></Link></li>
                <li><Link href='/admin/products/add-new'><a><span></span><span>Add New</span></a></Link></li>
                <li><Link href='/admin/products/category'><a><span></span><span>Category</span></a></Link></li>
                <li><Link href='/admin/products/tag'><a><span></span><span>Tag</span></a></Link></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li>
          <a href='#'>
            <span><i className="fa-solid fa-circle-user"></i></span><span>User
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/users'><a><span></span><span>All Users</span></a></Link></li>
                <li><Link href='/admin/users/add-new'><a><span></span><span>Add New</span></a></Link></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li><Link href='/admin/transactions'><a><span><i className="fa-solid fa-cart-shopping"></i></span><span>Transaction</span></a></Link></li>
        <li><Link href='/admin/comments'><a><span><i className="fa-solid fa-star"></i></span><span>Review</span></a></Link></li>
        <li>
          <a href='#'>
            <span><i className="fa-solid fa-bullhorn"></i></span><span>Marketing
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/coupons'><a><span></span><span>All Coupons</span></a></Link></li>
                <li><Link href='/admin/coupons/add-new'><a><span></span><span>Add Coupon</span></a></Link></li>
              </ul>
            </span>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li><Link href='/admin/analysic'><a><span><i className="fa-solid fa-chart-line"></i></span><span>Analysic</span></a></Link></li>
        <li><Link href='/admin/settings'><a><span><i className="fa-solid fa-gear"></i></span><span>Settings</span></a></Link></li>
      </ul>
    </div>
  )
}

export default Sidebar;