import React from 'react';
import Image from 'next/image';
import {Grid} from '@mui/material';

import styles from './Comment.module.css';

const comments = [
  {
    id: 0,
    name: 'robocon321',
    avatar: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia rem dolorem et rerum est laudantium eum dolores omnis perspiciatis.',
    time: 'April 28, 2019 at 3:09 am',
    parentId: -1,
  },
  {
    id: 1,
    name: 'robocon321',
    avatar: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia rem dolorem et rerum est laudantium eum dolores omnis perspiciatis.',
    time: 'April 28, 2019 at 3:09 am',
    parentId: -1,
  },
  {
    id: 2,
    name: 'robocon321',
    avatar: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia rem dolorem et rerum est laudantium eum dolores omnis perspiciatis.',
    time: 'April 28, 2019 at 3:09 am',
    parentId: 1,
  },
  {
    id: 3,
    name: 'robocon321',
    avatar: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia rem dolorem et rerum est laudantium eum dolores omnis perspiciatis.',
    time: 'April 28, 2019 at 3:09 am',
    parentId: 2,
  },
  {
    id: 4,
    name: 'robocon321',
    avatar: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia rem dolorem et rerum est laudantium eum dolores omnis perspiciatis.',
    time: 'April 28, 2019 at 3:09 am',
    parentId: -1,
  },
]

const ItemComment = ({item}) => {
  return (
    <div className={styles.comment}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={1}>
          <Image
            src={item.avatar}
            alt='Not found'
            width={50}
            height={50}
          />
        </Grid>
        <Grid item xs={11}>
          <div className={styles.main}>
            <div className={styles.info}>
              <h5>{item.name}</h5>
              <div className={styles.time}>{item.time}</div>
            </div>
            <button>Reply</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia rem dolorem et rerum est laudantium eum dolores omnis perspiciatis.</p>
        </Grid>
      </Grid>
    </div>
  )
}

const loadComment = () => {
  return comments.map(item => {
    if(item.parentId < 0) return (
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
  const listComment = comments.filter(item => item.parentId == id);
  result.push(...listComment);
  listComment.forEach(item => {
    result.push(...findChildrenComment(item.id))
  });
  return result;
}

const Comment = () => {
  return (
    <div className={styles.comments}>
      <h1>{comments.length} COMMENTS</h1>
      {loadComment()}
    </div>
  )
}

export default Comment;