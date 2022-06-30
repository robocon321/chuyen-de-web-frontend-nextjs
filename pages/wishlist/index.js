import React from 'react';

import Wishlist from '../../components/Client/wishlist/index';
import WishlistProvider from '../../contexts/providers/WishlistProvider';

const WishlistPage = props => {
  return (
    <WishlistProvider>
      <Wishlist />
    </WishlistProvider>
  )
}

export default WishlistPage;