import { Container } from '@mui/material';
import MainBanner from './MainBanner';
import React from 'react';
import SubBanner from './SubBanner';
import Feature from './Feature';
import TodayDeal from './TodayDeal';
import LatestBlog from './LatestBlog';
import SponorSubscribe from './SponorSubscribe';

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
      </Container>
    </main>
  )
}

export default Home;