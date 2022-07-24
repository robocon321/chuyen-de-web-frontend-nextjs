import { Container } from '@mui/material';
import React, { useContext } from 'react';

import { HomeContext } from '../../../contexts/providers/HomeProvider';

import Loading from "../../common/Loading";
import Notification from "../../common/Notification";

import MainBanner from './MainBanner';
import SubBanner from './SubBanner';
import Feature from './Feature';
import TodayDeal from './TodayDeal';
import LatestBlog from './LatestBlog';
import SponorSubscribe from './SponorSubscribe';
import NewProduct from './NewProduct';
import Discover from './Discover';
import SellerAndRelated from './SellerAndRelated';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const Home = (props) => {
  const { homeState, setError } = useContext(HomeContext);
  const { t } = useContext(AuthContext);

  return (
    <main>
      <Notification
        title={t('error')}
        content={homeState.error}
        open={homeState.error != null}
        onClose={() => setError(null)}
      />

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