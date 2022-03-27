import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import Blog from '../../components/Client/blog/index';


const BlogPage = props => {
  return (
    <>
      <Header />    
      <main>
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default BlogPage;