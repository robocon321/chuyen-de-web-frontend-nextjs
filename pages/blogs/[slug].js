import React from 'react';

import BlogDetail from '../../components/Client/blogs/blog-detail/index';
import BlogDetailProvider from '../../contexts/providers/BlogDetailProvider';


const DetailBlogPage = props => {
  return (
    <BlogDetailProvider>
      <BlogDetail />
    </BlogDetailProvider>
  )
}

export default DetailBlogPage;