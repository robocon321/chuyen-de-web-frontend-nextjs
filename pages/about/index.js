import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import About from '../../components/Client/about/index';

const AboutPage = props => {
  return (
    <>
      <Header />    
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage;