import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from 'next/image';

import styles from './SponorSubscribe.module.css';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const sponors = [
  {
    id: 0,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/brands/brand2.webp'
  },
  {
    id: 1,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/brands/brand3.webp'
  },
  {
    id: 2,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/brands/brand4.webp'
  },
  {
    id: 3,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/brands/brand5.webp'
  },
  {
    id: 4,
    image: 'https://template.hasthemes.com/alula/alula/assets/img/brands/brand1.webp'
  }
]

const SponorSubscribe = props => {
  const { t } = useContext(AuthContext);

  return (
    <div className={styles['sponor-subscribe']}>
      <div className={styles['sponor']}>
        <Swiper
          breakpoints={{
            220: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          {
            sponors.map(item => (
              <SwiperSlide key={item.id}>
                <Image 
                  src={item.image}
                  alt='Not found'
                  width={120}
                  height={40}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <hr />
      <div className={styles['subscribe']}>
          <div className={styles['left-subscribe']}>
            <h3>{t('subscribe_newsletter')}</h3>
            <p>{t('share_your_email')}</p>
          </div>
          <div className={styles['right-subscribe']}>
            <input placeholder={t('enter_your_email')} />
            <button>{t('subscribe')}</button>
          </div>
      </div>
    </div>
  )
}

export default SponorSubscribe;