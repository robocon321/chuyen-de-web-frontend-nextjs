import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import Cart from '../../components/Client/cart/index';

const CartPage = props => {
  return <>
      <Header />    
      <main>
        <Cart />
      </main>
      <Footer />
  </>
}

export default CartPage;