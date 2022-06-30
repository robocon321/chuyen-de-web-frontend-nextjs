import React, { useContext } from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.css';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const Sidebar = (props) => {
  const { logout } = useContext(AuthContext);

  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link href='/customer'>
            <a>
              <span><i className="fa-solid fa-gauge"></i></span>
              <span>DASHBOARD</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/customer/account'>
            <a>
              <span><i className="fa-solid fa-user"></i></span>
              <span>ACCOUNT</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/customer/addresses'>
            <a>
              <span><i className="fa-solid fa-location-dot"></i></span>
              <span>ADDRESSES</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/customer/orders'>
            <a>
              <span><i className="fa-solid fa-cart-arrow-down"></i></span>
              <span>ORDERS</span>
            </a>
          </Link>
        </li>
        <li>
            <a href="#" onClick={logout}>
              <span><i className="fa-solid fa-right-from-bracket"></i></span>
              <span>LOGOUT</span>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;