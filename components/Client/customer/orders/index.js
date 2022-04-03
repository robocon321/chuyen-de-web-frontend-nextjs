import React from 'react'
import { Container, Grid } from '@mui/material';

import styles from './index.module.css';
import Breadcrumb from '../../../common/Breadcrumb';
import Sidebar from '../Sidebar';
import Order from './Order';

const Index = (props) => {
  return (
    <div className={styles.contact}>
      <Container>
        <Breadcrumb links={['Home', 'Orders']}/>
      </Container>
      <hr />
      <Container>
        <Grid container spacing={5} columns={12}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Order />
          </Grid>
        </Grid>
      </Container>
      <hr />
    </div>  
  )
}

export default Index;