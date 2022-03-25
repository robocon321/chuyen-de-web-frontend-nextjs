import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import WishList from '../../components/Client/wishlist/index';

const WishlistPage = props => {
  return <>
      <Header />    
      <main>
        <WishList />
      </main>
      <Footer />
  </>
}

export default WishlistPage;