import { Container, Grid } from '@mui/material';
import React from 'react';

import Breadcrumb from '../../common/Breadcrumb';
import WishList from '../../Client/wishlist/WishList';

const Index = props => {
  return (
    <>
      <Container>
        <Breadcrumb links={['Home', 'Wishlist']}/>
      </Container>
      <hr />
      <Container>
        <WishList />
      </Container>
      <hr />
    </>
  )
}

export default Index;