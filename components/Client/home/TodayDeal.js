import React, { useState, useContext } from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./TodayDeal.module.css";
import { HomeContext } from "../../../contexts/providers/HomeProvider";
import Rating from "../../common/Rating";
import { AuthContext } from "../../../contexts/providers/AuthProvider";

const ItemTodayDeal = (props) => {
  const { t } = useContext(AuthContext);

  const images = [
    "https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-1.webp",
    "https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-2.webp",
    "https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-3.webp",
    "https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-4.webp",
  ];
  const [imageSelected, setImageSelected] = useState(0);

  const onChangeMainImage = (index) => {
    setImageSelected(index);
  };

  return (
    <div className={styles["item-today-deal"]}>
      <div className={styles["left"]}>
        <div className={styles["main-img"]}>
          <Image
            src={props.item.post.thumbnail}
            alt="Not found"
            width={600}
            height={600}
          />
        </div>
        <Swiper
          style={{ width: "300px" }}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {images.map((itemImage, index) => (
            <SwiperSlide style={{ width: "300px" }} key={index}>
              <div
                className={[imageSelected === index && styles["active-image"]]}
              >
                <Image
                  onClick={() => onChangeMainImage(index)}
                  src={itemImage}
                  alt="Not found"
                  width={200}
                  height={200}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles["right"]}>
        <p className={styles["title"]}>{props.item.post.title}</p>
        <hr />
        <p className={styles["description"]}>{props.item.post.description}</p>
        <hr />
        <div className={styles["progress"]}>
          <div></div>
          <div style={{ width: `${Math.round((props.item.totalSales * 100) / (props.item.stockQuantity + props.item.totalSales))}%` }}></div>
        </div>
        <div className={styles["status"]}>
          <p>{t('sold')}: {props.item.totalSales ? props.item.totalSales : 0}</p>
          <p>{t('available')}: {props.item.stockQuantity}</p>
        </div>
        {
          Math.round(((props.item.maxPrice - props.item.minPrice) * 100) / props.item.maxPrice) != 0 &&
          <div className={styles["discount"]}>
            -{Math.round(((props.item.maxPrice - props.item.minPrice) * 100) / props.item.maxPrice)}
            %
        </div>
        }
        <div className={styles["star-cart"]}>
          <Rating rating={props.item.post.averageRating} />

          <div className={styles.cart}>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
        </div>
        <div className={styles["price"]}>
          <p>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.item.maxPrice)}
          </p>
          <div>
          {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(props.item.minPrice)}
          </div>
        </div>
      </div>
    </div>
  );
};

const TodayDeal = (props) => {
  const { t } = useContext(AuthContext);
  const { homeState } = useContext(HomeContext);
  const [mainSwiperRef, setMainSwiperRef] = useState();

  const slideTo = (index) => {
    if (index >= homeState.todayProducts.length) mainSwiperRef.slideTo(0, 0);
    else if (index <= 0) mainSwiperRef.slideTo(homeState.todayProducts.length - 1, 0);
    else mainSwiperRef.slideTo(index, 0);
  };

  return (
    <div className={styles["today-deal"]}>
      <div className={styles["title-today-deal"]}>
        <h1>{t('today_deal')}</h1>
        <div>
          <button onClick={() => slideTo(mainSwiperRef.activeIndex - 1)}>
            <span>
              <i className="fa-solid fa-angle-left"></i>
            </span>
          </button>
          <button onClick={() => slideTo(mainSwiperRef.activeIndex + 1)}>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </button>
        </div>
      </div>
      <div className={styles["list-today-deal"]}>
        <Swiper
          onSwiper={setMainSwiperRef}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation]}
        >
          {homeState.todayProducts &&
            homeState.todayProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ItemTodayDeal item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TodayDeal;
