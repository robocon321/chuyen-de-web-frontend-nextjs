import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './SubBanner.module.css';

const banners = [
  {
    id: 0,
    category: 'Garden',
    product: 'Handtools',
    price: '$37.89',
    link: '#',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/banners/banner3.webp'
  },
  {
    id: 1,
    category: 'Karcher',
    product: 'Pressure',
    price: '$35.89',
    link: '#',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/banners/banner4.webp'
  },
  {
    id: 2,
    category: 'Fiskars',
    product: 'PowerGrear',
    price: '$35.58',
    link: '#',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/banners/banner5.webp'
  }
];

const ItemSubBanner = props => {
  return (
    <div className={styles['item-sub-banner']}>
      <div className={styles['content-item-sub-banner']}>
        <p>{props.item.category}</p>
        <h2>{props.item.product}</h2>
        <p>from</p>
        <h3>{props.item.price}</h3>
      </div>
      <div className={styles['img-item-sub-banner']}>
        <Image
          src={props.item.image}
          alt="Not found"
          layout='fill'
          objectFit='100% 100%'
        />
      </div>
    </div>
  )
}

const SubBanner = props => (
  <div className={styles['sub-banner']}>
  <Grid container spacing={2} columns={12}>
    {banners.map(item => {
      return (
      <Grid key={item.id} item md={4} xs={12}>
        <ItemSubBanner item={item} />  
      </Grid>
      )})}
  </Grid>
  </div>
)

export default SubBanner;