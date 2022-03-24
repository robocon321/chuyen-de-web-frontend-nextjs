import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './Feature.module.css';

const features = [
  {
    id: 0,
    name: 'Free Shipping',
    content: 'Free Shipping on order',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/free_shipping.webp'
  },
  {
    id: 1,
    name: 'Support 24/7',
    content: 'Contact us 24 hrs a day',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/support247.webp'
  },
  {
    id: 2,
    name: '100% Money Back',
    content: 'You\'ve 30 days to Return',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/moneyback.webp'
  },
  {
    id: 3,
    name: 'Payment Secure',
    content: '100% secure payment',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/payment_secure.webp'
  }
]

const ItemFeature = props => {
  return <div className={styles['item-feature']}>
    <div className={styles['img-item-feature']}>
    <Image
          src={props.item.image}
          alt="Not found"
          width={60}
          height={40}
        />
    </div>
    <div className={styles['content-item-feature']}>
      <h4>{props.item.name}</h4>
      <p>{props.item.content}</p>
    </div> 
    </div>
}

const Feature = props => {
  return (
    <div className={styles.feature}>
      <Grid container spacing={2} columns={12}>
        {
          features.map(item => 
            <Grid key={item.id} item xs={6} md={3}>
              <ItemFeature item={item} />
            </Grid>
          )
        }
      </Grid>
    </div>
  )
}

export default Feature;