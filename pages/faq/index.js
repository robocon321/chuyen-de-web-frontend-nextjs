import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import FAQ from '../../components/Client/faq/index';

const FAQPage = props => {
  return (
    <>
      <Header />    
      <main>
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default FAQPage;