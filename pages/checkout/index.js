import React from 'react';
import CartProvider from '../../contexts/providers/CartProvider';
import Contact from '../../components/Client/contact/index';
import Checkout from '../../components/Client/checkout';
import CheckoutProvider from '../../contexts/providers/CheckoutProvider';



const CheckoutPage = props => {
  return (
    <>
        <CheckoutProvider>
      {/* <CartProvider> */}
       <Checkout/>
      {/* </CartProvider> */}
      </CheckoutProvider>
    </>
  )
}

export default CheckoutPage;