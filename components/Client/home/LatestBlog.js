import React, { useState, useContext } from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Moment from 'react-moment';

import styles from "./LatestBlog.module.css";
import { HomeContext } from "../../../contexts/providers/HomeProvider";

const LatestBlog = (props) => {
  const { homeState } = useContext(HomeContext);
  const [swiperRef, setSwiperRef] = useState();

  const slideTo = (index) => {
    if (index >= homeState.lastestBlogs.length) swiperRef.slideTo(0, 0);
    else if (index <= 0) swiperRef.slideTo(homeState.lastestBlogs.length - 1, 0);
    else swiperRef.slideTo(index, 0);
  };

  return (
    <div className={styles["latest-blog"]}>
      <div className={styles["title-latest-blog"]}>
        <h1>Latest Blogs</h1>
        <div>
          <button onClick={() => slideTo(swiperRef.activeIndex - 1)}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button onClick={() => slideTo(swiperRef.activeIndex + 1)}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className={styles["list-latest-blog"]}>
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
            },
          }}
        >
          {homeState.lastestBlogs.map((item) =>
          {
            const modTime = new Date(`${item.modifiedTime}`);
            return (
            <SwiperSlide key={item.id}>
              <div className={styles["item-latest-blog"]}>
                <div className={styles["img"]}>
                  <Image
                    src={item.thumbnail}
                    alt="Not found"
                    width={500}
                    height={250}
                  />
                </div>
                <h3>{item.title}</h3>
                <p>
                  by <b>{item.modifiedUser ? item.modifiedUser.fullname : 'Invalid'}</b> 
                  <span>
                    <Moment fromNow>{modTime}</Moment>                    
                  </span>
                </p>
              </div>
            </SwiperSlide>
          )            
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestBlog;
