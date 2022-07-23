import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AuthContext } from "../../contexts/providers/AuthProvider";
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const { t } = useContext(AuthContext);
  return (
    <div className={styles.sidebar}>
      <Image 
        src={'https://www.ecommerce-admin.com/demo/images/logo.svg'}
        alt='Not found'
        width={150}
        height={50}
      />
      <ul className={styles.menu}>
        <li><Link href='/admin/dashboard'><a><div><i className="fa-solid fa-house-chimney"></i></div><div>{t('dashboard_sb_admin')}</div></a></Link></li>
        <li>
          <a href='#'>
            <div><i className="fa-solid fa-newspaper"></i></div>
            <div>{t('post_sb_admin')}
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/posts'><a><span></span><span>{t('all_post_sb_admin')}</span></a></Link></li>
                <li><Link href='/admin/posts/add-new'><a><span></span><span>{t('add_new_sb')}</span></a></Link></li>
                <li><Link href='/admin/posts/category'><a><span></span><span>{t('category_sb_admin')}</span></a></Link></li>
                <li><Link href='/admin/posts/tag'><a><span></span><span>{t('tag_sb_admin')}</span></a></Link></li>
              </ul>
            </div>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li>
          <a href='#'>
            <div><i className="fa-brands fa-product-hunt"></i></div>
            <div>{t('product_sb_admin')}
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/products'><a><span></span><span>{t('all_product_sb_admin')}</span></a></Link></li>
                <li><Link href='/admin/products/add-new'><a><span></span><span>{t('add_new_sb')}</span></a></Link></li>
                <li><Link href='/admin/products/category'><a><span></span><span>{t('category_sb_admin')}</span></a></Link></li>
                <li><Link href='/admin/products/tag'><a><span></span><span>{t('tag_sb_admin')}</span></a></Link></li>
              </ul>
            </div>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li>
          <a href='#'>
            <div><i className="fa-solid fa-circle-user"></i></div>
            <div>{t('user_sb_admin')}
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/users'><a><span></span><span>{t('all_user_sb_admin')}</span></a></Link></li>
                <li><Link href='/admin/users/add-new'><a><span></span><span>{t('add_new_sb')}</span></a></Link></li>
              </ul>
            </div>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li><Link href='/admin/transactions'><a><div><i className="fa-solid fa-cart-shopping"></i></div><div>{t('order_sb_admin')}</div></a></Link></li>
        <li><Link href='/admin/comments'><a><div><i className="fa-solid fa-star"></i></div><div>{t('review_sb_admin')}</div></a></Link></li>
        <li><Link href='/admin/feedbacks'><a><div><i className="fa-solid fa-comment-medical"></i></div><div>{t('feedback_sb_admin')}</div></a></Link></li>
        <li>
          <a href='#'>
            <div><i className="fa-solid fa-bullhorn"></i></div>
            <div>{t('marketing_sb_admin')}
              <ul className={styles['child-menu']}>
                <li><Link href='/admin/coupons'><a><span></span><span>{t('all_coupon_sb_admin')}</span></a></Link></li>
                <li><Link href='/admin/coupons/add-new'><a><span></span><span>{t('add_coupon_sb_admin')}</span></a></Link></li>
              </ul>
            </div>
            <div className={styles['show-more']}><i className="fa-solid fa-caret-down"></i></div>
          </a>
        </li>
        <li><Link href='/admin/analysic'><a><div><i className="fa-solid fa-chart-line"></i></div><div>{t('analysic_sb_admin')}</div></a></Link></li>
        <li><Link href='/admin/settings'><a><div><i className="fa-solid fa-gear"></i></div><div>{t('setting_sb_admin')}</div></a></Link></li>
      </ul>
    </div>
  )
}

export default Sidebar;