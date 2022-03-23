import React, {useState} from 'react';
import Image from 'next/image';
import {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import styles from './TodayDeal.module.css';

const products = [
  {
    id: 0,
    title: 'Cillum dolore garden tools',
    description: 'Ullamco deserunt ipsum sit mollit labore proident tempor eu sunt aliqua officia fugiat duis.',
    sold: 1400,
    available: 230,
    real_price: 120000,
    sold_price: 100000,
    images: ['https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-1.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-2.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-3.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-4.webp']
  },
  {
    id: 1,
    title: 'Cillum dolore garden tools',
    description: 'Ullamco deserunt ipsum sit mollit labore proident tempor eu sunt aliqua officia fugiat duis.',
    sold: 1400,
    available: 230,
    real_price: 120000,
    sold_price: 100000,
    images: ['https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-2.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-1.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-3.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-4.webp']
  },
  {
    id: 2,
    title: 'Cillum dolore garden tools',
    description: 'Ullamco deserunt ipsum sit mollit labore proident tempor eu sunt aliqua officia fugiat duis.',
    sold: 1400,
    available: 230,
    real_price: 120000,
    sold_price: 100000,
    images: ['https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-3.webp','https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-1.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-2.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-4.webp']
  },
  {
    id: 3,
    title: 'Cillum dolore garden tools',
    description: 'Ullamco deserunt ipsum sit mollit labore proident tempor eu sunt aliqua officia fugiat duis.',
    sold: 1400,
    available: 230,
    real_price: 120000,
    sold_price: 100000,
    images: ['https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-4.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-big1-1.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-2.webp', 'https://template.hasthemes.com/alula/alula/assets/img/products/inner-small1-3.webp']
  }

]

const ItemTodayDeal = props => {
  const [imageSelected, setImageSelected] = useState(0);

  const onChangeMainImage = (index) => {
    setImageSelected(index);
  }

  return (
    <div className={styles['item-today-deal']}>
      <div className={styles['left']}>
        <div className={styles['main-img']}>
              <Image
                src={props.item.images[imageSelected]}
                alt='Not found'
                width={600}
                height={600}
              />
        </div>
        <Swiper
          style={{width: '300px'}}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {
            props.item.images.map((itemImage, index) => (
                <SwiperSlide style={{width: '300px'}} key={index}>
                  <div className={imageSelected === index && styles['active-image']}>
                    <Image
                      onClick={() => onChangeMainImage(index)}
                      src={itemImage}
                      alt='Not found'
                      width={200}
                      height={200}
                    />
                  </div>
                </SwiperSlide>
              ))  
          }          
        </Swiper>

      </div>
      <div className={styles['right']}>
        <p className={styles['title']}>{props.item.title}</p>
        <hr />
        <p className={styles['description']}>{props.item.description}</p>
        <hr />
        <div className={styles['progress']}>
          <div></div>
          <div style={{width: `${props.item.sold * 100 / (props.item.sold + props.item.available)}%`}}></div>
        </div>
        <div className={styles['status']}>
          <p>Sold: {props.item.sold}</p>
          <p>Available: {props.item.available}</p>
        </div>
        <div className={styles['discount']}>- {Math.round((props.item.real_price - props.item.sold_price) * 100 / props.item.real_price)}%</div>
        <div className={styles['star-cart']}>
          <div className={styles.star}>
            <span className={styles.active}><i className="fa-solid fa-star"></i></span>
            <span className={styles.active}><i className="fa-solid fa-star"></i></span>
            <span className={styles.active}><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
          </div>
          <div className={styles.cart}>
            <span><i className="fa-solid fa-cart-shopping"></i></span>
          </div>
        </div>
        <div className={styles['price']}>
          <p>{props.item.real_price}$</p>
          <div>{props.item.sold_price}$</div>
        </div>
      </div>
  </div>

  )
}

const TodayDeal = props => {
  const [mainSwiperRef, setMainSwiperRef] = useState();

  const slideTo = (index) => {
    if(index >= products.length) mainSwiperRef.slideTo(0, 0);
    else if(index <= 0) mainSwiperRef.slideTo(products.length - 1, 0);
    else mainSwiperRef.slideTo(index, 0);
  }

  return (
    <div className={styles['today-deal']}>
    <div className={styles['title-today-deal']}>
      <h1>{`Today's Deals`}</h1>
      <div>
        <button onClick={() => slideTo(mainSwiperRef.activeIndex - 1)}><i className="fa-solid fa-angle-left"></i></button>
        <button onClick={() => slideTo(mainSwiperRef.activeIndex + 1)}><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
      <div className={styles['list-today-deal']}>
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
          {products.map(item => (
            <SwiperSlide key={item.id}>
              <ItemTodayDeal item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  </div>
  )
} 

export default TodayDeal;