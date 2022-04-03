import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import styles from './AccountDetail.module.css';
import Input from '../../../common/Input';

const AccountDetail = (props) => {
  return (
    <div className={styles['account-detail']}>
      <h3>Account Details</h3>
      <br />
      <br />
      <Grid container columnSpacing={5} columns={2}>
      <Grid item xs={1}>
          <Image
            src='https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
            alt='Not found'
            width={150}
            height={150}
          />
        </Grid>
        <Grid item xs={1}>
          <span>Giới tính: </span>
          <input type="radio" id="1" name="sex" value="1" />
          <label htmlFor="1">Nam</label>
          <input type="radio" id="0" name="sex" value="0" />
          <label htmlFor="0">Nữ</label>
          <Input 
            placeholder='Display Name'
          />          
        </Grid>
        <Grid item xs={2} md={1}>
          <Input 
            placeholder='First Name'
          />          
        </Grid>
        <Grid item xs={2} md={1}>
          <Input 
            placeholder='Last Name'
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Input 
            placeholder='Email Address'
          />
        </Grid>
        <Grid item xs={2} md={1}>
          <Input 
            placeholder='Phone Number'
          />
        </Grid>
        <Grid item xs={2}>
          <Input 
            placeholder='Birthday'
            type='date'
          />
        </Grid>
      </Grid>

      <h3>Password change</h3>
      <Grid container columnSpacing={5} columns={2}>
        <Grid item xs={2}>
          <Input 
            placeholder='Current Password'
          />          
        </Grid>
        <Grid item xs={2}>
          <Input 
            placeholder='New Password'
          />
        </Grid>
      </Grid>
      <button>SAVE CHANGES</button>
    </div>
  )
}

export default AccountDetail;