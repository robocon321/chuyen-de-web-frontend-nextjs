import React from 'react'
import { Container } from '@mui/material';

import styles from './index.module.css';
import Map from './Map';
import Breadcrumb from '../../common/Breadcrumb';
import Feedback from './Feedback';

const Index = (props) => {
  return (
    <div className={styles.contact}>
      <Container>
        <Breadcrumb links={['Home', 'Contact']}/>
      </Container>
      <hr />
      <Map />
      <Container>
        <Feedback />
      </Container>
      <hr />
    </div>  
  )
}

export default Index;