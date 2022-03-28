import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import styles from './Sidebar.module.css';

const categories = [
  {
    id: 0,
    title: 'Bonsai',
    count: 3,
    parent: -1,
  },
  {
    id: 1,
    title: 'House Plants',
    count: 6,
    parent: -1,
  },
  {
    id: 2,
    title: 'Indoor Living',
    count: 9,
    parent: -1,
  },
  {
    id: 3,
    title: 'Outdoor Living',
    count: 15,
    parent: -1,
  },
  {
    id: 4,
    title: 'Perennial',
    count: 5,
    parent: -1,
  },
  {
    id: 5,
    title: 'Plant For Gift',
    count: 5,
    parent: -1
  },
  {
    id: 6,
    title: 'Garden Tools',
    count: 5,
    parent: -1
  },
  {
    id: 7,
    title: 'Saws',
    count: 0,
    parent: 6
  },
  {
    id: 8,
    title: 'Concrete Tools',
    count: 6,
    parent: 6
  },
  {
    id: 9,
    title: 'Drills',
    count: 2,
    parent: 6
  },
  {
    id: 10,
    title: 'Sandders',
    count: 1,
    parent: 6
  },
  {
    id: 11,
    title: 'Tools',
    count: 15,
    parent: -1
  }
];

const posts = [
  {
    id: 0,
    title: 'The biggest lie in plant',
    time: 'APRIL 24, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-thumb-1-64x64.webp'
  },
  {
    id: 1,
    title: 'How to improve plant quality',
    time: 'APRIL 24, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-thumb-2-64x64.webp'
  },
  {
    id: 2,
    title: '101 ideas for plant',
    time: 'APRIL 24, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-thumb-3-64x64.webp'
  },
  {
    id: 3,
    title: 'No more mistakes',
    time: 'APRIL 24, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/blog-thumb-1-64x64.webp'
  }
]

const comments = [
  {
    id: 0,
    title: 'Admin Says',
    content: 'The biggest lie in plant',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  },
  {
    id: 1,
    title: 'Admin Says',
    content: 'How to improve plant quatity',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  },
  {
    id: 2,
    title: 'Admin Says',
    content: '101 ideas for plant',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  },
  {
    id: 3,
    title: 'Admin Says',
    content: 'No more mistakes with plant',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  }
]

const findChildrenElement = (id) => {
  const children = categories.filter(item => item.parent === id);
  return children.map(item => (
    <li key={item.id}>
      <a href='#'>{item.title} ({item.count})</a>
      {
        categories.filter(i => i.id === item.id).length > 0 && (
        <ul key={item.id} className={styles['children-categories']}>
          {findChildrenElement(item.id)}
        </ul>
      )}
    </li>
  ))
}

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <label>SEARCH</label>
        <div className={styles.searchbox}>
          <input type='text' placeholder='Search'/>
          <span><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
      </div>
      <div className={styles.category}>
        <h3>CATEGORIES</h3>
        <ul className={styles['parent-categories']}>
        {
          categories.map(item => (
          <li key={item.id}>
            <a href='#'>{item.title} ({item.count})</a>
            {
              categories.filter(i => i.id === item.id).length > 0 && (
              <ul key={item.id} className={styles['children-categories']}>
                {findChildrenElement(item.id)}
              </ul>
            )}
          </li>
        ))
        }
        </ul>
      </div>
      <div className={styles.posts}>
        <h3>RECENT POSTS</h3>
        {
          posts.map((item, index) => (
            <a href='#' key={item.id} className={styles.post}>
              <Grid container spacing={2} columns={3}>
                <Grid item xs={1}>                  
                  <Image
                    src={item.image}
                    alt="Not found"
                    width={100}
                    height={100}                  
                  />
                </Grid>
                <Grid item xs={2}>
                  <p className={styles.title}><b>{item.title}</b></p>
                  <div className={styles.time}>{item.time}</div>
                </Grid>
              </Grid>
              {
                index !== posts.length - 1  && <hr />
              }
            </a>
          ))
        }
      </div>
      <div className={styles.comments}>
        <h3>RECENT COMMENTS</h3>
        {
          comments.map((item, index) => (
            <a href='#' key={item.id} className={styles.comment}>
              <Grid container spacing={2} columns={3}>
                <Grid item xs={1}>                  
                  <Image
                    src={item.image}
                    alt="Not found"
                    width={100}
                    height={100}                  
                  />
                </Grid>
                <Grid item xs={2}>
                  <p className={styles.title}><b>{item.title}</b></p>
                  <div className={styles.content}>{item.content}</div>
                </Grid>
              </Grid>
              {
                index !== posts.length - 1  && <hr />
              }
            </a>
          ))
        }
      </div>
      <div className={styles.tags}>
        <h3>POPULAR TAGS</h3>
        <a href='#'>New</a>
        <a href='#'>Bags</a>
        <a href='#'>News</a>
        <a href='#'>Kids</a>
        <a href='#'>Fashion</a>
        <a href='#'>Accessories</a>
      </div>
    </div>
  )
}

export default Sidebar;