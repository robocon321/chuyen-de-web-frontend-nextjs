import React, {useState} from 'react'
import { Container, Grid } from '@mui/material';

import styles from './index.module.css';
import Breadcrumb from '../../../common/Breadcrumb';
import Sidebar from '../Sidebar';
import Address from './Address';
import ModelAddress from './ModelAddress';

const Index = (props) => {
  const [visible, setVisible] = useState(false);
  
  const toggleModel = () => {
    setVisible(!visible);
  } 

  return (
    <div className={styles.contact}>
      <Container>
        <Breadcrumb links={['Home', 'Addresses']}/>
      </Container>
      <hr />
      <Container>
        <Grid container spacing={5} columns={12}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Address toggleModel={toggleModel} />
            {
              visible && <ModelAddress toggleModel={toggleModel} />
            }
          </Grid>
        </Grid>
      </Container>
      <hr />
    </div>  
  )
}

export default Index;