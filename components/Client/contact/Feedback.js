import React, { useContext } from 'react';
import styles from './Feedback.module.css';
import Input from '../../common/Input';
import { Grid } from '@mui/material';
import { ContactContext } from '../../../contexts/providers/ContactProvider';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const Feedback = (props) => {
  const { contactState, onChange, submitForm } = useContext(ContactContext);
  const { t } = useContext(AuthContext);

  return (
    <div className={styles.feedback}>
      <Grid container spacing={10} columns={12}>
        <Grid item md={6} sm={12}>
          <h1>{t('tell_us_message')}</h1> 
            <Input
              defaultValue={contactState.feedback.fullname}
              onChange={onChange}
              title={t('your_name')}
              isRequire='true'
              name='fullname'
              id='fullname'
            />
            <Input 
              defaultValue={contactState.feedback.email}
              onChange={onChange}
              title={t('your_email')}
              isRequire='true'
              name='email'
              type='email'
              id='email'
            />
            <Input 
              defaultValue={contactState.feedback.subject}
              onChange={onChange}
              title={t('subject')}
              isRequire='true'
              name='subject'
              id='subject'
            />
            <Input 
              defaultValue={contactState.feedback.message}
              onChange={onChange}
              title={t('message')}
              isRequire='true'
              name='message'
              type='textarea'
              id='message'
            />
            <button onClick={submitForm}>{t('send')}</button>
        </Grid>
        <Grid item md={6} sm={12}>
          <div className={styles['right-feedback']}>
            <h1>{t('contact_us')}</h1>
            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human</p>
            <div className={styles['group-info']}>
              <h2><span><i className="fa-solid fa-location-dot"></i></span><span>{t('address')}</span></h2>
              <p>123 Main Street, Anytown, CA 12345 – USA</p>
            </div>
            <div className={styles['group-info']}>
              <h2><span><i className="fa-solid fa-phone"></i></span><span>{t('phone')}</span></h2>
              <p>{t('mobile')}: (08) 123 456 789</p>
              <p>{t('hotline')}: 1009 678 456</p>
            </div>
            <div className={styles['group-info']}>
              <h2><span><i className="fa-regular fa-envelope"></i></span><span>{t('email')}</span></h2>
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