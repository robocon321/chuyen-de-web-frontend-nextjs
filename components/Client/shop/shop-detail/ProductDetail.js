import React,{useState} from 'react';
import Image from 'next/image';
import styles from './ProductDetail.module.css';
import { Grid } from '@mui/material';
import { Swiper,SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import Input from '../../../common/Input';

const listImgs= [
    {
        id:0,
        image:'medium1.webp',
    },
    {
        id:1,
        image:'medium5.webp',
    },
    {
        id:2,
        image:'medium6.webp',
    },
    {
        id:3,
        image:'medium1.webp',
    },
    {
        id:4,
        image:'medium1.webp',
    }
]
const listRatiting = [
    {
        id:0,
        ratting:5,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:1,
        ratting:3,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:2,
        ratting:4,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:3,
        ratting:5,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
    {
        id:4,
        ratting:0,
        nameUser:'Rashed Mahmud',
        content:'Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia res eos qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
    },
]
const ProductDetail = props =>{
   const[quantity,setQuantity] = useState(1);

   const change =(num)=>{
    const a = document.getElementById('description');
    const b = document.getElementById('review');
    const des = document.getElementById('des-link');
    const rev = document.getElementById('rev-link');
    if(num==0){
        a.style.display='block';
        b.style.display='none';
        des.style.borderBottom = '2px solid var(--primary_color)';
        rev.style.borderBottom = 'none';
        des.style.color = '#000';
        rev.style.color = '#ccc';
    }else{
        a.style.display='none';
        b.style.display='block';
        des.style.borderBottom = 'none';
        rev.style.borderBottom = '2px solid var(--primary_color)';
        des.style.color = '#ccc';
        rev.style.color = '#000';
    }
   }
  
  const [imageSelected, setImageSelected] = useState("medium1.webp");

  const onChangeMainImage = (image) => {
    setImageSelected(image);
  }
  const numstar = (num)=>{
      return(<span className={styles['numStar']}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span>({num})</span>
      </span>)
  }
    return(
        <div className={styles.container}>  
        <Grid container spacing={2}>
           <Grid item xs={12} md={6}>
               <div  >
               <Image
               className={styles['image-zoom']}
                src={'/'+imageSelected}
                alt='Not found'
                width={600}
                height={540}
               />
               </div>
                <Swiper
                    className='swiper'
                    spaceBetween={0}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}                    
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        700:{
                            slidesPerView:4,
                            
                        }
                    }}
                >
                    {
                        listImgs.map(item=>(
                            <SwiperSlide className={styles['swiper-slide']} key={item.id}>
                                <div className={[imageSelected === item.id && styles['more']]} style={{width: '120px', height: '120px', position: 'relative'}} >
                                 <Image
                                        onClick={()=>onChangeMainImage(item.image)}
                                        src={'/'+item.image}
                                        alt="Not found"
                                        layout='fill'
                                    />
                                   
                                </div>
                              
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
           </Grid>
           <Grid item xs={12} md={6}>
                    <div className={styles['info-product']}>
                        <div className={styles['tag']}>Tags,Plant,Garden</div>
                        <div className={styles['title']}>Lorem ipsum indoor plants</div>
                        <div className={styles['ratting']}>
                            <span className={styles['star-ratting']}>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </span>
                            <span className={styles['numReview']}>(1 Review)</span>
                            <a href="#">Write A Review</a>
                        </div>
                        <div className={styles['price']}>
                            <span className={styles['new-price']}>$100.00</span>
                            <span className={styles['old-price']}>$120.00</span>
                        </div>
                        <div className={styles['more']}>    
                            <div>Ex Tax: <span className={styles['text-pri']}>$95.00</span></div>
                            <div>Brand: <span className={styles['text-pri']}>Brac</span></div>
                            <div>Product Code: <span className={styles['text-pri']}>abcd</span></div>
                            <div>Availablility: <span className={styles['text-pri']}> In stock</span></div>
                        </div>
                        <hr />
                        <div className={styles['about']}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas consectetur</p>
                        <p>inventore voluptatem dignissimos nemo repellendus est, harum maiores</p>
                        <p>veritatis quidem.</p>
                        </div>
                        <hr />
                        <div className={styles['quantity']}>
                            <span className={styles['qty-text']}>Qty</span>
                            <div className={styles['inc-dev']}>
                                <input type="text" value={quantity}/>
                                <button  className={styles['inc-btn']} onClick={()=>setQuantity(quantity+1)}>+</button>
                                <button className={styles['dev-btn']} onClick={()=>setQuantity(quantity-1)}>-</button>
                            </div>
                            <button className={styles['add-cart']}>+ Add to cart</button>
                        </div>
                        <div className={styles['compare-wish']}>
                            <span className={styles['compare']}><i className="fa-solid fa-sliders"></i>Compare This Product</span>
                            <span className={styles['wish']}><i className="fa fa-heart" aria-hidden="true"></i> Add to Wishlist</span>
                        </div>
                        <hr />
                        <div className={styles['feature']}>
                            <div className={styles['item-feature']}>
                                <Image
                                    className={styles['item-img']}
                                    src='/free-shipping.webp'
                                    alt='Not found'
                                    width={40}
                                    height={30}
                                />
                                <div className={styles['item-text']}>
                                <p>Free Shipping </p>
                                <p>Ships Today</p>
                                </div>
                            </div>
                            <div className={styles['item-feature']}>
                                <Image
                                    src="/return.webp"
                                    alt='Not found'
                                    width={40}
                                    height={30}
                                />
                                <div className={styles['item-text']}>
                                <p>Easy</p>
                                <p>Returns</p>
                                </div>
                            </div>
                            <div className={styles['item-feature']}>
                                <Image
                                    src={"/guarantee.webp"}
                                    alt='Not found'
                                    width={40}
                                    height={30}
                                />
                                <div className={styles['item-text']}>
                                <p>Lowest Price</p>
                                <p>Guarantee</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={styles['share']}>
                            <h4>SHARE THIS PRODUCT</h4>
                            <div className={styles['list-icon']}>
                                <span className={styles['icon-twi']}><i className="fa-brands fa-twitter"></i></span>
                                <span className={styles['icon-face']}><i className="fa-brands fa-facebook-f"></i></span>
                                <span className={styles['icon-google']}><i className="fa-brands fa-google-plus-g"></i></span>
                            </div>
                        </div>

                    </div>
           </Grid>
       </Grid>
       <div className={styles['description-review']}>
           <nav>
               <a href="#a"  className={styles['des-link']} id='des-link' onClick={(e)=>change(0)}>Description</a>
               <a href="#a" className={styles['rev-link']} id='rev-link' onClick={(e)=>change(1)}>Review</a>
           </nav>
           <hr />
           <div className={styles['description']} id="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare</p>
                <p>lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                <br />
                <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa</p>
                <p>massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur</p>
                <p>adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,</p>
                <p>luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>   
           </div>
           <div className={styles['review']} id="review">
                <div className={styles['ratting']}>
                    <h4>4.5 <span>(Overall)</span></h4>
                    <span>Based on 9 Comments</span><br />
                    {numstar(5)}
                    {numstar(4)}
                    {numstar(2)}
                    {numstar(0)}
                </div>
                <div className={styles['ratting-list']}>
                   {listRatiting.map(item=>(
                       <div className={styles['ratting-item']}  key={item.id}>
                           <span className={styles['user-ratting']}>{item.nameUser}</span>
                           {numstar(item.ratting)}
                           <p className={styles['content-ratting']}>{item.content}</p>
                       </div>
                   ))
                   }
                </div>
                <div className={styles['add-comment']}>
                    <h3>ADD YOUR COMMENTS</h3>
                    <span><b>Ratting:</b></span>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <Grid container columnSpacing={2}>
                        <Grid item xs={12} md={6}>
                            <Input
                            title='Name:'
                            placeholder='Name'
                            name='name'
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input
                            title='Email:'
                            placeholder='Email'
                            name='email'
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Input
                            title='Your Review:'
                            placeholder='Write a review'
                            name='review'
                            type='textarea'
                            />
                        </Grid>
                    </Grid>
                    <button>ADD REVIEW</button>
                </div>
           </div>
       </div>
       </div>

    )
}
export default ProductDetail;