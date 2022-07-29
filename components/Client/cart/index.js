import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';

import Breadcrumb from '../../common/Breadcrumb';
import CartList from '../../Client/cart/CartList';
import Payment from '../../Client/cart/Payment';

const Index = (props) => {
  const [subTotal,setSubTotal] = useState(0)
  const [cartId,setCartId] = useState([])
  // console.log("index",carts)
  console.log("SubTotal ",subTotal)
  return (
    <>
      <Container>
        <Breadcrumb links={['Home', 'Cart']}/>
      </Container>
      <hr />
      <Container>
        <CartList subTotal={subTotal} setSubTotal={setSubTotal} cartId={cartId} setCartId={setCartId}/>
        <Payment subTotal={subTotal} cartId={cartId}/>
      </Container>
      <hr />
    </>
  )
}

export default Index;