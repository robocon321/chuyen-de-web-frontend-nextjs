import React, {useContext} from 'react';
import Image from 'next/image';
import Moment from 'react-moment';

import styles from './DetailBlog.module.css';
import SuggestBlog from './SuggestBlog';
import { BlogDetailContext } from '../../../../contexts/providers/BlogDetailProvider';

const DetailBlog = (props) => {
  const {blogState, router} = useContext(BlogDetailContext);
  
  if(blogState.detailBlog) {
    return (    
      <div className={styles['detail-blog']}>
        <h1>{blogState.detailBlog.title}</h1>
        <div className={styles.info}>
          <span><i className="fa-solid fa-circle-user"></i></span>
          <span>{blogState.detailBlog.modifiedUser.fullname}</span>
          <span> | </span>
          <span><i className="fa-solid fa-calendar-days"></i></span>
          <span><Moment date={blogState.detailBlog.modifiedTime} format="DD/MM/YYYY"  /></span>
        </div>
        <div>
          <Image 
            src= {blogState.detailBlog.thumbnail}
            alt='Not found'
            width={800}
            height={500}
          />
        </div>
        <div>{blogState.detailBlog.content}</div>
        <hr />
        <div className={styles.tags}>
          <span>Tags: </span><span><b>Image, plant</b></span>
        </div>
        <hr />
        <div className={styles.share}>
          <h3>SHARE THIS POST</h3>
          <div className={styles.socials}>
            <span><i className="fa-brands fa-twitter"></i></span>
            <span><i className="fa-brands fa-facebook-f"></i></span>
            <span><i className="fa-brands fa-google-plus-g"></i></span>
            <span><i className="fa-brands fa-pinterest"></i></span>
          </div>
        </div>
        <SuggestBlog />
      </div>
    )  
  } else {
    return (
      <div></div>
    )
  }
}

export default DetailBlog