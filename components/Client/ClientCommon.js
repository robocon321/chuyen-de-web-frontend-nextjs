import React, { useEffect, useContext } from 'react';

import Header from './Header';
import Footer from './Footer';
import { AuthContext } from '../../contexts/providers/AuthProvider';

const ClientCommon = (props) => {
  const { loadAccount } = useContext(AuthContext);
  
  useEffect(() => {
    loadAccount();
  }, []);

  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>    
    )
}

export default ClientCommon