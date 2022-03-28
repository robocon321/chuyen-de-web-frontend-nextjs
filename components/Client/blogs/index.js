import { Container, Grid } from '@mui/material';
import React from 'react';

import Breadcrumb from '../../common/Breadcrumb';
import Sidebar from './Sidebar';
import BlogList from './BlogList';
import Pagination from './Pagination';

const Index = props => {
  return (
    <>
      <Container>
        <Breadcrumb links={['Home', 'Blog']}/>
      </Container>
      <hr />
      <Container>
        <Grid 
          container 
          direction={
            { 
              // xs: 'column-reverse',
              sm: 'row',
              md: 'row'
            }
          } 
          spacing={5} 
          columns={4}>
          <Grid item xs={4} md={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={4} md={3}>
            <BlogList />
            <Pagination />
          </Grid>
        </Grid>
      </Container>
      <hr />
    </>
  )
}

export default Index;