import React, { useContext } from 'react'
import { Container, Grid } from '@mui/material';

import styles from './index.module.css';
import Breadcrumb from '../../../common/Breadcrumb';
import Sidebar from '../Sidebar';
import AccountDetail from './AccountDetail';
import Loading from '../../../common/Loading';
import { AccountDetailContext } from '../../../../contexts/providers/AccountDetailProvider';

const Index = (props) => {
  const { accountDetailState, router } = useContext(AccountDetailContext);
  const { user } = accountDetailState;

  if (accountDetailState.isLoading) {
    return (
      <Loading isLoading={true} />
    );
  }

  if (!user && !accountDetailState.isLoading) {
    router.push("/auth");
    return <div></div>;
  }


  return (
    <div className={styles.contact}>
      <Container>
        <Breadcrumb links={['Home', 'Account']}/>
      </Container>
      <hr />
      <Container>
        <Grid container spacing={5} columns={12}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item sm={12} md={9}>
            <AccountDetail />
          </Grid>
        </Grid>
      </Container>
      <hr />
    </div>  
  )
}

export default Index;