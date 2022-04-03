import React from 'react'
import { Container, Grid } from '@mui/material';

import styles from './index.module.css';
import Breadcrumb from '../../../common/Breadcrumb';
import Sidebar from '../Sidebar';
import AccountDetail from './AccountDetail';

const Index = (props) => {
  return (
    <div className={styles.contact}>
      <Container>
        <Breadcrumb links={['Home', 'Account']}/>
      </Container>
      <hr />
      <Container>
        <Grid container spacing={5} columns={12}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item sm={12} md={9}>
            <AccountDetail />
          </Grid>
        </Grid>
      </Container>
      <hr />
    </div>  
  )
}

export default Index;