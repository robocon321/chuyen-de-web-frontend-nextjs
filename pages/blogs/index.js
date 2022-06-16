import React from 'react';

import Blog from '../../components/Client/blogs/index';
import BlogProvider from '../../contexts/providers/BlogProvider';


const BlogPage = props => {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  )
}

export default BlogPage;