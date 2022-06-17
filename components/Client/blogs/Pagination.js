import React, { useContext } from 'react';
import Link from 'next/link';

import styles from './Pagination.module.css';
import { BlogContext } from '../../../contexts/providers/BlogProvider';

const Pagination = (props) => {
  const { blogState, router } = useContext(BlogContext);

  const createQuery = (search, page, AND_taxomony) => {
    const query = {};
    if(search != null && search.length != 0) {
      query['search'] = search;
    }
    if(page != null) {
      query['page'] = page;      
    }
    if(AND_taxomony != null) {
      query['AND_taxomony'] = AND_taxomony;
    }
    return query;
  }

  if(blogState.lastestBlogs && blogState.lastestBlogs.totalPages) {
    return (
        <div className={styles.pagination}>
          <div className={styles.pages}>
            <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, 1, router.query.AND_taxomony)
              }
            }><a><i className="fa-solid fa-backward-step"></i></a></Link>
            {
              !blogState.lastestBlogs.first && <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, blogState.lastestBlogs.number, router.query.AND_taxomony)
              }
            }><a><i className="fa-solid fa-angle-left"></i></a></Link>
            }
            {
              blogState.lastestBlogs.number > 0 && <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, blogState.lastestBlogs.number, router.query.AND_taxomony)
              }
            }><a>{blogState.lastestBlogs.number}</a></Link>
            }
            <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, blogState.lastestBlogs.number + 1, router.query.AND_taxomony)              
              }
            }><a>{blogState.lastestBlogs.number + 1}</a></Link>
            {
              blogState.lastestBlogs.number + 1 < blogState.lastestBlogs.totalPages && <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, blogState.lastestBlogs.number + 2, router.query.AND_taxomony)
              }
            }><a>{blogState.lastestBlogs.number + 2}</a></Link>
            }
            {
              !blogState.lastestBlogs.last &&  <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, blogState.lastestBlogs.number + 2, router.query.AND_taxomony)              
              }
            }><a><i className="fa-solid fa-angle-right"></i></a></Link>
            }
            <Link href={
              {
                pathname: '/blogs',
                query: createQuery(router.query.search, blogState.lastestBlogs.totalPages + 2, router.query.AND_taxomony)              
              }
            }><a><i className="fa-solid fa-forward-step"></i></a></Link>
          </div>
        <div className={styles.info}>Showing {blogState.lastestBlogs.size * blogState.lastestBlogs.number + 1} to {blogState.lastestBlogs.size * (blogState.lastestBlogs.number + 1)} of {blogState.lastestBlogs.totalElements} ({blogState.lastestBlogs.totalPages} Pages)</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Pagination