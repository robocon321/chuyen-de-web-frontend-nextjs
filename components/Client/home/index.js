import { Container } from '@mui/material';
import MainBanner from './MainBanner';
import React from 'react';
import SubBanner from './SubBanner';

const Home = (props) => {
  return (
    <main>
      <Container>
        <MainBanner />
        <SubBanner />
      </Container>
    </main>
  )
}

export default Home;