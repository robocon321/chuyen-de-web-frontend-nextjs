import React from 'react';
import CartProvider from '../../contexts/providers/CartProvider';
import Cart from '../../components/Client/cart/index';

const CartPage = props => {
  return (
    <CartProvider>
    <Cart />
    </CartProvider>
  )
}

export default CartPage;