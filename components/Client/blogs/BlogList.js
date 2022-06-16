import { Grid } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';
import Moment from 'react-moment';

import styles from './BlogList.module.css';
import { BlogContext } from '../../../contexts/providers/BlogProvider';


const BlogList = (props) => {
  const { blogState } = useContext(BlogContext);

  return (
    <div className={styles.blogs}>
      {
        blogState.lastestBlogs &&
        blogState.lastestBlogs.content.map(item => 
          <div key={item.id} className={styles.blog}>
            <Grid container spacing={5} columns={2}>
              <Grid item xs={2} sm={1}>
                <Image 
                  src={item.thumbnail}
                  alt='Not found'
                  width={600}
                  height={350}
                />
              </Grid>
              <Grid item xs={2} sm={1}>
                <h3>{item.title}</h3>
                <div className={styles.info}>
                  <span><i className="fa-solid fa-circle-user"></i></span>
                  <span>{item.modifiedUser.fullname}</span>
                  <span> | </span>
                  <span><i className="fa-solid fa-calendar-days"></i></span>
                  <span>
                    <Moment date={item.modifiedTime} format="DD/MM/YYYY"  />                
                  </span>
                </div>
                <hr />
                <p>{item.content}</p>
                <a href={`/blogs/${item.slug}`}>
                  <button>READ MORE</button>
                </a>
              </Grid>
            </Grid>
          </div>
        )
      }
    </div>
  )
}

export default BlogList;