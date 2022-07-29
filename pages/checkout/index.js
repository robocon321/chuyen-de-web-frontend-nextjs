import React from 'react';
import CartProvider from '../../contexts/providers/CartProvider';
import Contact from '../../components/Client/contact/index';
import Checkout from '../../components/Client/checkout';



const CheckoutPage = props => {
  return (
    <>
        
      <CartProvider>
       <Checkout/>
      </CartProvider>
      
    </>
  )
}

export default CheckoutPage;