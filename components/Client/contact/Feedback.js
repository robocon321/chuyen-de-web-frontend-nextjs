import React, { useContext } from 'react';
import styles from './Feedback.module.css';
import Input from '../../common/Input';
import { Grid } from '@mui/material';
import { ContactContext } from '../../../contexts/providers/ContactProvider';

const Feedback = (props) => {
  const { contactState, onChange, submitForm } = useContext(ContactContext);

  return (
    <div className={styles.feedback}>
      <Grid container spacing={10} columns={12}>
        <Grid item md={6} sm={12}>
          <h1>Tell Us Your Message</h1> 
            <Input
              defaultValue={contactState.feedback.fullname}
              onChange={onChange}
              title='Your Name'
              isRequire='true'
              name='fullname'
              id='fullname'
            />
            <Input 
              defaultValue={contactState.feedback.email}
              onChange={onChange}
              title='Your Email'
              isRequire='true'
              name='email'
              type='email'
              id='email'
            />
            <Input 
              defaultValue={contactState.feedback.subject}
              onChange={onChange}
              title='Subject'
              isRequire='true'
              name='subject'
              id='subject'
            />
            <Input 
              defaultValue={contactState.feedback.message}
              onChange={onChange}
              title='Message'
              isRequire='true'
              name='message'
              type='textarea'
              id='message'
            />
            <button onClick={submitForm}>Send</button>
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
              <h2><span><i className="fa-solid fa-phone"></i></span><span>Phone</span></h2>
              <p>Mobile: (08) 123 456 789</p>
              <p>Hotline: 1009 678 456</p>
            </div>
            <div className={styles['group-info']}>
              <h2><span><i className="fa-regular fa-envelope"></i></span><span>Email</span></h2>
              <p>robocon321n@gmail.com</p>
              <p>18130164@st.hcmuaf.edu.vn</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Feedback;