import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import Contact from '../../components/Client/contact/index';


const ContactPage = props => {
  return (
    <>
      <Header />    
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default ContactPage;