import React from 'react';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import BlogDetail from '../../components/Client/blogs/blog-detail/index';


const DetailBlogPage = props => {
  return (
    <>
      <Header />    
      <main>
        <BlogDetail />
      </main>
      <Footer />
    </>
  )
}

export default DetailBlogPage;