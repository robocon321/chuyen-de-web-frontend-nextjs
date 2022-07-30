import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Moment from "react-moment";

import styles from './SuggestBlog.module.css';
import { BlogDetailContext } from '../../../../contexts/providers/BlogDetailProvider';
import Link from 'next/link';

const SuggestBlog = () => {
  const { blogState } = useContext(BlogDetailContext);
  if(blogState.recommendPost) {
    return (
      <div className={styles['suggest-blog']}>
        <h3>SUGGEST POSTS</h3>
        <Grid container spacing={5} columns={3}>
          {
            blogState.recommendPost.map(item => (
              <Grid key={item.id} item xs={1}>
                <Link href={'/blogs/'+item.slug}>
                  <a>
                    <Image
                      src={item.thumbnail}
                      alt='Not found'
                      width={250}
                      height={180}
                    />
                    <h4>{item.title}</h4>
                    <p>            
                      <Moment
                        date={item.modifiedTime}
                        format="DD/MM/YYYY"
                      />
                    </p>
                  </a>
                </Link>
              </Grid>
            ))
          }
        </Grid>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }


}

export default SuggestBlog;