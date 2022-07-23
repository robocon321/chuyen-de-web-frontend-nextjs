import React, {useContext, useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Moment from 'react-moment';
import Link from 'next/link';

import styles from './Sidebar.module.css';
import { BlogDetailContext } from '../../../../contexts/providers/BlogDetailProvider';
import { AuthContext } from '../../../../contexts/providers/AuthProvider';

const comments = [
  {
    id: 0,
    title: 'Admin Says',
    content: 'The biggest lie in plant',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  },
  {
    id: 1,
    title: 'Admin Says',
    content: 'How to improve plant quatity',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  },
  {
    id: 2,
    title: 'Admin Says',
    content: '101 ideas for plant',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  },
  {
    id: 3,
    title: 'Admin Says',
    content: 'No more mistakes with plant',
    image: 'https://template.hasthemes.com/alula/alula/assets/img/blog/comment-icon.webp'
  }
]

const Sidebar = (props) => {
  const { blogState, router } = useContext(BlogDetailContext);
  const { t } = useContext(AuthContext);
  const [search, setSearch] = useState('');

  
  const findChildrenElement = (id) => {
    const children = blogState.categories.filter(item => item.parent != null && item.parent.id === id);
    return children.map(item => (
      <li key={item.id}>
        <a href='#'>{item.name} ({item.totalProduct})</a>
        {
          blogState.categories.filter(i => i.parent != null && i.parent.id === item.id).length > 0 && (
          <ul key={item.id} className={styles['children-categories']}>
            {findChildrenElement(item.id)}
          </ul>
        )}
      </li>
    ))
  }

  const onSearch = () => {
    router.push("/blogs?search="+search);
  }

  const createQuery = (search, page, AND_taxomony) => {
    const query = {};
    if(search != null && search.length != 0) {
      query['search'] = search;
    }
    if(page != null) {
      query['page'] = page;      
    }
    if(AND_taxomony != null) {
      query['AND_taxomonies.id'] = AND_taxomony;
    }
    return query;
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <label>{t('search_title')}</label>
        <div className={styles.searchbox}>
          <input type='text' placeholder={t('search_placeholder')} onChange={(e) => {setSearch(e.target.value)}}/>
          <span onClick={onSearch}><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
      </div>
      <div className={styles.category}>
        <h3>{t('category')}</h3>
        <ul className={styles['parent-categories']}>
        {
          blogState.categories &&
          blogState.categories.map(item => (          
          <li key={item.id}>
            <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, 0, item.id)
              }
            }><a>{item.name} ({item.totalPost})</a></Link>
            {
              blogState.categories.filter(i => i.parent != null && i.parent.id === item.id).length > 0 && (
              <ul key={item.id} className={styles['children-categories']}>
                {findChildrenElement(item.id)}
              </ul>
            )}
          </li>
        ))
        }
        </ul>
      </div>
      <div className={styles.posts}>
        <h3>{t('recent_post')}</h3>
        { blogState.popularBlogs &&
          blogState.popularBlogs.content.map((item, index) => (
            <a href='#' key={item.id} className={styles.post}>
              <Grid container spacing={2} columns={3}>
                <Grid item xs={1}>                  
                  <Image
                    src={item.thumbnail}
                    alt="Not found"
                    width={100}
                    height={100}                  
                  />
                </Grid>
                <Grid item xs={2}>
                  <p className={styles.title}><b>{item.title}</b></p>
                  <div className={styles.time}>
                    <Moment date={item.modifiedTime} format="DD/MM/YYYY"  />
                  </div>
                </Grid>
              </Grid>
              {
                index !== blogState.popularBlogs.content.length - 1  && <hr />
              }
            </a>
          ))
        }
      </div>
      <div className={styles.comments}>
        <h3>{t('recent_comment')}</h3>
        {
          comments.map((item, index) => (
            <a href='#' key={item.id} className={styles.comment}>
              <Grid container spacing={2} columns={3}>
                <Grid item xs={1}>                  
                  <Image
                    src={item.image}
                    alt="Not found"
                    width={100}
                    height={100}                  
                  />
                </Grid>
                <Grid item xs={2}>
                  <p className={styles.title}><b>{item.title}</b></p>
                  <div className={styles.content}>{item.content}</div>
                </Grid>
              </Grid>
              {
                index !== comments.length - 1  && <hr />
              }
            </a>
          ))
        }
      </div>
      <div className={styles.tags}>
        <h3>{t('popular_tag')}</h3>
        <a href='#'>New</a>
        <a href='#'>Bags</a>
        <a href='#'>News</a>
        <a href='#'>Kids</a>
        <a href='#'>Fashion</a>
        <a href='#'>Accessories</a>
      </div>
    </div>
  )
}

export default Sidebar;