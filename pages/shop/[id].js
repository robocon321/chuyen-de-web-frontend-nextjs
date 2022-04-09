import React from 'react'
import Router, { useRouter } from 'next/router';
import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import ShopDetail from '../../components/Client/shop/shop-detail/index';
const ProductDetailPage = () => {
    // const router = useRouter();
  return (
    <>
    <Header/>
      <ShopDetail/>
    <Footer/>
    </>
  )
}

export default ProductDetailPage;