import React from 'react';

import Header from '../../../components/Client/Header';
import Footer from '../../../components/Client/Footer';
import Account from '../../../components/Client/customer/account/index';

const AccountPage = props => {
  return (
    <>
      <Header />    
      <main>
        <Account />
      </main>
      <Footer />
    </>
  )
}

export default AccountPage;