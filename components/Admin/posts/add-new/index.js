import { Grid, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, {useState} from 'react';
import Image from 'next/image';

import styles from './index.module.css';
import Input from '../../../common/Input';
import AutoCompleteTag from '../../../common/AutoCompleteTag';
import Breadcrumb from '../../../common/Breadcrumb';

const Index = (props) => {
  const [image, setImage] = useState('https://template.hasthemes.com/alula/alula/assets/img/products/medium6.webp');

  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
  }

  const attributes = [
    {
      id: 0,
      name: 'Attribute 0',
      values: [
        {
          id: 0, 
          value: 'Attr 0 Option 1'        
        },
        {
          id: 1,
          value: 'Attr 0 Option 2'
        }
      ]
    },
    {
      id: 1,
      name: 'Attribute 1',
      values: [
        {
          id: 0, 
          value: 'Attr 1 Option 1'        
        },
        {
          id: 1,
          value: 'Attr 1 Option 2'
        }
      ]
    },
  ]

  const categories = [
    {
      id: 0,
      name: 'Category 1',
      parent_id: -1
    },
    {
      id: 1,
      name: 'Category 2',
      parent_id: -1
    },
    {
      id: 2,
      name: 'Category 3',
      parent_id: 0
    }
  ];

  const tags = [
    {
      id: 0,
      name: 'tag 1'
    },
    {
      id: 1,
      name: 'tag 2'
    },
    {
      id: 2,
      name: 'tag 3'
    }
  ]
  
  return (
    <div className={styles['add-new']}>
      <div className={styles.head}>        
        <Breadcrumb links={['Home', 'Posts','Add New']} />
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12}>
                <Input
                  title='Post name'
                  placeholder='Enter post name'
                  isRequire={'true'}
                />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Post detail'
                  placeholder=''
                  isRequire={'true'}
                  type='ckeditor'
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  title='Short description'
                  placeholder='Description...'
                  isRequire='true'
                  type='textarea'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={styles.group}>
              <h4>Choose Category</h4>
              <div className={styles.categories}>
                {
                  categories.map((item) => (
                    <div className={styles.category} key={item.id}>
                      <input type="checkbox" id={'cate-'+item.id} name="category" />
                      <label htmlFor={'cate-'+item.id}> {item.name}</label><br />
                    </div>
                  ))
                }
                <a href='#'><span><i className="fa-solid fa-plus"></i></span> <span>Add new category</span></a>
              </div>
            </div>
            <div className={styles.group}>
              <h4>Choose tags</h4>
              <div className={styles.tags}>
                <AutoCompleteTag 
                  arrayObj={tags}
                  valueObj={'name'}
                />
                <div className={styles.choose}>Choose from the most used tags</div>
                <div className={styles['most-tag']}><span>tag 1</span> <span>tag 2</span></div>
              </div>
            </div>
            <div className={styles.group}>
              <h4>Choose post image</h4>
              <div className={styles.image}>
                <div className={styles['image-post']}></div>
                <div className={styles.choose}>Set post image</div>
              </div>
            </div>
            <button className={styles.complete}>Hoàn tất</button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Index;