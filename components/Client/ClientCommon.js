import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ClientCommon = (props) => {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>    
    )
}

export default ClientCommon