import React from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

import styles from './Header.module.css';


const Header = (props) => {
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
            <input type='text' placeholder='Enter your text' />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className={styles.info}>
          <span><i className="fa-solid fa-comment-dots"></i></span>
          <span><i className="fa-solid fa-bell"></i></span>
          <span className={styles.languages}>English</span>
          <span className={styles.account}>
            <div className={styles.avatar}>
              <Image 
                src='https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg'
                alt='Not found'
                width={40}
                height={40}
              />
            </div>          
            <ul>
              <li><a href='#'>My profile</a></li>
              <li><a href='#'>Settings</a></li>
              <li><a href='#'>Logout</a></li>
            </ul>
          </span>
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