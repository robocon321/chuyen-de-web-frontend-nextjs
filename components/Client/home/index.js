import { Container } from '@mui/material';
import MainBanner from './MainBanner';
import React from 'react';
import SubBanner from './SubBanner';
import Feature from './Feature';
import TodayDeal from './TodayDeal';
import LatestBlog from './LatestBlog';
import SponorSubscribe from './SponorSubscribe';
import NewProduct from './NewProduct';
import Discover from './Discover';
import SellerAndRelated from './SellerAndRelated';

const Home = (props) => {
  return (
    <main>
      <Container>
        <MainBanner />
        <SubBanner />
        <hr />
        <Feature />
        <hr />
        <TodayDeal />
        <LatestBlog />
        <hr />
        <SponorSubscribe />
        {/* <Banner /> */}
        <NewProduct/>
        <Discover/>
        <SellerAndRelated/>
      </Container>
    </main>
  )
}

export default Home;