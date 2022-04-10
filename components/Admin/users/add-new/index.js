import { Grid } from '@mui/material';
import React from 'react';

import styles from './index.module.css';
import Breadcrumb from '../../../common/Breadcrumb';
import Input from '../../../common/Input';

const roles = [
  {
    id: 0,
    name: 'ADMIN'
  },
  {
    id: 1,
    name: 'USER'
  },
  {
    id: 2,
    name: 'CTV'
  }
]

const Index = (props) => {  
  return (
    <div className={styles['add-new']}>
      <div className={styles.head}>        
        <Breadcrumb links={['Home', 'Users','Add New']} />
        <Grid container spacing={2} columns={12}>
         <Grid item xs={12} md={6}>
            <Input 
              title='Email'
              placeholder='Example: robocon321n@gmail.com'
              isRequire='true'
              type='email'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input 
              title='Username'
              placeholder='Example: robocon321'
              isRequire='true'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input 
              title='Password'
              placeholder='Enter your password'
              isRequire='true'
              type='password'            
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input 
              title='Re-password'
              placeholder='Validate your password'
              isRequire='true'
              type='password'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input 
              title='First name'
              placeholder='Nguyễn Thanh'
              isRequire='true'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input 
              title='Last name'
              placeholder='Tân'
              isRequire='true'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input 
              title='Phone number'
              placeholder='0983242211'
              isRequire='true'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input 
              title='Role'
              placeholder='Choose your role'
              isRequire='true'
              arrayObj={roles}
              valueObj='id'
              textInnerObj='name'
              type='select'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={6}>
                <button className={styles.success}>Kích hoạt tài khoản</button>
              </Grid>
              <Grid item xs={6}>
                <button className={styles.danger}>Xóa thông tin</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Index;