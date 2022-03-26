import { Container, Grid } from '@mui/material';
import React from 'react';

import Breadcrumb from '../../common/Breadcrumb';
import CartList from '../../Client/cart/CartList';
import Payment from '../../Client/cart/Payment';

const Index = props => {
  return (
    <>
      <Container>
        <Breadcrumb links={['Home', 'Cart']}/>
      </Container>
      <hr />
      <Container>
        <CartList />
        <Payment />
      </Container>
      <hr />
    </>
  )
}

export default Index;