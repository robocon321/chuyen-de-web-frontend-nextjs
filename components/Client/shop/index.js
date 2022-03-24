import { Container, Grid } from '@mui/material';
import React from 'react';

import Breadcrumb from '../../common/Breadcrumb';
import Sidebar from './Sidebar';

const Index = props => {
  return (
    <>
      <Container>
        <Breadcrumb links={['Home', 'Shop']}/>
      </Container>
      <hr />
      <Container>
        <Grid container columns={12} spacing={2}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>    
    </>
  )
}

export default Index;