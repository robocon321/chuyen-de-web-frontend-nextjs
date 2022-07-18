import React, { useContext } from 'react'
import { Container } from '@mui/material';

import styles from './index.module.css';
import Map from './Map';
import Breadcrumb from '../../common/Breadcrumb';
import Loading from '../../common/Loading';
import Notification from '../../common/Notification';
import Feedback from './Feedback';
import { ContactContext } from '../../../contexts/providers/ContactProvider';

const Index = (props) => {
  const { contactState, setError } = useContext(ContactContext);

  if (contactState.isLoading) {
    return <Loading isLoading={true} />;
  }

  return (
    <div className={styles.contact}>
      <Notification
        title="Error"
        content={contactState.error}
        open={contactState.error != null}
        onClose={() => setError(null)}
      />    
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