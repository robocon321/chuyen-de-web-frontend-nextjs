import { Container, Grid } from '@mui/material';
import React, { useContext } from 'react';

import Breadcrumb from '../../common/Breadcrumb';
import Sidebar from './Sidebar';
import BlogList from './BlogList';
import Pagination from './Pagination';
import Loading from '../../common/Loading';
import Notification from "../../common/Notification";
import { BlogContext } from '../../../contexts/providers/BlogProvider';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const Index = props => {
  const { blogState, setError } = useContext(BlogContext);
  const { t } = useContext(AuthContext);

  return (
    <main>
      <Notification
        title={t('error')}
        content={blogState.error}
        open={blogState.error != null}
        onClose={() => setError(null)}
      />
      <Loading isLoading={blogState.isLoading} />
      <Container>
        <Breadcrumb links={[t('home_brum'), t('blog_brum')]}/>
      </Container>
      <hr />
      <Container>
        <Grid 
          container 
          direction={
            { 
              // xs: 'column-reverse',
              sm: 'row',
              md: 'row'
            }
          } 
          spacing={5} 
          columns={4}>
          <Grid item xs={4} md={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={4} md={3}>
            <BlogList />
            <Pagination />
          </Grid>
        </Grid>
      </Container>
      <hr />
    </main>
  )
}

export default Index;