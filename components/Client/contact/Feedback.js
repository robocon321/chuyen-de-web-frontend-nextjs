import React from 'react';
import styles from './Feedback.module.css';
import Input from '../../common/Input';
import { Grid } from '@mui/material';

const Feedback = (props) => {
  return (
    <div className={styles.feedback}>
      <Grid container spacing={10} columns={12}>
        <Grid item md={6} sm={12}>
          <h1>Tell Us Your Message</h1> 
            <Input 
              title='Your Name'
              require={true}
              name='name'
            />
            <Input 
              title='Your Email'
              require={true}
              name='email'
            />
            <Input 
              title='Subject'
              require={false}
              name='subject'
            />
            <Input 
              title='Message'
              require={true}
              name='message'
              isTextArea={true}
            />
            <button>Send</button>
        </Grid>
        <Grid item md={6} sm={12}>
          <div className={styles['right-feedback']}>
            <h1>Contact Us</h1>
            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human</p>
            <div className={styles['group-info']}>
              <h2><span><i className="fa-solid fa-location-dot"></i></span><span>Address</span></h2>
              <p>123 Main Street, Anytown, CA 12345 – USA</p>
            </div>
            <div className={styles['group-info']}>
              <h2><span><i className="fa-solid fa-phone"></i></span><span>Address</span></h2>
              <p>Mobile: (08) 123 456 789</p>
              <p>Hotline: 1009 678 456</p>
            </div>
            <div className={styles['group-info']}>
              <h2><span><i className="fa-regular fa-envelope"></i></span><span>Address</span></h2>
              <p>yourmail@domain.com</p>
              <p>support@hastech.company</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Feedback;