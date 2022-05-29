import React, { useState } from "react";
import styles from "./MainBanner.module.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const banners = [
  {
    id: 0,
    title: "Big Sale Garden Tools",
    text1: "Special Offer",
    text2: "Save 60%",
    link: "#",
    image:
      "https://template.hasthemes.com/alula/alula/assets/img/sliders/slider4.webp",
  },
  {
    id: 1,
    title: "Limited Time Only!",
    text1: "Garden Tools",
    text2: "& Equiqment",
    link: "#",
    image:
      "https://template.hasthemes.com/alula/alula/assets/img/sliders/slider5.webp",
  },
  {
    id: 2,
    title: "Toro Commercial Mower",
    text1: "New Law Mower",
    text2: "Parts",
    link: "#",
    image:
      "https://template.hasthemes.com/alula/alula/assets/img/sliders/slider6.webp",
  },
];

const MainBanner = (props) => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const onChangeBanner = (index) => {
    setBannerIndex(index);
  };

  return (
    <div className={styles.banner}>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles["mySwiper"]}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div              
              className={styles["item-banner"]}
              style={{
                backgroundImage: `url('${item.image}')`,
              }}
            >
              <div className={styles.content}>
                <p>{item.title}</p>
                <h1>{item.text1}</h1>
                <h2>{item.text2}</h2>
                <button>Shopping Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainBanner;
