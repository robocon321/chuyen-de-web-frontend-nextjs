import React from 'react';

import Shop from '../../components/Client/shop/index';
import ShopProvider from '../../contexts/providers/ShopProvider'

const ShopPage = props => {
  return (
    <ShopProvider>
    <Shop />
    </ShopProvider>
  )
}

export default ShopPage;