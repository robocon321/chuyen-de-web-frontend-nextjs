import React, { useContext } from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.css';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const Sidebar = (props) => {
  const { logout, t } = useContext(AuthContext);

  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href='/customer'>
            <a>
              <span><i className="fa-solid fa-gauge"></i></span>
              <span>{t('dashboard_sb')}</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/customer/account'>
            <a>
              <span><i className="fa-solid fa-user"></i></span>
              <span>{t('account_sb')}</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/customer/addresses'>
            <a>
              <span><i className="fa-solid fa-location-dot"></i></span>
              <span>{t('addresses_sb')}</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/customer/orders'>
            <a>
              <span><i className="fa-solid fa-cart-arrow-down"></i></span>
              <span>{t('orders_sb')}</span>
            </a>
          </Link>
        </li>
        <li>
            <a href="#" onClick={logout}>
              <span><i className="fa-solid fa-right-from-bracket"></i></span>
              <span>{t('logout_sb')}</span>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;