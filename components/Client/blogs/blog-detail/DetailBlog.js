import React from 'react';
import Image from 'next/image';

import styles from './DetailBlog.module.css';
import SuggestBlog from './SuggestBlog';

const DetailBlog = (props) => {
  return (
    <div className={styles['detail-blog']}>
      <h1>The biggest lie in plant</h1>
      <div className={styles.info}>
        <span><i className="fa-solid fa-circle-user"></i></span>
        <span>admin</span>
        <span> | </span>
        <span><i className="fa-solid fa-calendar-days"></i></span>
        <span>24 August, 2019</span>
      </div>
      <div>
        <Image 
          src='https://template.hasthemes.com/alula/alula/assets/img/blog/blog-post-1.webp'
          alt='Not found'
          width={800}
          height={500}
        />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit quisquam, ut, numquam voluptatem quas cum! repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit quisquam, ut, numquam voluptatem quas cum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit quisquam, ut, numquam voluptatem quas cum! repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit quisquam, ut, numquam voluptatem quas cum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit quisquam, ut, numquam voluptatem quas cum! repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit quisquam, ut, numquam voluptatem quas cum!</p>
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
}

export default DetailBlog