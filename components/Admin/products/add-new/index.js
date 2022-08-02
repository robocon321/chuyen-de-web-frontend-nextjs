import { Grid, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, {useContext, useState} from 'react';
import Image from 'next/image';

import styles from './index.module.css';
import Input from '../../../common/Input';
import AutoCompleteTag from '../../../common/AutoCompleteTag';
import Breadcrumb from '../../../common/Breadcrumb';
import { AuthContext } from "../../../../contexts/providers/AuthProvider";
import { ProductNewAdminContext } from '../../../../contexts/providers/admin/ProductNewAdminProvider';
import Loading from '../../../common/Loading';
import Notification from '../../../common/Notification';

const AddNew = (props) => {
  const [image, setImage] = useState('https://template.hasthemes.com/alula/alula/assets/img/products/medium6.webp');
  // const [input,setInput] = useState('')
  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
  }
  const { productNewAdminState,
    setError,
    setLoading,
    onChangePost,
    onChangeProduct,
    onChangeImagePost,
    onSubmit} = useContext(ProductNewAdminContext)
    const { authState,t } = useContext(AuthContext);

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
  if (productNewAdminState.isLoading || authState.isLoading) {
    return <Loading isLoading={true} />;
  }
  return (
    <div className={styles['add-new-product']}>
      <Notification
        title={'Error'}
        content={productNewAdminState.error}
        open={productNewAdminState.error != null}
        onClose={() => setError(null)}
      />
      <div className={styles.headProduct}>        
        <Breadcrumb className='addproduct' links={['Home', 'Products', 'Add New']} />
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12}>
                <Input
                  title='Product name'
                  placeholder='Enter product name'
                  isRequire={'true'}
                  // onChange={(e) => {
                  //   setInput(e.target.value);
                  // }}
                  id='title'
                  name='title'
                  defaultValue={productNewAdminState.post.title}
                  onChange={onChangePost}
                />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Detail product'
                  placeholder=''
                  id='content'
                  name='content'
                  isRequire={'true'}
                  defaultValue={productNewAdminState.post.content}
                  onChange={onChangePost}
                  type='ckeditor'
                />
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Quantity'
                  placeholder='Enter your product quantity'
                  isRequire='true'
                  name='stockQuantity'
                  id='stockQuantity'
                  type='number'
                  defaultValue={productNewAdminState.product.stockQuantity}
                  onChange={onChangeProduct}
                />
              </Grid>
              <Grid item xs={6}>
                <Input 
                  title='Max Price'
                  placeholder='Enter your product Max Price'
                  isRequire='true'
                  name='maxPrice'
                  id='maxPrice'
                  type='number'
                  defaultValue={productNewAdminState.product.maxPrice}
                  onChange={onChangeProduct}
                />
                
              </Grid>
              <Grid item xs={6}>
                <Input 
                  title='Min Price'
                  placeholder='Enter your product Min Price'
                  isRequire='true'
                  name='minPrice'
                  id='minPrice'
                  type='number'
                  defaultValue={productNewAdminState.product.minPrice}
                  onChange={onChangeProduct}
                />
                
              </Grid>
              {/* <Grid item xs={12}>
                <Input 
                  title='Weight (kg)'
                  placeholder='0'
                  isRequire='true'   
                  id='weight'   
                  name='weight'  
                  type='number'
                  defaultValue={productNewAdminState.product.weight}
                  onChange={onChangeProduct}          
                />
              </Grid> */}
              <Grid item xs={12}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={12} md={4}>
                    <Input
                      title='Weight (kg)'
                      placeholder='0'
                      isRequire='true'   
                      id='weight'   
                      name='weight'  
                      type='number'
                      defaultValue={productNewAdminState.product.weight}
                      onChange={onChangeProduct}               
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input
                      title='Width (cm)'
                      placeholder='0'
                      isRequire='true' 
                      id='width'   
                      name='width'
                      type='number'
                      defaultValue={productNewAdminState.product.width}
                      onChange={onChangeProduct}                    
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Input
                      title='Height (cm)'
                      placeholder='0'
                      isRequire='true'    
                      id='height'  
                      name='height'
                      type='number'
                      defaultValue={productNewAdminState.product.height}
                      onChange={onChangeProduct}             
                    />
                  </Grid>                  
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Input 
                  title='Slug'
                  isRequire='true'
                  placeholder='Enter Slug'
                  id='slug'
                  name='slug'
                  defaultValue={productNewAdminState.post.slug}
                  onChange={onChangePost}
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
                                    {/* <input type="file" onChange={onImageChange} className="filetype" /> */}
                                    <br />
                                    <br />
                                    {/* <Image 
                                      src={image} 
                                      alt="preview image" 
                                      width={150}
                                      height={150}
                                    /> */}
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
                  id='description'
                  name='description'
                  defaultValue={productNewAdminState.post.description}
                  onChange={onChangePost}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={styles.group}>
              <h4>Choose Category</h4>
              <div className={styles.categories}>
                {productNewAdminState.categories &&
                  productNewAdminState.categories.map((item) => (
                    <div className={styles.category} key={item.id}>
                      <input 
                      type="checkbox" 
                      id={'cate-'+item.id} 
                      name="categories" 
                      onChange={onChangePost}
                      value={item.id}
                      />
                      <label htmlFor={'cate-'+item.id}> {item.name}</label><br />
                    </div>
                  ))
                }
                <a href='#'><span><i className="fa-solid fa-plus"></i></span> <span>Add new category</span></a>
              </div>
            </div>
            <div className={styles.group}>
              <h4>{t('choose_tag_admin')}</h4>
              <div className={styles.tags}>
                <AutoCompleteTag arrayObj={tags} valueObj={"name"} />
                <div className={styles.choose}>
                  {t('choose_most_tag_admin')}
                </div>
                <div className={styles["most-tag"]}>
                  <span>tag 1</span> <span>tag 2</span> <span>tag 3</span>
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <h4>{t('choose_thumbnail_admin')}</h4>
              <div className={styles.image}>
                <div>
                  {productNewAdminState.post.thumbnail && (
                    <Image
                      className={styles["image-post"]}
                      alt="Not found"
                      src={productNewAdminState.post.thumbnail}
                      width="200"
                      height="200"
                    />
                  )}
                </div>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  accept="image/*"
                  onChange={onChangeImagePost}
                />
              </div>
            </div>
            <div className={styles.group}>
              <h4>{t('choose_gallery_admin')}</h4>
              <div className={styles.image}>
                <div>
                  {productNewAdminState.post.galleryImage &&
                    productNewAdminState.post.galleryImage.split(',').map((item, index) => (
                      <Image
                        key={index}
                        className={styles["image-post"]}
                        alt="Not found"
                        src={
                          item
                            ? item
                            : "https://template.hasthemes.com/alula/alula/assets/img/products/medium6.webp"
                        }
                        width="200"
                        height="200"
                      />
                    ))}
                </div>
                <input
                  type="file"
                  name="gallery_image"
                  accept="image/*"
                  multiple
                  onChange={onChangeImagePost}
                />
              </div>
            </div>
            <button onClick={onSubmit} className={styles.complete}>{t('submit_admin')}</button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default AddNew;