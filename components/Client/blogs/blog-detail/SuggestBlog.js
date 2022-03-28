import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import styles from './SuggestBlog.module.css';

const suggests = [
  {
    id: 0,
    title: 'The biggest lie in plant',
    date: 'April 24, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
  {
    id: 1,
    title: 'How to improve plant',
    date: 'April 24, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
  {
    id: 2,
    title: '101 ideas for plant',
    date: 'April 24, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },

]

const SuggestBlog = () => {
  return (
    <div className={styles['suggest-blog']}>
      <h3>RELATED POSTS</h3>
      <Grid container spacing={5} columns={3}>
        {
          suggests.map(item => (
            <Grid key={item.id} item xs={1}>
              <a href='#'>
                <Image
                  src={item.image}
                  alt='Not found'
                  width={250}
                  height={180}
                />
                <h4>{item.title}</h4>
                <p>{item.date}</p>
              </a>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default SuggestBlog;