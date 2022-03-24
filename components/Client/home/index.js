import { Container } from '@mui/material';
import Banner from './Banner';
import React from 'react';
import NewProduct from './NewProduct';
import Discover from './Discover';
import SellerAndRelated from './SellerAndRelated';

const Home = (props) => {
  return (
    <main>
      <Container>
        <Banner />
        <NewProduct/>
        <Discover/>
        <SellerAndRelated/>
      </Container>
    </main>
  )
}

export default Home;