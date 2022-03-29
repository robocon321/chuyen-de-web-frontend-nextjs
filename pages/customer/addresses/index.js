import React from 'react';

import Header from '../../../components/Client/Header';
import Footer from '../../../components/Client/Footer';
import Address from '../../../components/Client/customer/addresses/index';

const AddressPage = props => {
  return (
    <>
      <Header />    
      <main>
        <Address />
      </main>
      <Footer />
    </>
  )
}

export default AddressPage;