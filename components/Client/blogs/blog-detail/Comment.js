import React, {useContext} from 'react';
import Image from 'next/image';
import {Grid} from '@mui/material';

import styles from './Comment.module.css';
import { BlogDetailContext } from '../../../../contexts/providers/BlogDetailProvider';
import Moment from 'react-moment';


const Comment = () => {
  const { blogState, setForm } = useContext(BlogDetailContext); 

  const ItemComment = ({item}) => {
    return (
      <div className={styles.comment}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={1}>
            <Image
              src={item.modifiedUser.avatar}
              alt='Not found'
              width={50}
              height={50}
            />
          </Grid>
          <Grid item xs={11}>
            <div className={styles.main}>
              <div className={styles.info}>
                <h5>{item.modifiedUser.fullname} {item.parent && <span>- Reply to: {item.parent.modifiedUser.fullname}</span>}</h5>
                <div className={styles.time}><Moment date={item.modifiedTime} format="DD/MM/YYYY"  /></div>
              </div>
              <button onClick={() => setForm({
                ...blogState.form,
                parent: item
              })}>Reply</button>
            </div>
            <p>{item.content}</p>
          </Grid>
        </Grid>
      </div>
    )
  }
  
  const loadComment = () => {
    return blogState.comments.map(item => {
      if(item.parent == null) return (
        <div key={item.id}>
          <ItemComment item={item} key={item.id} />
          <div style={{marginLeft: '40px'}}>
            {
              findChildrenComment(item.id).map(item =>
                <ItemComment item={item} key={item.id} />
              )
            }
          </div>
        </div>
      )
    })
  }
  
  const findChildrenComment = (id) => {
    const result = [];
    const listComment = blogState.comments.filter(item => item.parent && item.parent.id == id);
    result.push(...listComment);
    listComment.forEach(item => {
      result.push(...findChildrenComment(item.id))
    });
    return result;
  }

  if(blogState.comments) {
    return (
      <div className={styles.comments}>
        <h1>{blogState.comments.length} COMMENTS</h1>
        {loadComment()}
      </div>
    )  
  }  else  {
    return <div></div>
  }

}

export default Comment;