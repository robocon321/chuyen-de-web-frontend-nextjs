import React from 'react';
import { Container } from '@mui/material';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import Shop from '../../components/Client/shop/index';


const ShopPage = props => {
  return (
    <>
      <Header />    
      <main>
        <Shop />
      </main>
      <Footer />
    </>
  )
}

export default ShopPage;