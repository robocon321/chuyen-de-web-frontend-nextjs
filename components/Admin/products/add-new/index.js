import { Grid, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, {useContext, useState} from 'react';
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
        <Breadcrumb links={['Home', 'Products', 'Add New']} />
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12}>
                <Input
                  title='Product name'
                  placeholder='Enter product name'
                  isRequire={'true'}
                />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Detail product'
                  placeholder=''
                  isRequire={'true'}
                  onChange={(e) => {
                    console.log(e);
                  }}
                  type='ckeditor'
                />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Quantity'
                  placeholder='Enter your product quantity'
                  isRequire='true'
                />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Weight (kg)'
                  placeholder='0'
                  isRequire='true'                  
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={12} md={4}>
                    <Input
                      title='Length (cm)'
                      placeholder='0'
                      isRequire='true'                      
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input
                      title='Width (cm)'
                      placeholder='0'
                      isRequire='true'                      
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input
                      title='Height (cm)'
                      placeholder='0'
                      isRequire='true'                      
                    />
                  </Grid>                  
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Linked product'
                  isRequire='false'
                  placeholder='Enter linked product name'
                />
              </Grid>
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary                                   
                    expandIcon={<span><i className="fa-solid fa-angle-up"></i></span>}
                  >
                    <h3>Attributes</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={styles.attributes}>
                      <Grid container spacing={2} columns={12} alignItems='center'>
                        <Grid item xs={12} md={8}>
                          <Input 
                            type='select'
                            placeholder='Each attribute seperate by |'
                            arrayObj={attributes}
                            valueObj='id'
                            textInnerObj='name'
                          />
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <button>Add</button>
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <div className={styles['toggle-attribute']}>
                            <span>Expand </span>/<span> Close</span>
                          </div>                          
                        </Grid>
                        {
                          attributes.map((item) => (
                            <Grid key={item.id} item xs={12}>
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<span><i className="fa-solid fa-angle-up"></i></span>}
                                  aria-controls="panel1bh-content"
                                  id="panel1bh-header"
                                >
                                <div className={styles['header-accordion']}>
                                  <h4 style={{textAlign: 'center'}}>{item.name}</h4>
                                  <span><i className="fa-solid fa-xmark"></i></span>
                                </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Grid container spacing={2} columns={12} alignItems='center'>
                                    <Grid item xs={12} md={3}>
                                      <Input 
                                        title='Name'
                                        placeholder='Attribute name'
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                      <AutoCompleteTag title='Choose attribute value' arrayObj={item.values} valueObj='value' />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <input type="checkbox" id="visible" name="visible" value="true" />
                                      <label htmlFor="visible">Visible on the product page</label>
                                      <br />
                                      <br />
                                      <input type="checkbox" id="for-variation" name="for-variation" value="true" />
                                      <label htmlFor="for-variation">Used for variations</label>
                                    </Grid>
                                    <Grid item xs={7}>
                                      <Input 
                                        placeholder='Attribute 1 option 3'
                                      />                                  
                                    </Grid>
                                    <Grid item xs={1}>
                                      <button>Add</button>
                                    </Grid>
                                  </Grid>
                                </AccordionDetails>
                              </Accordion>
                            </Grid>
                          ))
                        }
                      </Grid>
                    </div>

                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<span><i className="fa-solid fa-angle-up"></i></span>}>
                      <h3>Variation products</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={2} columns={12} alignItems='center'>
                        {
                          attributes.map((item) => (
                            <Grid key={item.id} item xs={12} md={4}>
                              <Input 
                                placeholder={`Choose attribute ${item.name}`}
                                type='select'
                                arrayObj={item.values}
                                valueObj='id'
                                textInnerObj='value'                                
                              />
                            </Grid>
                          ))
                        }
                        <Grid item xs={12} md={4}>
                          <button>Add new variation</button>
                        </Grid>
                        <Grid item xs={12}>
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<span><i className="fa-solid fa-angle-up"></i></span>}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                            <div className={styles['header-accordion']}>
                              <h4 style={{textAlign: 'center'}}>Attribute 1: Option 1, Attribute 2: Option 1</h4>
                              <span><i className="fa-solid fa-xmark"></i></span>
                            </div>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Grid container spacing={2} columns={12}>
                                <Grid item xs={12} md={3}>
                                  <div>
                                    <input type="file" onChange={onImageChange} className="filetype" />
                                    <br />
                                    <br />
                                    <Image 
                                      src={image} 
                                      alt="preview image" 
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                  <Grid container spacing={2} columns={12}>
                                    <Grid item xs={12} md={6}>
                                      <Input 
                                        title='Regular price (VNĐ)'
                                        isRequire='true'
                                        placeholder='10'
                                        type='number'
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <Input 
                                        title='Sale price (VNĐ)'
                                        isRequire='true'
                                        placeholder='10'
                                        type='number'
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <Input 
                                        title='Quantity'
                                        isRequire='true'
                                        placeholder='0'
                                        type='number'
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                      <Input 
                                        title='Weight (kg)'
                                        isRequire='true'
                                        placeholder='0'
                                        type='number'
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <Input 
                                        title='Length (cm)'
                                        isRequire='true'
                                        placeholder='0'
                                        type='number'
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <Input 
                                        title='Width (cm)'
                                        isRequire='true'
                                        placeholder='0'
                                        type='number'
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                      <Input 
                                        title='Height (cm)'
                                        isRequire='true'
                                        placeholder='0'
                                        type='number'
                                      />
                                    </Grid>
                                    <Grid item xs={12}>
                                      <Input 
                                          title='Description'
                                          isRequire='true'
                                          placeholder='Less 255 words'
                                          type='textarea'
                                        />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
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
              <h4>Choose product image</h4>
              <div className={styles.image}>
                <div className={styles['image-product']}></div>
                <div className={styles.choose}>Set product image</div>
              </div>
            </div>
            <div className={styles.group}>
              <h4>Choose product gallery</h4>
              <div className={styles.gallery}>
                <div className={styles['gallery-product']}></div>
                <div className={styles.choose}>Add product gallery images</div>
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