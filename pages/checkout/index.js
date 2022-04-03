import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import Contact from '../../components/Client/contact/index';
import Checkout from '../../components/Client/checkout';



const CheckoutPage = props => {
  return (
    <>
      <Header />    
      <main>
       <Checkout/>
      </main>
      <Footer />
    </>
  )
}

export default CheckoutPage;