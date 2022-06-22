import { Container } from '@mui/material';
import React, { useContext } from 'react';

import { HomeContext } from '../../../contexts/providers/HomeProvider';
import Loading from "../../common/Loading";

import MainBanner from './MainBanner';
import SubBanner from './SubBanner';
import Feature from './Feature';
import TodayDeal from './TodayDeal';
import LatestBlog from './LatestBlog';
import SponorSubscribe from './SponorSubscribe';
import NewProduct from './NewProduct';
import Discover from './Discover';
import SellerAndRelated from './SellerAndRelated';

const Home = (props) => {
  const { homeState } = useContext(HomeContext);

  return (
    <main>
      <Loading isLoading={homeState.isLoading} />
      <Container>
        <MainBanner />
        <SubBanner />
        <hr />
        <NewProduct/>
        <Feature />
        <hr />
        <TodayDeal />
        <Discover/>
        <SellerAndRelated/>
        <LatestBlog />
        <hr />
        <SponorSubscribe />
      </Container>
    </main>
  )
}

export default Home;