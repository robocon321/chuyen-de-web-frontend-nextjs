import React from 'react'

import ShopDetail from '../../components/Client/shop/shop-detail/index';
import ShopProvider from '../../contexts/providers/ShopProvider'
const ProductDetailPage = () => {
    // const router = useRouter();
  return (
    <>
   <ShopProvider>
      <ShopDetail/>
      </ShopProvider>
    </>
  )
}

export default ProductDetailPage;