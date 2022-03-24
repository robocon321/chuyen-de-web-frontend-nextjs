import React, {useState} from 'react';
import styles from './MainBanner.module.css';

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

const MainBanner = props => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const onChangeBanner = (index) => {
    setBannerIndex(index);
  }

  return (
    <div className={styles.banner}>
      <div key={banners[bannerIndex].id} className={styles['item-banner']} style={
          {
            backgroundImage: `url('${banners[bannerIndex].image}')`,
          }
        }>
          <div className={styles.content}>
            <p>{banners[bannerIndex].title}</p>
            <h1>{banners[bannerIndex].text1}</h1>
            <h2>{banners[bannerIndex].text2}</h2>
            <button>Shopping Now</button>
          </div>
        </div>
      )
      <div className={styles['switch-banner']}>
        {
          banners.map(item => {
            return <span style={{backgroundColor: bannerIndex === item.id ? 'var(--primary_color)' : 'gray'}} onClick={() => onChangeBanner(item.id)} key={item.id}></span>
          })
        }
      </div>
    </div>
  )
}

export default MainBanner;