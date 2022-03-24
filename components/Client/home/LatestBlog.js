import React, {useState} from 'react';
import Image from 'next/image';
import {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import styles from './LatestBlog.module.css'

const blogs = [
  {
    id: 0,
    title: 'Brome liad Mount Crae: How to Water and Care for Mounted Bromeliads',
    author: 'HasTech',
    date: '30 Oct, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/slider4.webp'
  },
  {
    id: 1,
    title: 'Brome liad Mount Crae: How to Water and Care for Mounted Bromeliads',
    author: 'HasTech',
    date: '30 Oct, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/slider5.webp'
  },
  {
    id: 2,
    title: 'Brome liad Mount Crae: How to Water and Care for Mounted Bromeliads',
    author: 'HasTech',
    date: '30 Oct, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/slider6.webp'
  },
  {
    id: 3,
    title: 'Brome liad Mount Crae: How to Water and Care for Mounted Bromeliads',
    author: 'HasTech',
    date: '30 Oct, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/slider7.webp'
  },
  {
    id: 4,
    title: 'Brome liad Mount Crae: How to Water and Care for Mounted Bromeliads',
    author: 'HasTech',
    date: '30 Oct, 2019',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/slider8.webp'
  },

]

const ItemLatestBlog = props => {
  return (
    <div className={styles['item-latest-blog']}>
      <div className={styles['img']}>
        <Image 
          src={props.item.image}
          alt='Not found'
          width={500}
          height={250}
        />
      </div>
      <h3>{props.item.title}</h3>
      <p>by <b>{props.item.author}</b> <span>{props.item.date}</span></p>
    </div>
  )
}

const LatestBlog = props => {
  const [swiperRef, setSwiperRef] = useState();

  const slideTo = (index) => {
    if(index >= blogs.length) swiperRef.slideTo(0, 0);
    else if(index <= 0) swiperRef.slideTo(blogs.length - 1, 0);
    else swiperRef.slideTo(index, 0);
  }

  return (
  <div className={styles['latest-blog']}>
    <div className={styles['title-latest-blog']}>
      <h1>{`Latest Blogs`}</h1>
      <div>
        <button onClick={() => slideTo(swiperRef.activeIndex - 1)}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => slideTo(swiperRef.activeIndex + 1)}><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
    <div className={styles['list-latest-blog']}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        loop
        breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
          }}
      >
        {blogs.map(item => (
          <SwiperSlide key={item.id}>
            <ItemLatestBlog item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>

  )
}

export default LatestBlog;