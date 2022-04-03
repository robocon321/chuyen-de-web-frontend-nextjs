import React from 'react';

import Header from '../../../components/Client/Header';
import Footer from '../../../components/Client/Footer';
import Order from '../../../components/Client/customer/orders/index';

const OrderPage = props => {
  return (
    <>
      <Header />    
      <main>
        <Order />
      </main>
      <Footer />
    </>
  )
}

export default OrderPage;