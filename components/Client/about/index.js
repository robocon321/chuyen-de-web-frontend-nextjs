import { Container, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image';

import Breadcrumb from '../../common/Breadcrumb';
import styles from './index.module.css';

const features = [
  {
    id: 0,
    title: 'OUR VISSION',
    content: 'ALULA provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth, the mer of human tas assumenda est, omnis dolor repellend',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/banners/banner7.webp'
  },
  {
    id: 1,
    title: 'OUR MISSION',
    content: 'ALULA provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth, the mer of human tas assumenda est, omnis dolor repellend',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/banners/banner8.webp'
  },
  {
    id: 2,
    title: 'OUR GOAL',
    content: 'ALULA provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth, the mer of human tas assumenda est, omnis dolor repellend',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/banners/banner9.webp'
  }
]

const Index = props => {
  return (
    <>
      <Container>
        <Breadcrumb links={['Home', 'About']}/>
      </Container>
      <hr />
      <Container>
        <div className={styles.about}>
          <div className={styles.group}>
            <Grid container spacing={10} columns={12}>
              <Grid item md={6} sm={12}>
                <Image
                  src='https://template.hasthemes.com/alula/alula/assets/img/banners/banner-big2.webp'
                  alt='Not found'
                  width={600}
                  height={300}
                  />
              </Grid>
              <Grid item md={6} sm={12}>
                <h1 className={styles['mb-2']}>WELCOME TO <span>ALULA.</span></h1>
                <p className={styles['mb-4']}>ALULA provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system, and expound the actual teachings of the eat explorer of the truth, the mer of human.</p>
                <h3 className={styles['mb-2']}>WIN BEST ONLINE SHOP AT 2019</h3>
                <p>ALULA provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system, and expound the actual teachings of the eat explorer of the truth, the mer of human.</p>
              </Grid>
            </Grid>
          </div>
          <div className={styles.group}>
            <Grid container spacing={5} columns={12} >
              {
                features.map((item) => (
                  <Grid key={item.id} item xs={12} sm={6} md={4}>
                    <Image 
                      src={item.image}
                      alt='Not found'
                      width={600}
                      height={300}
                    />
                    <h2 className={styles['mt-3'] + ' ' + styles['mb-2']}>{item.title}</h2>
                    <p>{item.content}</p>
                  </Grid>
                ))
              }
            </Grid>
          </div>
          <div className={styles.group}>
              <Grid container spacing={5} columns={3}>
                <Grid item md={2} xs={3}>
                  <h2 className={styles['mb-2']}>YOU CAN CHOOSE US BECAUSE WE ALWAYS PROVIDE IMPORTANCE...</h2>
                  <p>ALULA provide how all this mistaken idea of denouncing pleasure and sing pain was born will give you a complete account of the system, and expound the actual</p>
                </Grid>
              </Grid>
          </div>
          <div className={styles.group}>
            <Grid container spacing={5} columns={4}>
              <Grid item md={1} sm={2} xs={4}>
                <div>
                  <h3 className={styles['mb-1']}>FAST DELIVERY</h3>
                  <p className={styles['mb-3']}>ALULA provide how all this mistaken dea of denouncing pleasure and sing</p>
                </div>
                <div>
                  <h3 className={styles['mb-1']}>SECURE PAYMENT</h3>
                  <p className={styles['mb-3']}>ALULA provide how all this mistaken dea of denouncing pleasure and sing</p>
                </div>
                <div>
                  <h3 className={styles['mb-1']}>EASY ORDER TRACKING</h3>
                  <p className={styles['mb-3']}>ALULA provide how all this mistaken dea of denouncing pleasure and sing</p>
                </div>
                <div>
                  <h3 className={styles['mb-1']}>24/7 SUPPORT</h3>
                  <p className={styles['mb-3']}>ALULA provide how all this mistaken dea of denouncing pleasure and sing</p>
                </div>
              </Grid>
              <Grid item md={1} sm={2} xs={4}>
                <div>
                  <h3 className={styles['mb-1']}>QUALITY PRODUCT</h3>
                  <p className={styles['mb-3']}>ALULA provide how all this mistaken dea of denouncing pleasure and sing</p>
                </div>
                <div>
                  <h3 className={styles['mb-1']}>MONEY BACK GUARNTEE</h3>
                  <p className={styles['mb-3']}>ALULA provide how all this mistaken dea of denouncing pleasure and sing</p>
                </div>
                <div>
                  <h3 className={styles['mb-1']}>FREE RETURN</h3>
                  <p className={styles['mb-3']}>ALULA provide how all this mistaken dea of denouncing pleasure and sing</p>
                </div>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Image 
                  src='https://template.hasthemes.com/alula/alula/assets/img/banners/slider-banner1.webp'
                  alt='Not found'
                  width={400}
                  height={800}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      <hr />
    </>
  )
}

export default Index;