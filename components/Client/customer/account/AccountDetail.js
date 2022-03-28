import React from 'react';
import { Grid } from '@mui/material';

import styles from './AccountDetail.module.css';
import Input from '../../../common/Input';

const AccountDetail = (props) => {
  return (
    <div className={styles['account-detail']}>
      <h3>Account Details</h3>
      <Grid container columnSpacing={5} columns={2}>
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
        <Grid item xs={2}>
          <Input 
            placeholder='Display Name'
          />          
        </Grid>
        <Grid item xs={2}>
          <Input 
            placeholder='Email Address'
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