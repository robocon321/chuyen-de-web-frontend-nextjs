import React, { useContext, useState } from "react";
import styles from "./MainBanner.module.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../../../contexts/providers/AuthProvider";

const MainBanner = (props) => {
  const { t } = useContext(AuthContext);

  const banners = [
    {
      id: 0,
      title: t('big_sale_banner'),
      text1: t('special_offer'),
      text2: t('save_60'),
      link: "#",
      image:
        "https://template.hasthemes.com/alula/alula/assets/img/sliders/slider4.webp",
    },
    {
      id: 1,
      title: t('limit_time_banner'),
      text1: t('garden_tool'),
      text2: t('&_equiqment'),
      link: "#",
      image:
        "https://template.hasthemes.com/alula/alula/assets/img/sliders/slider5.webp",
    },
    {
      id: 2,
      title: t('toro_commer_banner'),
      text1: t('new_law'),
      text2: t('parts'),
      link: "#",
      image:
        "https://template.hasthemes.com/alula/alula/assets/img/sliders/slider6.webp",
    },
  ];
  
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
                <button>{t('shop_now')}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainBanner;
