import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faGooglePlusG,
  faInstagram,
  faYoutube,
  faSearch
} from '@fortawesome/free-brands-svg-icons';
import { Container } from '@mui/material';

import styles from './Header.module.css';

const Header = props => {
  return (
    <header>
      <Container>
        <div className={styles['top-header']}>
          <div className={styles['top-header-left']}>
            <span>Follow Us: </span>
            <a href='#'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='#'><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
          <div className={styles['top-header-right']}>
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
            <img className={styles['logo-header']} src='http://localhost:3000/logo.webp' />
            <div className={styles['searchbar-header']}>
              <input placeholder='Search enter store here ...'/>
              <button>
              <FontAwesomeIcon icon="fa-regular fa-coffee" />              </button>
            </div>
          </div>
          <div className={styles['right-center-header']}></div>
        </div>
      </Container>
    </header>
  )
}

export default Header;