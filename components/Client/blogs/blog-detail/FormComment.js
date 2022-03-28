import React from 'react';
import {Grid} from '@mui/material';

import Input from '../../../common/Input';
import styles from './FormComment.module.css';

const FormComment = (props) => {
  return (
    <div className={styles['form-comment']}>
      <h2>LEAVE A REPLY</h2>
      <p>Your email address will not be published. Required fields are marked *</p>
      <Input 
        title='Comment'
        require={false} 
        isTextArea={true}
         />
      <Grid container spacing={5} columns={12}>
        <Grid item xs={12} md={4}>
          <Input 
            title='Name'
            require={true}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input 
            title='Email'
            require={true}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input 
            title='Website'
            require={false}
          />
        </Grid>
      </Grid>
      <button>POST COMMENT</button>
    </div>
  )
}

export default FormComment