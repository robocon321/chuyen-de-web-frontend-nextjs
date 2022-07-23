import React, { useContext } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

import styles from './Header.module.css';
import { AuthContext } from '../../contexts/providers/AuthProvider';


const Header = (props) => {
  const { t, changeLang, lang } = useContext(AuthContext);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={props.onToggle}
            sx={{ mr: 2, color: 'black'}}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.searchbox}>
            <input type='text' placeholder={t('enter_text_admin')} />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className={styles.info}>
          <div><i className="fa-solid fa-comment-dots"></i></div>
          <div><i className="fa-solid fa-bell"></i></div>
          {
            lang == 'vi' ? 
            <div className={styles.languages} onClick={() => changeLang('en')}>{t('vietnamese')}</div>
            :
            <div className={styles.languages} onClick={() => changeLang('vi')}>{t('english')}</div>
          }
          <div className={styles.account}>
            <div className={styles.avatar}>
              <Image 
                src='https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg'
                alt='Not found'
                width={40}
                height={40}
              />
            </div>          
            <ul>
              <li><a href='#'>{t('profile_admin')}</a></li>
              <li><a href='#'>{t('settings_admin')}</a></li>
              <li><a href='#'>{t('logout_admin')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles['hidden-searchbox']}>
        <input type='text' placeholder='Enter your text' />
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </>
  )
}

export default Header;