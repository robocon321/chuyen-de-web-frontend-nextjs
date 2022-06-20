import Image from "next/image";
import React, { useState, useContext } from "react";
import styles from "./NewProduct.module.css";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper";

import { HomeContext } from "../../../contexts/providers/HomeProvider";
import Rating from "../../common/Rating";

const NewProduct = (props) => {
  const { homeState } = useContext(HomeContext);

  const [mainSwiperRef, setMainSwiperRef] = useState();
  const slideTo = (index) => {
    if (index >= homeState.newProducts.length) mainSwiperRef.slideTo(0, 0);
    else if (index <= 0) mainSwiperRef.slideTo(homeState.newProducts.length - 1, 0);
    else mainSwiperRef.slideTo(index, 0);
  };

  return (
    <div className={styles.newProduct}>
      <div className={styles["newProduct-top"]}>
        <div className={styles["newProduct-lable"]}>New Products</div>
        <div className={styles["newProduct-page-control"]}>
          <button
            onClick={() => slideTo(mainSwiperRef.activeIndex - 1)}
            className={styles["newProduct-page-btn"]}
          >
            <i className="newProduct-page-icon fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => slideTo(mainSwiperRef.activeIndex + 1)}
            className={styles["newProduct-page-btn"]}
          >
            <i className="newProduct-page-icon fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className={styles["newProduct-list"]}>
        <div className={styles["newProduct-list-row"]}>
          <Swiper
            onSwiper={setMainSwiperRef}
            grid={{
              rows: 2,
            }}
            spaceBetween={10}
            slidesPerView={2}
            modules={[Pagination, Navigation, Grid]}
            loop={true}
            breakpoints={{
              1124: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {homeState.newProducts &&
              homeState.newProducts.map((item) => (
                <SwiperSlide key={item.id} style={{height: '350px'}}>
                  <div className={styles["slide-item"]} style={{height: '100%'}}>
                    <div className={styles["newProduct-item"]}>
                      <Image
                        className={styles["newProduct-img"]}
                        src={item.post.thumbnail}
                        alt="Not found"
                        width={220}
                        height={220}
                      />
                      <div className={styles["newProduct-info"]}>
                        <div className={styles["newProduct-title"]}>
                          <Link href={`/shop/${item.post.slug}`}>
                          <a href="">{item.post.title}</a></Link>
                        </div>
                        <Rating rating={item.post.averageRating} />
                        <div className={styles["newProduct-cart"]}>
                          <a href="">
                            <i className="fas fa-shopping-cart"></i>
                          </a>
                        </div>
                        <div className={styles["newProduct-price"]}>
                          <span className={styles["newProduct-new-price"]}>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.minPrice)}
                          </span>
                          <span className={styles["newProduct-old-price"]}>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.maxPrice)}
                          </span>
                        </div>
                      </div>
                      {
                        Math.round(((item.maxPrice - item.minPrice) * 100) / item.maxPrice) != 0 &&
                        <div className={styles["newPRoduct-sale-off"]}>
                        -
                        {Math.round(
                          ((item.maxPrice - item.minPrice) * 100) /
                            item.maxPrice
                        )}
                        %
                      </div>
                      }
                      <div className={styles["newProduct-option"]}>
                        <a className={styles[("icon-eye", "icon")]}>
                          <i className="fas fa-eye"></i>
                        </a>
                        <a className={styles[("icon-heart", "icon")]}>
                          <i className="fas fa-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
