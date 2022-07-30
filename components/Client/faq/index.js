import { Container } from '@mui/material';
import React,{ useState } from 'react';

import Breadcrumb from '../../common/Breadcrumb';
import styles from './index.module.css';
const Index = props => {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      title: 'What Shipping Methods are Available?',
      content: 'Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.',
      active: false
    },
    {
      id: 1,
      title: 'What Payment Methods are Available?',
      content: 'Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.',
      active: false
    },
    {
      id: 2,
      title: 'How I Return back my product?',
      content: 'Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.',
      active: false
    },
    {
      id: 3,
      title: 'What is the payment secutiry system?',
      content: 'Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.',
      active: false
    },
    {
      id: 4,
      title: 'How can I track my order?',
      content: 'Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.',
      active: false
    },
    {
      id: 5,
      title: 'Do I need create account for buy products?',
      content: 'Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.',
      active: false
    }
  ]);

  const onToggleQuestion = (id) => {
    questions[id].active = !questions[id].active;
    setQuestions([
      ...questions
    ]);
  }

  return (
    <>
      <Container>
        <Breadcrumb links={['Home', 'FAQ']}/>
      </Container>
      <hr />
      <div className={styles.center}>
        <div className={styles.faq}>
        {
          questions.map(item => (
            <div key={item.id} className={styles.question}>
              <p 
                className={styles.title + (item.active ? ' ' + styles.active : '')}
                onClick={() => onToggleQuestion(item.id)}>
                <span>{item.title}</span><span><i className="fa-solid fa-angle-down"></i></span>
              </p>
              <p className={styles.content + (item.active ? ' ' + styles.active : '')}>{item.content}</p>
            </div>
          ))
        }
        </div>
      </div>
      <hr />
    </>
  )
}

export default Index;