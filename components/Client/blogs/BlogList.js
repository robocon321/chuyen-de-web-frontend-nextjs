import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './BlogList.module.css';

const blogs = [
  {
    id: 0,
    title: '3 things everyone knows about plant',
    author: 'admin',
    date: '24 August, 2019',
    content: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
  {
    id: 1,
    title: '3 things everyone knows about plant',
    author: 'admin',
    date: '24 August, 2019',
    content: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
  {
    id: 2,
    title: '3 things everyone knows about plant',
    author: 'admin',
    date: '24 August, 2019',
    content: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
  {
    id: 3,
    title: '3 things everyone knows about plant',
    author: 'admin',
    date: '24 August, 2019',
    content: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
  {
    id: 4,
    title: '3 things everyone knows about plant',
    author: 'admin',
    date: '24 August, 2019',
    content: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
  {
    id: 5,
    title: '3 things everyone knows about plant',
    author: 'admin',
    date: '24 August, 2019',
    content: 'Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1-510x330.webp'
  },
]

const ItemBlog = ({item}) => {
  return (
    <Grid container spacing={5} columns={2}>
      <Grid item xs={2} sm={1}>
        <Image 
          src={item.image}
          alt='Not found'
          width={600}
          height={350}
        />
      </Grid>
      <Grid item xs={2} sm={1}>
        <h3>{item.title}</h3>
        <div className={styles.info}>
          <span><i className="fa-solid fa-circle-user"></i></span>
          <span>{item.author}</span>
          <span> | </span>
          <span><i className="fa-solid fa-calendar-days"></i></span>
          <span>{item.date}</span>
        </div>
        <hr />
        <p>{item.content}</p>
        <button>READ MORE</button>
      </Grid>
    </Grid>
  )
}

const BlogList = (props) => {
  return (
    <div className={styles.blogs}>
      {
        blogs.map(item => 
          <div key={item.id} className={styles.blog}>
            <ItemBlog item={item} />
          </div>
        )
      }
    </div>
  )
}

export default BlogList;