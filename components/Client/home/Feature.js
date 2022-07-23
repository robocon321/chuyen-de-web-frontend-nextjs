import { Grid } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/providers/AuthProvider';
import styles from './Feature.module.css';

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
  const { t } = useContext(AuthContext);

  const features = [
    {
      id: 0,
      name: t('free_shipping'),
      content: t('free_shipping_on_order'),
      image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/free_shipping.webp'
    },
    {
      id: 1,
      name: t('support_24/7'),
      content: t('contact_us_24'),
      image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/support247.webp'
    },
    {
      id: 2,
      name: t('100_money_back'),
      content: t('you_30_day_return'),
      image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/moneyback.webp'
    },
    {
      id: 3,
      name: t('payment_secure'),
      content: t('100_payment_secure'),
      image: 'https://template.hasthemes.com/alula/alula/assets/img/icons/payment_secure.webp'
    }
  ]

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