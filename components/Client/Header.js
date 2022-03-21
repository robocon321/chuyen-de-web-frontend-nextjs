import React from 'react';
import Image from 'next/image';

import styles from './Header.module.css';
import { Container } from '@mui/material';

const Header = props => {
  return (
    <header>
      <Container>
        <div className={styles['top-header']}>
          <div className={styles['left-top-header']}>
            <span>Follow Us: </span>
            <a href='#'><i className="fa-brands fa-facebook-f" /></a>
            <a href='#'><i className="fa-brands fa-twitter" /></a>
            <a href='#'><i className="fa-brands fa-google-plus-g" /></a>
            <a href='#'><i className="fa-brands fa-instagram" /></a>
            <a href='#'><i className="fa-brands fa-youtube" /></a>
          </div>
          <div className={styles['right-top-header']}>
            <div className={styles.dropdown}>
              <span>My Account</span>
              <div className={styles['dropdown-content']}>
                <a href='#'>Register</a>
                <hr />
                <a href='#'>Login</a>
              </div>
            </div>
            <span> | </span>
            <div className={styles.dropdown}>
              <span>English</span>
              <div className={styles['dropdown-content']}>
                <a href='#'>English</a>
                <hr />
                <a href='#'>Vietnam</a>
              </div>
            </div>
            <span> | </span>
            <div className={styles.dropdown}>
              <span>USD</span>
              <div className={styles['dropdown-content']}>
                <a href='#'>USD</a>
                <hr />
                <a href='#'>Đồng</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles['center-header']}>
          <div className={styles['left-center-header']}>
            <div className={styles['logo-header']}>
              <Image
                src="/logo.webp"
                alt="Not found"
                width={140}
                height={40}
              />
            </div>
            <div className={styles['searchbar-header']}>
              <input placeholder='Search enter store here ...'/>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>              
              </button>
            </div>
          </div>
          <div className={styles['right-center-header']}>
            <div className={styles['contact-header']}>
              <div className={styles['icon-contact-header']}>
                <Image
                  src="/contactus.webp"
                  alt="Not found"
                  width={40}
                  height={35}
                />
              </div>
              <div className={styles['info-contact-header']}>
                <div>Customer Support</div>
                <div><b>035 4512 411</b></div>
              </div>
            </div>
            <div className={styles['cart-header']}>
              <span><i className="fa-solid fa-cart-shopping"></i></span>            
              <span className={styles['total-item-cart-header']}>1</span>
            </div>
          </div>
        </div>
        <div className={styles['hidden-searchbar-header']}>
          <input placeholder='Search enter store here ...'/>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>        
          </button>
        </div>

      </Container>
      <div className={styles['wrap-navbar']}>
        <Container>
          <ul className={styles['navbar']}>
            <li>
              <a href="#">HOME <i className="fa-solid fa-angle-down"></i></a>
              <ul className={styles['inner-navbar']}>
                <li><a href="#">HOME PAGE 1</a></li>
                <li><a href="#">HOME PAGE 2</a></li>
                <li><a href="#">HOME PAGE 3</a></li>
                <li><a href="#">HOME PAGE 4</a></li>
              </ul>
            </li>
            <li><a href="#">PAGES <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a href="#">BLOG <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a href="#">CONTACT <i className="fa-solid fa-angle-down"></i></a></li>
          </ul>
        </Container>
      </div>
    </header>
  )
}

export default Header;