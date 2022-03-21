import React from 'react';
import styles from './Banner.module.css';

const banners = [
  {
    id: 0,
    title: 'Big Sale Garden Tools',
    text1: 'Special Offer',
    text2: 'Save 60%',
    link: '#',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/sliders/slider4.webp',
  },
  {
    id: 1,
    title: 'Limited Time Only!',
    text1: 'Garden Tools',
    text2: '& Equiqment',
    link: '#',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/sliders/slider5.webp',
  },
  {
    id: 2,
    title: 'Toro Commercial Mower',
    text1: 'New Law Mower',
    text2: 'Parts',
    link: '#',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/sliders/slider6.webp'
  }
]
const Banner = props => {
  return (
    <div className={styles.banner}>
      {
        banners.map(item => {
          return (
            <div key={item.id} className={styles['item-banner']} style={
                {
                  backgroundImage: `url('${item.image}')`,
                  left: `${item.id * 100}%`
                }
              }>
                <div className={styles.content}>
                  <p>{item.title}</p>
                  <h1>{item.text1}</h1>
                  <h2>{item.text2}</h2>
                  <button>Shopping Now</button>
                </div>
              </div>
          )
        })
      }
    </div>
  )
}

export default Banner;